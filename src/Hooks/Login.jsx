import { useContext } from "react";
import React  from "react";
import { AppContext } from "./UseContext";


function Login(){
    const {setUsername} = useContext(AppContext);
    return(
        <div>
            <input 
            onChange={(event)=>{
                setUsername(event.target.value);}}
                />
        </div>
    );
}

export default Login;