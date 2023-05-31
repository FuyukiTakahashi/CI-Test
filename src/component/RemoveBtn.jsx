import { useTodoContext } from "./providers/TodoProvider";

export default function RemoveAll(){
    const {removeAll}=useTodoContext();
    return(
        <button className="deleteAllBtn" onClick={()=>removeAll()}>Delete All</button>
    );
}