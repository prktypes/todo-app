import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const { todos } = props
    const tab = 'All'
    const filterTodosList = tab === 'All' ?
    todos :
    tab === 'Completed' ?
        todos.filter(val => val.complete) : 
        todos.filter(val => !val.complete)
    return(
        <>
            {filterTodosList.map((todo,todoIndex) => {
                return(
                    <TodoCard 
                    key={todoIndex} 
                    todo={todo}/> //this {...} syntax means -> it says whaterver my parent is receiving send them down to me(children) too
                )
            })}
        </>
    )
}