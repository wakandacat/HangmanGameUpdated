import './App.css';
import Navbar from './components/Navbar';
import ToGuess from './components/ToGuess';
import Alphabet from './components/Alphabet';
import UserInput from './components/UserInput';
import Hangman from './components/Hangman';
import Text from './components/Text';

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
      <Text/>
    </div>
  );
}

export default App;
