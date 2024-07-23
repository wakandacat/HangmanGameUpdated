import GlobalContext from './GlobalContext';
import React, { useContext } from 'react';

function Text() {

    //grab the global variables to update them
    const { globalState, setGlobalState } = useContext(GlobalContext);

    return (
        <div id='textContent'> 
            {globalState.textWarning}
        </div>
    );
}

export default Text;