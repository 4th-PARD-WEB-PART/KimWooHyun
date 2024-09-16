import './Pages/RegisterPages/RegisterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="left"></p>
      <p className="padding"></p>

      <block className="block">
        <p className="App-header">환영합니다!</p>
        <p className="content">기본 회원 정보를 등록해주세요</p>

        <p className="box">
          <p className="object">이름</p>
          <input type="text" value="이름을 입력해주세요." className="inputText1"></input>
        </p>

        <p className="box">
          <p className="object">이메일</p>
          <input type="text" value="이메일을 입력해주세요." className="inputText2"></input>
        </p>

        <p className="box">

          <p className="object">비밀번호</p>
          <input type="text" value="비밀번호를 입력해주세요." className="inputText3"></input>
        </p>

        <p className="box">
          <p className="object">한 줄 소개</p>
          <input type="text" value="당신을 한 줄로 소개해보세요." className="inputText4"></input>
        </p>

        <input type="checkbox" className="checkbox"></input>
        <p className="sentence"><p className="word">이용약관</p>과 <p className="word">개인정보취급방침</p>에 동의합니다.</p>
        <br/><br/><br/><br/>
        <p>
          <button className='button1'>취소</button>
          <button className='button2'>가입</button></p>
      </block>

      <p className="padding"></p>
    </div>
  );
}

export default App;
