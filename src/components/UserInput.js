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
            console.log("enter valid letter that has not already been guessed");
        }

        //clear the input field
        setInputValue('');
    }

    // Execute the onclick on ENTER as well
    const enterPressed = (event) => {
        if (event.key === "Enter") {
            //imitate button press

           // const button = buttonRef.current;
            const button = document.querySelector('#guessButton');
            button.classList.add('hover-animation'); // Add hover animation class

            guessLetter();
        }
    }

    //remove the ENTER button animation once finished
    const donePressed = (event) => {
        if (event.key === "Enter") {
            const button = document.querySelector('#guessButton');
            button.classList.remove('hover-animation'); // Ensure reverse class is removed
        }
    }
   
    //if we hit max wrong guesses, end the game
    useEffect(() => {

        if(globalState.currWrongGuess >= globalState.maxWrongGuess && globalState.maxWrongGuess !== -1){
            setGlobalState(prevState => ({
                ...prevState,
                guessedLetters: 'abcdefghijklmnopqrstuvwxyz',   
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
                onKeyUp={donePressed}
                autoComplete="off"
                style={globalState.gameWin ? {pointerEvents: "none"} : {}}
                />
            <Button id='guessButton' onClick={guessLetter} label="GUESS"/>
        </div>
    );

}

export default UserInput;