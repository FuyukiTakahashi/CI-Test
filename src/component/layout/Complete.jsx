import TodoProvider from "../providers/TodoProvider";
import TodoList from "../TodoList";

function Complete(){

    return(
        <div>
            <TodoProvider>
                <TodoList/>
            </TodoProvider>
        </div>
    );
}
export default Complete;