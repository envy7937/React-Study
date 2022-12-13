import hos from './hos.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hos} className="App-logo" alt="logo" />
        <div>
          <p>♚♚히어로즈 오브 더 스☆톰♚♚</p>
          <p>가입시$$전원 카드팩☜☜뒷면100%증정※ ♜월드오브 워크래프트♜펫 무료증정￥</p>
          <p>특정조건 §§디아블로3§§★공허의유산★초상화획득기회@@@ </p>
          <p>즉시이동http://kr.battle.net/heroes/ko/</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Play
        </a>
      </header>
    </div>
  );
}

export default App;
