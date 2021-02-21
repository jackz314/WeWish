import logo from './logo.svg';
import './App.css';
import {addWish, getWishes, updateWish} from './firebase';
import {addCompletedPost, getPosts} from './firebase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>updateWish("learn react", {nickname: new Date().toString()})}>Update wish</button>
        <button onClick={()=>getWishes()}>Get wishes</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => addCompletedPost("learn react")}>addCompletedPost</button>
        <button onClick={() => getPosts("learn react")}>getPosts</button>
      </header>
    </div>
  );
}

export default App;
