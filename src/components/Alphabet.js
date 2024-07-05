import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';
import '../styles/Alphabet.css'

function Alphabet() {

    //grab the global variables to update them
    const { globalState } = useContext(GlobalContext);

    const alphabetList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const collectionOfLetters = [];

    for(let x=0;x < alphabetList.length;x++){
        collectionOfLetters.push(<p value={alphabetList[x]} key={alphabetList[x].toString()}>{alphabetList[x]}</p>);
    }

    return <div id='alpha'>{collectionOfLetters}</div>
}

/* 
        if(globalState.guessedLetters.includes(alphabetList[x]) && globalState.title.includes(alphabetList[x])){
            collectionOfLetters.push(<p className='guessedCorrect' value={alphabetList[x]} key={alphabetList[x].toString()}>{alphabetList[x]}</p>);
        } else if(globalState.guessedLetters.includes(alphabetList[x]) && !globalState.title.includes(alphabetList[x])) {
            collectionOfLetters.push(<p className='guessedIncorrect' value={alphabetList[x]} key={alphabetList[x].toString()}>{alphabetList[x]}</p>);
        } else {
        }
*/

export default Alphabet;