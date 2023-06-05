import React,{useContext} from "react";
import { TodoContext } from "../providers/TodoProvider";


export default function ListItem({todo,id}){
    const [todoList,setTodoList] = useContext(TodoContext)

    const switchComplete = (id) =>{
        const newTodos = [...todoList]
        newTodos.forEach((todo,index)=>{
            if(index === id){
                todo.complete = !todo.complete
                setTodoList(newTodos)
            }
        })
    }
    const handleOnRemove =(id)=>{
        const newList = todoList.filter((_,index)=> index !==id)
        setTodoList(newList)
    }
    return(
        <li>
            <lable htmlFor={id} className={todo.complete ? "completed" : ""}>
                <input id={id} type="checkbox" checked={todo.complete}
                onChange={()=>switchComplete(id)}/>
                <div className="todoName">{todo.name}</div>     
            </lable>
            <button  className="removeBtn" onClick={()=>handleOnRemove(id)}>
                <span className="glyphicon glyphicon-trash"></span></button>
        </li>
    )
}