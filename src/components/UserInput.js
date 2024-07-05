import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';
import { useState } from 'react';
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
            //send valid guesses to the global guessing string
            setGlobalState({
                ...globalState,
                guessedLetters: globalState.guessedLetters + inputValue           
            });
            console.log("valid");
        } else {
            console.log("not valid");
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
                />
            <Button id='guessButton' onClick={guessLetter} label="GUESS"/>
        </div>
    );

}

export default UserInput;