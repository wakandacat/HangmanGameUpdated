import '../styles/Navbar.css'
import Button from './Button';
import React, { useContext, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import '../styles/Button.css';

function Navbar() {
    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);
    
    //get a new wikipedia page from the wikipedia api
    async function getRandomWikipediaTitle() {
        const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=random&rnnamespace=0&rnlimit=1';
        
        try {
          const response = await fetch(url);
          const data = await response.json();
          const pageTitle = data.query.random[0].title;
          return pageTitle;
        } catch (error) {
          console.error('Error fetching random Wikipedia title:', error);
          return null;
        }
    }

    //function called when the generate button is clicked to get a new wiki title
    async function generateNew() {
        //get the difficulty settings
        const maxWrongGuess = difficultySetting();

        //get the title and wikiLink
        let titleToGuess = await getRandomWikipediaTitle();
        setGlobalState({title: titleToGuess, wikiLink: `https://en.wikipedia.org/wiki/${encodeURIComponent(titleToGuess)}`, guessedLetters: '', gameWin: false, maxWrongGuess: maxWrongGuess, currWrongGuess: 0, textWarning: ""});   
        
        document.querySelector("#guess").focus();
    };

    const giveUp = () => {
        setGlobalState(prevState => ({
            ...prevState,
            guessedLetters: 'abcdefghijklmnopqrstuvwxyz',
            textWarning: "GAME OVER"       
        }));
    };

    //get difficulty setting from dropdown
    function difficultySetting() {

        var dropdownVal = document.querySelector("#difficulty").value;
        document.querySelector("#guess").focus();

        if(dropdownVal === "easy"){
            return 10;
        } else if(dropdownVal === "hard"){
            return 5;
        } else {
            return -1;
        }

    }

    //get the first title to guess on setup
    useEffect(() => {
        generateNew();
    }, []);

    return (
        <div id='nav'>
            <Button onClick={generateNew} label="GENERATE" />
            <h2>HANGMAN</h2>
            <Button onClick={giveUp} label="GIVE UP" />
            <select name="difficulty" id="difficulty" onChange={generateNew}>
                <option value="easy">EASY</option>
                <option value="hard">HARD</option>
                <option value="none">NONE</option>
            </select>
        </div>
    );
}
  
export default Navbar;