import './App.css';
import Navbar from './components/Navbar';
import ToGuess from './components/ToGuess';
import Alphabet from './components/Alphabet';
import UserInput from './components/UserInput';
import Hangman from './components/Hangman';
import Background from './components/Background';
import Extra from './components/Extra';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div id='visualBack'>
      </div>
      <span id='mainBack'>
        <p id='text'>HANGMAN</p>
        <ToGuess/>
        <span id='userFlexBox'>
        <UserInput/>
        <Alphabet/>
        </span>
      </span> 
      <Extra/>
    </div>
  );
}

export default App;
