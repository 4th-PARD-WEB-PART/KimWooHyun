import './Pages/RegisterPages/RegisterPage';
import { Box, Button1, Button2, Checkbox, InputText1, InputText2, InputText3, InputText4, Sentence, VContent, VHeader, VObject, VPadding, VTitle, Word }from "./MyComponent";

function App() {
  return (
    <VTitle>
      <p className="left"></p>
      <VPadding></VPadding>

      <block className="block">
        <VHeader>환영합니다!</VHeader>
        <VContent>기본 회원 정보를 등록해주세요</VContent>

        <Box>
          <VObject className="input">이름</VObject>
          <InputText1 className ="text" type="text" value="이름을 입력해주세요."></InputText1>
        </Box>

        <Box>
          <VObject className="input">이메일</VObject>
          <InputText2 className ="text" type="text" value="이메일을 입력해주세요."></InputText2>
        </Box>

        <Box>
          <VObject className="input">비밀번호</VObject>
          <InputText3 className ="text" type="text" value="비밀번호를 입력해주세요."></InputText3>
        </Box>

        <Box>
          <VObject className="input">한 줄 소개</VObject>
          <InputText4 className ="text" type="text" value="당신을 한 줄로 소개해보세요."></InputText4>
        </Box>

        <Checkbox type="checkbox"/>
        <Sentence><Word>이용약관</Word>과 <Word>개인정보취급방침</Word>에 동의합니다.</Sentence>
        <br/><br/><br/><br/>
        <p>
          <Button1>취소</Button1>
          <Button2>가입</Button2></p>
      </block>

      <VPadding></VPadding>
    </VTitle>
  );
}

export default App;