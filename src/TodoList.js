import { useState } from "react";
import './TodoList.css'




function TodoList() {
    
const [value, setValue] = useState("")
const [list, setList] = useState([])

const handleOnSubmit = (e) => {
    e.preventDefault();
    if(value.trim() !== '' ) {
        setList([...list, value.trim()]);
        setValue('');
    }
}

const handleOnChange = (e) => {
    setValue(e.target.value);
    
}

const handleOnDelete = (index) => {
    const listremove = list.filter((_, i) => i !== index);
    setList(listremove);
}
return <>

    <div className="container-form" >

            <h1>Todo List</h1>
            <form className="form-body" onSubmit={handleOnSubmit}>
               

                <input 
                className="input-body" 
                value={value}
                type="text" 
                placeholder="What's the new task?"   
                onChange={handleOnChange}                           
                
                
                
                 />

            </form>
        <div className="container-tasks">
            <ul className="task-body">
                
                {list.map((item, index) => (
                    <li key={index}>{item}
                    <button id="removeButton" onClick={() => handleOnDelete(index)}> X </button></li>
                ))}
                
                
               

            </ul>

        </div>

        <div className="items-left">

            <span>{list.length} Items left</span>

        </div>

    </div>

</>
}

export default TodoList;