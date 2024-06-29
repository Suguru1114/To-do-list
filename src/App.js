// rfce for getting basic lines of code 
import React, {useState} from "react";

function App() {

  const [list, setList] = useState([]); // This is for the list of to-dos
  const [input, setInput] = useState(""); // This is for the current input value


  function handleInputChange(event){
    setInput(event.target.value)  //i wanna add text
  }
  
  function addTask(){
    setList([...list, input]);
    //need to think id the new item was blank or empty
    }

return (  //return has to be out side of function
  <div>
    <h1>Todo list</h1>
    <input type = "text" value ={input} onChange={handleInputChange}/>
    <button onClick={addTask}>Add</button>
    
  </div>
)

}
export default App;
