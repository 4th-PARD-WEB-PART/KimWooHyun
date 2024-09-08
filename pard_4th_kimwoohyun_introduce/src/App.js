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
        <p>
          <button type="button" className="button" onClick="scrollToSection()">name</button>
          <p>김우현</p> <br></br>
          <button type="button" className="button">picture</button>
          <p>
            <img src={snowImage} className="Image" />
            <img src={rowImage} className="Image" />
          </p>
          <button type="button" className="button">aim</button>
          <button type="button" className="button">fav.3</button>
        </p>
      </header>
    </div>
  );
}

export default App;
