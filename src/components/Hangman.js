import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';

function Hangman() {

    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);

    return (
        <div id='hangmanConditions'> 
            {globalState.maxWrongGuess !== -1 ? "INCORRECT GUESSES: " + globalState.currWrongGuess + "/" + globalState.maxWrongGuess : "INCORRECT GUESSES: " + globalState.currWrongGuess}
        </div>
    );
}

export default Hangman;