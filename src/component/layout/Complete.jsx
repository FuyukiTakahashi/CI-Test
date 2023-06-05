import TodoListComplete from "../Completed/TodoListComplete";
import {TodoContext} from "../providers/TodoProvider";
import React,{ useContext } from "react";


function Complete(){
    const [todoList,setTodoList] = useContext(TodoContext);
    const handleRemoveAll=()=>{
        const temp = todoList.filter(todo=>todo.complete ===false);
        setTodoList(temp);
    }
    return(
        <div>
                <TodoListComplete/>
                <button id="deleteAllBtn" onClick={()=>handleRemoveAll()}>Delete All Complete</button>           
        </div>
    );
}
export default Complete;