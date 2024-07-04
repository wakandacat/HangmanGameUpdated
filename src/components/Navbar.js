import '../styles/Navbar.module.css'
import Button from './Button';
import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';

function Navbar() {
    //grab the global variables to update them
    const { setGlobalState } = useContext(GlobalContext);

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
         
        let titleToGuess = await getRandomWikipediaTitle();
        setGlobalState({title: titleToGuess, wikiLink: `https://en.wikipedia.org/wiki/${encodeURIComponent(titleToGuess)}`});   
    };

    const giveUp = () => {
        console.log('give up');
    };

    return (
        <div>
            <Button onClick={generateNew} label="Generate" />
            <h2>HANGMAN</h2>
            <Button onClick={giveUp} label="Give Up" />
        </div>
    );
}
  
export default Navbar;