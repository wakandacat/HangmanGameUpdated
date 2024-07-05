import './App.css';
import Navbar from './components/Navbar';
import ToGuess from './components/ToGuess';
import Alphabet from './components/Alphabet';
import UserInput from './components/UserInput';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ToGuess/>
      <Alphabet/>
      <UserInput/>
    </div>
  );
}

export default App;
