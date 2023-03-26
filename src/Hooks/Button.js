import React from "react";
import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) =>{
    const[toggle,setToggle] = useState(false);
  
    useImperativeHandle(ref, () =>({
        alterToggle  () {
            setToggle(!toggle);
        }}
    
    
    ));

    return(
        <div>
        <button>
            button from child
            </button>
            {toggle && <span>Toggle</span>}
        </div>
    )
    }
);

export default Button;