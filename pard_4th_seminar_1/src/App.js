// import './App.css';
import { BaseContainer, Content, Email, Input, Name } from './MyComponent';

function App() {
  return (
    <BaseContainer>
      <Name>이름</Name>
      <Input type="text"></Input>
      <Email>이메일</Email>
      <Input type="text"></Input>
      <Content>콘텐츠</Content>
      <Input type="text"></Input>
    </BaseContainer>
  );
}



export default App;
