import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';
import '../styles/Extra.css';
import { useEffect } from 'react';
import { useRef } from 'react';

function Extra() {

    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);

    //whenever the number of wrong guesses increments, play the animation on the image
    useEffect(() => {
       
        if(globalState.gameWin === true){
            console.log("yippee");
            document.querySelector('#clickMe').style.display = "block";
        } else {
            document.querySelector('#clickMe').style.display = "none";
        }

    }, [globalState.gameWin]);

    return (
        <div id='clickMe'>
           <a target="_blank" href={globalState.wikiLink}>CLICK ME</a>
        </div>
    );
}

export default Extra;