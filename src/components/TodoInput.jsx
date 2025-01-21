import { useState } from "react"

export function TodoInput(props){
    const { handleAddTodo } = props
    const [inputValue,setInputValue] = useState('')

    const handleAddTask = () => {
        if(!inputValue)return; // do nothing if input is empty
        handleAddTodo(inputValue); // add the new task
        setInputValue('');
    }
    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
            }}
            onKeyDown={(e)=>{
                if(e.key==='Enter'){handleAddTask()}
            }}
            placeholder="Add task"/>
            <button onClick={()=>{
                handleAddTask()
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}