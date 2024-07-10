import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Alphabet.css'

function Alphabet() {

    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);

    const alphabetList = "abcdefghijklmnopqrstuvwxyz";
    const [collectionOfLetters, updateCollectionOfLetters] = useState([]);

    useEffect(() => {

        let tempCollection = [];
 
        for(let x=0;x < alphabetList.length;x++){

            const letterIsNotGuessed = !globalState.guessedLetters.toLowerCase().includes(alphabetList[x]);

            //check if the guess is correct or incorrect
            const letterIsGuessed = globalState.guessedLetters.includes(alphabetList[x]) && globalState.title.toLowerCase().includes(alphabetList[x]);

            tempCollection.push(
                <p 
                    value={alphabetList[x]} 
                    key={alphabetList[x].toString()}
                    className={letterIsNotGuessed ? '' : (letterIsGuessed) ? 'guessedCorrect' : 'guessedIncorrect'}>
                    {alphabetList[x].toUpperCase()}
                </p>
            );
        }

        updateCollectionOfLetters(tempCollection);

    }, [globalState.guessedLetters]);


    return <div id='alpha'>{collectionOfLetters}</div>
}

export default Alphabet;