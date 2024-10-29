// import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
function App1(){
    const [counter, setValue]=useState(0);
    const [keyworkd, setKeyword] = useState("")
    const onClick=()=> setValue((prev)=> prev+1)
    const onChange=(event)=> setKeyword(event.target.value);
    // console.log("i run all the time");
    // const iRunonlyone=()=>{
    //     console.log("i run only once")
    // };
    //we use effect to run the escific code to run not all the code ro repfresh again
    useEffect(()=>{
        console.log("run only once")
    },[]);
    useEffect(()=>{
        console.log("run when 'keyword' changes")
    },[keyworkd]);
    useEffect(()=>{
        console.log("run when 'counter'  changes")
    },[counter]);
    // useEffect(()=>{
    //     console.log("run when 'counter' and 'keyword'  changes")
    // },[counter,keyworkd]);
    // useEffect(()=>{
    //     if(keyworkd !== "" && keyworkd.length>5){
    //         console.log("search for ",keyworkd);
    //     }
    // },[keyworkd]);
   
    return(
        <div>
            <input value={keyworkd} onChange={onChange} type="text" placeholder="Seearch here  "></input>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    )
}


export default App1;