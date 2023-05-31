import { createContext, useContext, useState } from "react"

const TodoContext = createContext();

const initialTodoListState = ["Do coding challenges","Do coding challenges","Do coding challenges"];

const TodoProvider = ({ children }) =>{

    const [todoList, setTodoList]= useState(initialTodoListState);

    const addTodo =(newTodoItem)=>{
        setTodoList([...todoList,newTodoItem]);
    };

    const removeTodo = (todoIndex)=>{
        const newList = todoList.filter((_, index)=> index !== todoIndex)
        setTodoList(newList);
    
    };
    const removeAll = () =>{
        setTodoList([]);
        
    }

    const contextValue = {
        todoList,
        addTodo,
        removeTodo,
        removeAll,
    }
    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
}

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
