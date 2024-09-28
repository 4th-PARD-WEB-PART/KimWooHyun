import EachPage from "./EachPage";
import styled from "styled-components";

import velogTitle from './imageFiles/velog.png';
import velogIcon1 from './imageFiles/bell.png';
import velogIcon2 from './imageFiles/search.jpeg';
import velogIcon3 from './imageFiles/user.jpeg';
import velogIcon4 from './imageFiles/trend.png';
import velogIcon5 from './imageFiles/recent.png';
import velogIcon6 from './imageFiles/signal.jpeg';
import velogIcon7 from './imageFiles/dropdown.png';
import velogIcon8 from './imageFiles/more.png';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Head = styled.header`
  width: 1050px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Head_btn = styled.button`
display: inline-block;
width: 100px;
height: 33px;
border-radius: 16.5px;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: 700;
line-height: 18.15px;
color: #343A40;
background: white;
border: 1px solid #343A40
&:hover {
  cursor: pointer;
  color: white;
  background-color: black;
}
`;

const Head_benner = styled.div`
width: 250px;
height: 100%;

display: flex;
align-items: center;
justify-content: space-between;

margin-right: 20px;
`;

const Nav = styled.nav`
  width:1050px;
  height:60px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

const Nav_benner = styled.div`
  height:100%;
  width:${(props) => props.right || '270px'};
  display:flex;
  align-items:center;
  justify-content: space-between;
`;

const NavBox = styled.div`
  height:100%;
  width: ${(props) => props.w} ;
  display:flex;
  align-items:center;
  justify-content: space-between;
`;

const NavBoxTitle = styled.p`
  height:22px;
  color: ${(props) => props.c || 'gray'};
  font-size: 15px;
  font-weight: 700;
  line-height: 18.15px;
`;

const Pages = styled.div`
width:1050px;
height:700px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between;
`;

const Rows = styled.div`
  width:1050px;
  height:400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  margin-top: 15px;
`;

function FeedPage() {
  return (
    <Contents>
      <Head>
        <img src={velogTitle} width="72px" height="23px" ></img>
        <Head_benner>
          <img src={velogIcon1} width="40px" height="30px"></img>
          <img src={velogIcon2} width="35px" height="30px"></img>
          <Head_btn>새 글 작성</Head_btn>
          <img src={velogIcon3} width="35px" height="35px"></img>
        </Head_benner>
      </Head>

      <Nav>
        <Nav_benner>
          <NavBox w="73px">
            <img src={velogIcon4} width="30px" height="30px"></img>
            <NavBoxTitle c="black">트렌딩</NavBoxTitle>
          </NavBox>
          <NavBox w="58px">
            <img src={velogIcon5} width="23px" height="23px"></img>
            <NavBoxTitle>최신</NavBoxTitle>
          </NavBox>
          <NavBox w="58px">
            <img src={velogIcon6} width="30px" height="30px"></img>
            <NavBoxTitle>피드</NavBoxTitle>
          </NavBox>
        </Nav_benner>
        <Nav_benner right="80px">
          <img src={velogIcon7} width="47px" height="27px"></img>
          <img src={velogIcon8} width="23px" height="23px"></img>
        </Nav_benner>
      </Nav>

      <Pages>
        <Rows>
          <EachPage title="과제2" body="이번 꺼 좀 어렵네" date="2023년 8월 14일" comment="23" pageUser="우현" heart="10"></EachPage>
          <EachPage title="과제3" body="얼마나 어려울려나" date="2023년 9월 29일" comment="12" heart="4"></EachPage>
          <EachPage title="과제4" body="얼마나 어려울려나" date="2023년 10월 6일" comment="8" heart="2"></EachPage>
        </Rows>
        <Rows>
          <EachPage></EachPage>
          <EachPage></EachPage>
          <EachPage></EachPage>
        </Rows>
      </Pages>
    </Contents>
  );
}

export default FeedPage;