import React from "react";
import Button from "./Button"
import { useRef } from "react";

function ImperativeHandle(){
    const buttonRef = useRef(null);
 return(
    <div>
        <button onClick={() => buttonRef.current.alterToggle()}>button from parent</button>
        <Button ref={buttonRef}/>
    </div>
 );

};

export default ImperativeHandle;