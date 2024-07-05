import './App.css';
import Navbar from './components/Navbar';
import ToGuess from './components/ToGuess';
import Alphabet from './components/Alphabet';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ToGuess/>
      <Alphabet/>
    </div>
  );
}

export default App;
