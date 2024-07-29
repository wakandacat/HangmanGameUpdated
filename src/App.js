import './App.css';
import Navbar from './components/Navbar';
import ToGuess from './components/ToGuess';
import Alphabet from './components/Alphabet';
import UserInput from './components/UserInput';
import Hangman from './components/Hangman';
import Background from './components/Background';

function App() {

  return (
    <div className="App">
    <Background/>
    <Navbar/>
    <Hangman/>
      <span id='mainBack'>
        <p id='text'>HANGMAN</p>
        <ToGuess/>
        <UserInput/>
      </span>
      <Alphabet/>
    </div>
  );
}

export default App;
