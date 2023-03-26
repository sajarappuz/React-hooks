import React from "react";
import { useRef } from "react";

const RefTutorial = ()=>{

    const inputRef = useRef("");

    const onClick = () => {
        inputRef.current.focus();
        console.log("abc")
    }
    return(
        <div>
            <h1>wizZ</h1>
            <input type="text" placeholder="xyx" />
            <button onClick={onClick}>Change name</button>
        </div>
        
    );
};

export default RefTutorial;