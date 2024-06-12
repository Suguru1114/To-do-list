import React, {usestate} from 'react'

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
     
    function handleInputChange(event){

    }

    function addTask(){

    }

    function deleteTask(index){

    }

    

    return(
        <div className="to-do-list">

            <h1>To-Do-List</h1>

                <div>
                    <input
                        type="text"

                    />
                </div>

        </div>);

    
}

export default TodoList