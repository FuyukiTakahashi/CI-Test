import React,{useContext} from "react";
import {TodoContext} from "../providers/TodoProvider";
import ListItem from "./ListItem";

const TodoList=()=>{
    const [todoList] = useContext(TodoContext);
    return(
        <ul className="todoList">
            {   
                todoList.map((todo,index) => (
                    <ListItem todo={todo} key={index} id={index}
                    />
                ))
            }
        </ul>
    );
};
export default TodoList;