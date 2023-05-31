import TodoProvider from "../providers/TodoProvider";
import RemoveAll from "../RemoveBtn";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

function Home(){
    return(
        <div>
            <TodoProvider>
                <TodoForm/>
                <TodoList/>
                <RemoveAll/>
            </TodoProvider>
        </div>
        
    );
}
export default Home;

