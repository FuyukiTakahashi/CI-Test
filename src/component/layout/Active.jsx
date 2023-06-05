import TodoForm from "../TodoForm";
import TodoListActive from "../Active/TodoListActive";

function Active(){
    return(
        <div>          
                <TodoForm/>
                <TodoListActive /> 
        </div>
    );
}
export default Active;