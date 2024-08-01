import '../styles/Navbar.css'
import Button from './Button';
import React, { useContext, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import '../styles/Button.css';
import CycleButton from './CycleButton';

function Navbar() {
    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);

    //list options for difficulties
    const options = ['EASY', 'HARD', 'NONE'];
    
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

         // Pause the animation
         let link = document.querySelector("a");

         link.style.animation = 'none'; // Set to 'none' to remove the animation
         const reflow = link.offsetHeight; // Trigger reflow
         link.style.animation = ''; // Reapply the original animation

         link.style.animationPlayState = 'paused';
    };

    const giveUp = () => {
        setGlobalState(prevState => ({
            ...prevState,
            guessedLetters: 'abcdefghijklmnopqrstuvwxyz',   
        }));
    };

    //get difficulty setting from dropdown
    function difficultySetting() {

        var dropdownVal = document.querySelector("#difficulty").value;
        document.querySelector("#guess").focus();

        if(dropdownVal === "EASY"){
            return 10;
        } else if(dropdownVal === "HARD"){
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
            <Button id='first' onClick={generateNew} label="GENERATE" />
            <Button id='second' onClick={giveUp} label="GIVE UP" />
            <CycleButton listOptions={options} clickFunction={generateNew}/>
        </div>
    );
}
  
export default Navbar;