import React,{useContext} from "react";
import {TodoContext} from "../providers/TodoProvider";
import ListItemComplete from "./ListItemComplete";


const TodoListComplete=()=>{
    const [todoList] = useContext(TodoContext);
    return(
        <ul className="todoList">
            {
                todoList.map((todo,index) => (              
                    <ListItemComplete todo={todo} key={index} id={index}
                    /> 
                ))         
            }
        </ul>
    );
};
export default TodoListComplete;