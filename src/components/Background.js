import React from 'react';
import '../styles/Background.css';

function Background() {

    let backWords = "";

    for(let i=0;i<130;i++){
        backWords = backWords + "HANGMAN";
    }

    return (
        <>
            <div id="background"></div>
             <div id="another"></div>
             <div id="third">{backWords}</div>
        </>
    );
}

export default Background;