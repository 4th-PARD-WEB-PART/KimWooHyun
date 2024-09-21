import './Pages/RegisterPages/RegisterPage';
// import './App.css';
import { Box, Button1, Button2, Checkbox, InputText1, InputText2, InputText3, InputText4, Sentence, VContent, VHeader, VObject, VPadding, VTitle, Word }from "./MyComponent";


// .box:hover .object{
//   color:#15B886;
// }

// .box:hover .inputText1{
//   color: #15B886;
//   border: none;
//   border-bottom: 1px solid #15B886;
// } 
/* css에서는 위에 처럼 box라는 태그안에서 object와 inputText1을 hover 특성 설정할 수 있는데 styled component에서는 어떻게 하는 지 몰라서 각각 태그에 hover를 설정해둠 */


function App() {
  return (
    <VTitle>
      <p className="left"></p>
      <VPadding></VPadding>

      <block className="block">
        <VHeader>환영합니다!</VHeader>
        <VContent>기본 회원 정보를 등록해주세요</VContent>

        <Box>
          <VObject>이름</VObject>
          <InputText1 type="text" value="이름을 입력해주세요."></InputText1>
        </Box>

        <Box>
          <VObject>이메일</VObject>
          <InputText2 type="text" value="이메일을 입력해주세요."></InputText2>
        </Box>

        <Box>
          <VObject>비밀번호</VObject>
          <InputText3 type="text" value="비밀번호를 입력해주세요."></InputText3>
        </Box>

        <Box>
          <VObject>한 줄 소개</VObject>
          <InputText4 type="text" value="당신을 한 줄로 소개해보세요."></InputText4>
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