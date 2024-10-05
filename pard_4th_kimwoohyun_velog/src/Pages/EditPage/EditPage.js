import { useNavigate } from "react-router-dom";
import { Box, Button1, Button2, Checkbox, InputText1, InputText2, InputText3, InputText4, Sentence, VContent, VHeader, VObject, VPadding, VTitle, Word, Head, Head_benner, Head_btn, Contents } from "./MyComp";
import { useState } from "react";
import velogTitle from "./imageFiles/velog.png";
import velogIcon1 from "../FeedPage/imageFiles/bell.png";
import velogIcon2 from "../FeedPage/imageFiles/search.jpeg";
import velogIcon3 from "../FeedPage/imageFiles/user.jpeg";
import { useRecoilState } from "recoil";
import { myInfoComent, myInfoEmail, myInfoName, myInfoPW } from "../../Atom";



function EditPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/feed");
  }

  const [myName,setMyName] = useRecoilState(myInfoName);
  const [myEmail,setMyEmail] = useRecoilState(myInfoEmail);
  const [myPW,setMyPW] = useRecoilState(myInfoPW);
  const [myComent,setMyComent] = useRecoilState(myInfoComent);

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
      <VTitle>
        <p className="left"></p>
        <VPadding></VPadding>

        <block className="block">
          <VHeader>회원정보 수정</VHeader>
          <VContent>기본 회원 정보를 등록해주세요</VContent>

          <Box>
            <VObject className="input">이름</VObject>
            <InputText1 className="text" type="text" placeholder={myName} onChange={(e)=>setMyName(e.target.value)}></InputText1>
          </Box>

          <Box>
            <VObject className="input">이메일</VObject>
            <InputText2 className="text" type="text" placeholder={myEmail} onChange={(e)=>setMyEmail(e.target.value)}></InputText2>
          </Box>

          <Box>
            <VObject className="input">비밀번호</VObject>
            <InputText3 className="text" type="text" placeholder={myPW} onChange={(e)=>setMyPW(e.target.value)}></InputText3>
          </Box>

          <Box>
            <VObject className="input">한 줄 소개</VObject>
            <InputText4 className="text" type="text" placeholder={myComent} onChange={(e)=>setMyComent(e.target.value)}></InputText4>
          </Box>
          <br /><br /><br /><br />
          <p>
            <Button1>취소</Button1>
            <Button2 onClick={handleLogin}>수정</Button2></p>
        </block>

        <VPadding></VPadding>
      </VTitle>
    </Contents>);
}

export default EditPage;