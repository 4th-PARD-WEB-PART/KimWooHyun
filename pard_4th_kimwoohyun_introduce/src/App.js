import snowImage from './snow.jpeg'
import rowImage from './row.jpeg'
import './App.css';
//onClink 함수를 쓸때는 useState 를 써야함으로 지금 구현은 힘들듯하다
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Name">Kim Woo hyun</h1>
        <p className="format">pard 4th web part <br></br>
          assignment1 - introduce</p>
          <p className="divBox">
          <button type="button" className="button" onClick="scrollToSection()">name/mbti</button>
          <p>김우현/INFP</p> <br></br>
          </p>

          <p className="divBox">
          <button type="button" className="button">picture</button>
          <p className="imgBox">
            <img src={snowImage} className="snowImage" />
            <br></br>
            Trip - Sapporo <br></br>
            <br></br>
            <img src={rowImage} className="rowImage" />
            <br></br>
            Club - Armstrong<br></br>
            </p>
          <button type="button" className="button">aim</button>
          <p>
            2024 aims <br/> <br/>
            1. 구체적인 전공 알아보기 in computer science<br/>
            2. 달리기 - NIKE Run club greem level<br/>
            3. 성격 고치기 - I에서 E, P에서 J
          </p>
          <button type="button" className="button">fav.3</button>
          <p>
            1. 운동 - 헬스, 수영, 러닝<br></br>
            2. 노래듣기 &lt;락,RnB&gt;<br/>
            3. 겨울 - 눈, 입김
          </p>
        </p>
      </header>
    </div>
  );
}

export default App;
