import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';
import '../styles/ToGuess.css'

const ToGuess = () => {
    
    const { globalState } = useContext(GlobalContext);
    console.log(globalState.title);

    //get the current title to guess
    let titleString = "";

    //manipulate it to display it
    for(let x=0;x<globalState.title.length;x++){
        //if the current char is a letter then hide it
        if((/[a-zA-Z]/).test(globalState.title[x])){
            titleString = titleString + "_";
        } else { //if current char is not a letter then show it
            titleString = titleString + globalState.title[x];
        }
    }

    return <div id='guessingContainer'><a href={globalState.wikiLink} target="_blank">{titleString}</a></div>;
}
  
export default ToGuess;