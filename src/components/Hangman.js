import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';
import hangImage from '../assets/HangmanCard.png';
import '../styles/Hangman.css';
import { useEffect } from 'react';
import { useRef } from 'react';

function Hangman() {

    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);
    const prevState = useRef(globalState.currWrongGuess);

    //whenever the number of wrong guesses increments, play the animation on the image
    useEffect(() => {
       
        if(prevState.current < globalState.currWrongGuess){
            let image = document.querySelector("img");

            image.style.animation = 'none'; // Set to 'none' to remove the animation
            const reflow = image.offsetHeight; // Trigger reflow
            image.style.animation = ''; // Reapply the original animation

            // Play the animation
            image.style.animationPlayState = 'running';
        }

        // Update the ref to the current value 
        prevState.current = globalState.currWrongGuess;

    }, [globalState.currWrongGuess]);

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