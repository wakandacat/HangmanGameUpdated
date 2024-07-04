import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';

const ToGuess = () => {
    const { globalState } = useContext(GlobalContext);
    return <span><a href={globalState.wikiLink} target="_blank">{globalState.title}</a></span>;
}
  
export default ToGuess;