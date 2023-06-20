import logo from './logo.svg';
import './App.css';

function App() {

    function hovered(e) {
        console.log("fasd")
    }

  return (
    <div className="App">
      <header className="App-header">

        <p onMouseOver={hovered} className={"paper-background"} id="main">
          KAVIN
        </p>
          <p onMouseOver={hovered} className={"paper-background"} id="main">
              DHANAPAL 5
          </p>

      </header>
    </div>
  );
}

export default App;
