import { useState } from "react";
import { useTodoContext } from "./providers/TodoProvider";

const TodoForm = ()=>{
    const {addTodo}=useTodoContext();
    const [todoItem,setTodoItem] = useState("");

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        if(!todoItem){
            return;
        }

        addTodo(todoItem);
        setTodoItem("");
    }

    return(
       <form onSubmit={handleOnSubmit}>
            <input className="input" type="text" value={todoItem} onChange={e=>setTodoItem(e.target.value)} placeholder="  add details"/>
            <button className="addBtn" type="submit">Add</button>
       </form>
    );
}
export default TodoForm;