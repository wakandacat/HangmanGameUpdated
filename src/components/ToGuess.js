import React, { useContext, useState } from 'react';
import GlobalContext from './GlobalContext';
import '../styles/ToGuess.css';
import { useEffect } from 'react';

const ToGuess = () => {
    
    const { globalState, setGlobalState } = useContext(GlobalContext);

    //get the current title to guess
    const [titleString, updateTitleString] = useState("");

    //runs on the first render and whenever a new guess is made
    useEffect(() => {

        if (!globalState.title) {
            return; // Exit early if the title is not yet set
        }

        //build a string to send to updateTitleString as the new titleString
        let newTitleString = "";

        //manipulate it to display it
        for(let x=0;x<globalState.title.length;x++){

            //if the current char is a letter then hide it
            if((/[a-zA-Z]/).test(globalState.title[x]) && !globalState.guessedLetters.includes(globalState.title[x].toLowerCase()) && !globalState.guessedLetters.includes(globalState.title[x].toUpperCase())){
                newTitleString = newTitleString + "_";
            } else { //if current char is not a letter then show it
                newTitleString = newTitleString + globalState.title[x];
            }
        }

        //check if the title to guess is complete or not
        if(!newTitleString.includes("_")){
            setGlobalState(prevState => ({
                ...prevState,
                gameWin: true,         
            }));

            document.querySelector("#guess").blur();
        }

        updateTitleString(newTitleString);
    }, [globalState.guessedLetters, globalState.title]);

    return (
        <div id='guessingContainer'>
            <a href={globalState.wikiLink}
                target="_blank" 
                className={globalState.gameWin ? '' : 'inactiveLink'}>
                {titleString}
            </a>
        </div>);
}
  
export default ToGuess;