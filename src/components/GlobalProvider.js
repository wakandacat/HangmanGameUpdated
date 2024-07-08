import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
      title: "Rhubarb",
      wikiLink: "https://en.wikipedia.org/wiki/Rhubarb",
      guessedLetters: "",
      gameWin: false,
    });
  
    return (
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export default GlobalProvider;