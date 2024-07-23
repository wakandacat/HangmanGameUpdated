import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';
import hangImage from '../assets/HangmanCard.png';
import '../styles/Hangman.css';

function Hangman() {

    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);

    return (
        <div id='stateContainer'>
            <img src={hangImage} />
            <div id='hangmanConditions'> 
                {globalState.maxWrongGuess !== -1 ? "INCORRECT GUESSES: " + globalState.currWrongGuess + "/" + globalState.maxWrongGuess : "INCORRECT GUESSES: " + globalState.currWrongGuess}
            </div>
        </div>
    );
}

export default Hangman;