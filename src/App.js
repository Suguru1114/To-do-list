// rfce for getting basic lines of code 
import React, {useState} from "react";

function App() {

  const [list, setList] = useState([]); // This is for the list of to-dos
  const [input, setInput] = useState(""); // This is for the current input value


  function handleInputChange(event){
    setInput(event.target.value)  //i wanna add text
  }

  
  
  function addTask(){
    if (input.trim() !==""){  //remove empty or white space
    setList([...list, input]);
    setInput(""); //empty the input bar after press add

     }
    }
   
    function handleKeyPress(event){
      if (event.key === "Enter"){
        addTask();
      }
    }

return (  //return has to be out side of function
  <div>
    <h1>Todo list</h1>
    <input 
      type = "text" value ={input} onChange={handleInputChange} 

      />
    
    <button onClick={addTask}>Add</button> 
    {/* to render array of list, use "map function" = can see the list of items */}
    <ul>     

      {list.map(function(task, index) {
      return <li key={index}>{task}</li>;
    })}
    </ul>
  </div>
)

}
export default App;
