import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { useEffect } from "react";

const CycleButton = ({ listOptions, clickFunction }) => {

    const [currentOption, setCurrentOption] = useState(0);

    const handleClick = () => {
        setCurrentOption((prevIndex) => (prevIndex + 1) % listOptions.length);
    }

     //get the first title to guess on setup
     useEffect(() => {
        clickFunction();
    }, [currentOption]);

    return <button id="difficulty" tabIndex="-1" value={listOptions[currentOption]} onClick={handleClick}><p>&#9664;</p>{listOptions[currentOption]}<p>&#9658;</p></button>;
};
  
export default CycleButton;