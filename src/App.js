import './App.css';
import Navbar from './components/Navbar';
import ToGuess from './components/ToGuess';
import Alphabet from './components/Alphabet';
import UserInput from './components/UserInput';
import Hangman from './components/Hangman';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div style={{display: "flex"}}>
        <Hangman/>
        <ToGuess/>
      </div>
      <Alphabet/>
      <UserInput/>
    </div>
  );
}

export default App;
