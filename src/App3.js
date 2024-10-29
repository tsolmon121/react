import {  useState } from "react";
function App3(){
    const [toDo, setTodo]=useState("");
    const [arrList, setArrlist]=useState([]);

    const onChange = (event)=>setTodo(event.target.value);
    const onSubmit =(event)=> {
        event.preventDefault(); 
        
        if(toDo ===""){
            return;
        }
        
        setArrlist(currentArray=>[toDo,...currentArray])
        setTodo("");
    };
   console.log(arrList)
   console.log(arrList.map((item,index)=> <li key={index}>{item}</li>))
    return (
            
            <div>
                <h1>My to do List ({arrList.length})</h1>
                <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="To do : "/>
                <button>Add to do</button>
                </form>

                <hr />
                <ul>
                {arrList.map((item,index)=> <li key={index}>{item}</li>)}
                </ul>
            </div>
       
        
    )
}
export default App3;