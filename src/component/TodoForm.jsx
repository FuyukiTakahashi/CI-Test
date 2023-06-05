import { useState,useContext } from "react";
import {TodoContext} from './providers/TodoProvider'

const TodoForm = ()=>{
    const [todoList,setTodoList] = useContext(TodoContext);
    const [todoItem,setTodoItem] = useState("");

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setTodoList([...todoList,{name:todoItem,complete:false}]);
        setTodoItem('');
    }

    return(
       <form onSubmit={handleOnSubmit}>
            <input className="input" type="text" value={todoItem} onChange={e=>setTodoItem(e.target.value)} placeholder="  add details"/>
            <button className="addBtn" type="submit">Add</button>
       </form>
    );
}
export default TodoForm;