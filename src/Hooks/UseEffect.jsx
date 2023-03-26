import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const EffectTutorial =()=>{
    const [data,setData]= useState("");
     useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email);});
     },[]);
     return(
        <h1>hello world {data} </h1>
     )
};


export default EffectTutorial;