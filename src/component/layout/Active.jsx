import TodoForm from "../TodoForm";
import TodoProvider from "../providers/TodoProvider";
import TodoList from "../TodoList";

function Active(){
    return(
        <div>
            <TodoProvider>
                <TodoForm/>
                <TodoList/>
            </TodoProvider>
        </div>
    );
}
export default Active;