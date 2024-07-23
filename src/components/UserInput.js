import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from './Button';
import '../styles/UserInput.css';

function UserInput() {
    
    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);

    //create a local state of the input field
    const [inputValue, setInputValue] = useState('');

    //update the input value
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    //button onclick function
    function guessLetter(){

        //check for valid entries
        if((/[a-zA-Z]/).test(inputValue) && !globalState.guessedLetters.includes(inputValue.toLowerCase()) && !globalState.guessedLetters.includes(inputValue.toUpperCase())){
            
            const isCorrectGuess = globalState.title.toLowerCase().includes(inputValue.toLowerCase());

            //send valid guesses to the global guessing string
            //increment the wrong guesses
            setGlobalState(prevState => ({
                ...prevState,
                guessedLetters: prevState.guessedLetters + inputValue.toLowerCase(),
                currWrongGuess: isCorrectGuess ? prevState.currWrongGuess : prevState.currWrongGuess + 1         
            }));

        } else {
            setGlobalState(prevState => ({
                ...prevState,
                textWarning: "TRY ENTERING A VALID LETTER (A-Z) THAT HAS NOT ALREADY BEEN GUESSED"       
            }));
        }

        //clear the input field
        setInputValue('');
    }

    // Execute the onclick on ENTER as well
    const enterPressed = (event) => {
        if (event.key === "Enter") {
            guessLetter();
        }
    }

    //if we hit max wrong guesses, end the game
    useEffect(() => {

        if(globalState.currWrongGuess >= globalState.maxWrongGuess && globalState.maxWrongGuess !== -1){
            setGlobalState(prevState => ({
                ...prevState,
                guessedLetters: 'abcdefghijklmnopqrstuvwxyz',
                textWarning: "GAME OVER"       
            }));
        }

    }, [globalState.currWrongGuess]);


    //the html of the input field and button to get user input
    return (
        <div id="userDiv">
            <input 
                type="text" 
                id="guess" 
                maxLength="1" 
                placeholder="_" 
                autoFocus 
                value={inputValue} 
                onChange={handleInputChange}
                onKeyDown={enterPressed}
                autoComplete="off"
                style={globalState.gameWin ? {pointerEvents: "none"} : {}}
                />
            <Button id='guessButton' onClick={guessLetter} label="GUESS"/>
        </div>
    );

}

export default UserInput;