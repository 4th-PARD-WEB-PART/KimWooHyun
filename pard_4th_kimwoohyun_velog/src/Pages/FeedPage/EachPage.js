import React, { useState } from "react";
import styled from "styled-components";

import pageUser from './imageFiles/user.jpeg';
import Bheart from './imageFiles/blankheart.jpg';
import Fheart from'./imageFiles/filledheart.jpeg';

const BaseContainter = styled.div`
  width:327px;
  height:386px;
  backgroud:red;
  display:flex;
  align-items:center;
  border : 1px solid;
  flex-direction: column;
`;

const PageImage = styled.img`
  width: 100%;
  height: 160px;
  background-color: blue;
`;

const PageText = styled.div`
  height:140px;
  width:91%;
  display: flex;
  align-items: ;
  flex-direction: column;
  padding-left:30px;
  padding-top:30px;
  border: none;
  border-bottom: 3px solid #D9D9D9;
`;

const PageTextHead = styled.p`
  font-size:15px;
  font-weight:700;
  margin-top:-10px;
  margin-left:-10px;
`;

const PageTextBody = styled.p`
  font-size:14px;
  font-weight:400;
  margin-top:-10px;
  margin-left:-10px;
  color: #858E96;
`;

const PageTextEnd = styled.div`
  margin-top:auto;
  display:flex;
  color: #858E96;
`;

const PageTextDate = styled.p`
  font-size:14px;
  font-weight:400;
  margin-top:-10px;
  margin-left:-10px;
`;

const PageTexTComment = styled.p`
  font-size:14px;
  font-weight:400;
  margin-top:-10px;
  margin-left:11px;
`;

const PageTextBottom = styled.div`
  width:100%;
  height: 50px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomInfo = styled.div`
  padding-left:10px;
  width:100px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomLike = styled.div`
  padding-right:10px;
  font-size: 12px;
  width:40px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const By=styled.div`
color: #858E96;
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 14.52px;
text-align: left;
margin-left:6px;
`;

const UserName=styled.div`
font-size:12px;
font-weight:700;
margin-left:3px;
width:70px;
`;

const HeartNum=styled.p`
font-size: 12px;

margin: 0;
margin-left: 5px;
`;

function EachPage(props) {
  const[isClicked,setIsClicked]=useState(false);
  const[num,setNum]=useState(0);

  const handleClick = ()=>{
    setIsClicked(!isClicked);
    setNum(num+(isClicked? -1: 1));
  };

  return (
    <BaseContainter>
      <PageImage></PageImage>
      <PageText>
        <PageTextHead>{props.title}</PageTextHead>
        <PageTextBody>{props.body}</PageTextBody>
        <PageTextEnd>
          <PageTextDate>{props.date}</PageTextDate>
          <PageTexTComment>{props.comment}개의 댓글</PageTexTComment>
        </PageTextEnd>
      </PageText>
      <PageTextBottom>
        <BottomInfo>
          <img src={pageUser} width="22px" height="22px"></img>
           <By>by</By>
           <UserName>{props.pageUser}</UserName>
        </BottomInfo>
        <BottomLike>
          <img src={isClicked? Fheart : Bheart} width="22px" height="22px" onClick={handleClick}></img>
          <HeartNum>{Number(props.heart)+Number(num)}</HeartNum>
        </BottomLike>
      </PageTextBottom>
    </BaseContainter>
  );
}

EachPage.defaultProps = {
  heart: 0,
  comment: 0,
  date: "2099년 1월 1일",
  pageUser: "4기 웹파트",
  title:"제목",
  body:"본문을 입력하세요"
};

export default EachPage;