// rfce for getting basic lines of code 
import React, {useState} from "react";

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Todo list</h1>
      <input   
        type = "text"

      />
      <button>Add</button>
    
    </div>
  )
}

export default App
