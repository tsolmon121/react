import { useEffect, useState } from "react";

// clean up function
function Hello(){
//     function byeFunc(){
//         console.log("hidden")
//     }
//     function hiFunc(){
//         console.log("created");
//         return byeFunc;

// }


    useEffect(()=>{
        console.log("hi ");
        return () => console.log("bye");
    },[]);

    return <h1>Hello</h1>
    }



    // useEffect(function(){
    //     console.log("hi ");
    //     return function(){
    //         console.log("bye");
    //     };
    // },[]);
    // return <h2>hi</h2>
    // }
//use effect allows to choose when to run the code

function App2(){
    const [showing, setShowing] = useState(false);
    const onClick =()=> setShowing((prev)=> !prev);
    return(
    <div>
        {showing ? <Hello />:null}
        <button onClick={onClick}>{showing?"Hide" : "Show"}</button>
    </div>
    )
    
}

export default App2;