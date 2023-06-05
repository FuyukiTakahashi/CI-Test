import React,{createContext,useEffect,useState} from "react";


export const TodoContext = createContext();

const TodoProvider= ({children}) => {

    const [todoList, setTodoList] = useState([{name: "Do coding challenges" ,complete:false},{name:"Do coding challenges",complete:false},{name:"Do coding challenges",complete:false}]);
 
    useEffect(()=>{
        
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodoList(todoStore)
    },[])

    useEffect(()=>{
        localStorage.setItem('todoStore',JSON.stringify(todoList))
    },[todoList])
    return (
    <TodoContext.Provider value={[todoList,setTodoList]}>
        {children}
    </TodoContext.Provider>)
}
export default TodoProvider;


