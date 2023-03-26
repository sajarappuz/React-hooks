import React, { useEffect, useLayoutEffect, useRef } from "react";


const LayOutTutorial=()=>{

    const inputRef = useRef (null);


    useLayoutEffect(() =>{
        console.log(inputRef.current.value)
    },[]);

   useEffect(() => {
       inputRef.current.value = "HELLO";
    },[]);


    return(
        <div className="App">
            <input ref={inputRef} value="WIZZ" />
        </div>

    )
};

export default LayOutTutorial