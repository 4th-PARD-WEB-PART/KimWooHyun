import dpImg1 from './imageFiles/벨로그 아이콘.png'
import dpImg2 from './imageFiles/알림 아이콘.png'
import dpImg3 from './imageFiles/검색 아이콘.png'
import dpImg4 from './imageFiles/유저 프로필 이미지.png'
import dpImg5 from './imageFiles/공유 Box.png'
import dpImg6 from './imageFiles/피드 작성자 이미지.png'
import dpImg7 from'./imageFiles/깃허브 아이콘.png'
import dpImg8 from'./imageFiles/홈  아이콘.png'
import dpImg9 from'./imageFiles/메일 아이콘.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.header`
  display: flex;
  margin-left: 200px;
  margin-right:200px;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  width: 1050px;
  height: 90px;
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

const Head_left_benner = styled.div`
width: 150px;
height: 100%;

display: flex;
align-items: center;
justify-content: space-between;

margin-right: 20px;
`;

const Author= styled.p`
display: flex;
justify-content: space-between;
align-items: center;
`;

const LetterID = styled.p` 
font-size: 16px;
font-weight: 900;
line-height: 22.99px;
`;


const Head_right_benner = styled.div`
width: 250px;
height: 100%;

display: flex;
align-items: center;
justify-content: space-between;

margin-right: 20px;
`;

const Content = styled.div`
width: 70%;
display: flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
margin-left:200px;
margin-right:200px;
`;

const Nav= styled.div`
  margin-left:40px;
  display:flex;
  margin-top: -250px;
`;

const SideBar = styled.img`
  width: 64px;
  height: 149px;
`;

const ContentBody=styled.div`
  width: 100%;
  margin-left: 30px;
  margin-right: 140px;
`;

const FeedTitle=styled.div`
font-family: Inter;
font-size: 46px;
font-weight: 700;
line-height: 55.67px;
text-align: left;
`;

const FeedSub=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const FeedInfo_left=styled.div`
width: 110px;
display: flex;
align-items; center;
justify-content: space-between;
`;

const InfoName =styled.p`
font-weight: 900;
text-align: left;
`;

const FeedInfo_right=styled.div`
width: 110px;
display: flex;
align-items; center;
justify-content: space-between;
color: #858E96;
`;

const FeedContent=styled.div`
  margin-top:60px;
  height: 300px;
`;

const FeedAuthorInfo=styled.div`
  border: none;
  border-bottom: 1px solid gray;
  display: flex;
  alignl-items: left;
  justify-content: left;;
  padding-bottom:30px;
`;

const FeedAuthorImage=styled.img`
  width:132px;
  height:132px;
`;

const FeedAuthorComment=styled.div`
  margin-top:40px;
  margin-left:20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom:20px;
  justify-contetn: space-between;
`;

const CommentName=styled.div`
font-family: Inter;
font-size: 23px;
font-weight: 700;
line-height: 27.84px;
text-align: left;
`;

const LinkedList=styled.div`
margin-top:10px;
display: flex;
width: 55%;
align-items:center;
justify-content: space-between;
`;

const Button=styled.img`
  width:35px;
  height: 35px;
`;

const LinkedList_left=styled.div`
margin-left:20px;
width: 120px;
display: flex;
align-items: center;
justify-content: space-between;
`;

function DetailPage() {

  const FeedInfo = {
    title: "PARD 4기 화이팅",
    content: "이 글은 PARD 4기 여러분에게 과제가 될 것입니다.",
    author_name: "김광일",
    author_id: "oksk6681",
    author_image: "/Img/DetailPage/kwangil.png",
    author_info: "개발을 꿈꾸는 사람입니다.",
    date: "24.08.14",
    heart_count: "0"
  }

  const navToFeed = useNavigate();
  const [goToFeed, setToFeed] = useState(false);

  const handleToFeed = () => {
    setToFeed(!goToFeed);
    navToFeed("/feed");
  }

  return (
    <Detail>
      <Header>
        <Head_left_benner>
          <img src={dpImg1} width="28px" height="28px" onClick={handleToFeed} ></img>
          <Author><LetterID>{`${FeedInfo.author_id}`}</LetterID>.log</Author>
        </Head_left_benner>
        <Head_right_benner>
          <img src={dpImg2} width="15.5px" height="20px"></img>
          <img src={dpImg3} width="17px" height="17.5px"></img>
          <Head_btn>새 글 작성</Head_btn>
          <img src={dpImg4} width="35px" height="35px"></img>
        </Head_right_benner>
      </Header>
      <Content>
        <Nav>
        <SideBar src={dpImg5} />
        </Nav>
        <ContentBody>
          <FeedTitle>
            {FeedInfo.title}
          </FeedTitle>
          <FeedSub>
            <FeedInfo_left><InfoName> {FeedInfo.author_name}</InfoName> <p>{FeedInfo.date}</p></FeedInfo_left>
            <FeedInfo_right>통계 수정 삭제</FeedInfo_right>
          </FeedSub>
          <FeedContent>
            {FeedInfo.content}
          </FeedContent>
           <FeedAuthorInfo>
            <FeedAuthorImage src={dpImg6} />
             <FeedAuthorComment>
              <CommentName>{FeedInfo.author_name}</CommentName>
              <div>{FeedInfo.author_info}</div>
            </FeedAuthorComment>
          </FeedAuthorInfo> 
        </ContentBody>
      </Content>
      <LinkedList>
      <LinkedList_left>
      <Button src={dpImg7}/>
      <Button src={dpImg8}/>
      <Button src={dpImg9}/>
      </LinkedList_left>
      <div></div>
      </LinkedList>
    </Detail>
  );
}

export default DetailPage;