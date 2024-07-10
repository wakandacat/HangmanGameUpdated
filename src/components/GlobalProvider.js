import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
      title: "",
      wikiLink: "",
      guessedLetters: "",
      gameWin: false,
      maxWrongGuess: 10,
      currWrongGuess: 0,
    });
  
    return (
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export default GlobalProvider;