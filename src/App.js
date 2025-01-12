import logo from './logo.svg';
import './App.css';
import Witaj from './Witaj';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Witaj/>
      </header>
    </div>
  );
}

export default App;
