import React,{useContext} from "react";
import {TodoContext} from "../providers/TodoProvider";
import ListItemActive from "./ListItemActive";


const TodoListActive=()=>{
    const [todoList] = useContext(TodoContext);
    return(
        <ul className="todoList">
            {
                todoList.map((todo,index) => (              
                    <ListItemActive todo={todo} key={index} id={index}
                    /> 
                ))         
            }
        </ul>
    );
};
export default TodoListActive;