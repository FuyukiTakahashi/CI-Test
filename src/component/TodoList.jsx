import { useTodoContext } from "./providers/TodoProvider";

const TodoList =() =>{
    const {todoList, removeTodo, } = useTodoContext();
    
    return(
        <ul className="todoList">
            {todoList.map((todo, index)=>(
                <li key={index}>
                    <input className="checkBox" type="checkbox" />
                    <label>{todo}</label>
                    <button  className="removeBtn" onClick={()=>removeTodo(index)}><span className="glyphicon glyphicon-trash"></span></button>
                </li>
            ))}
        </ul>
    );
};
export default TodoList;