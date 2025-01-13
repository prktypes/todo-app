import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const { todos } = props

    const tab = 'All'
    return(
        <>
            {todos.map((todo,todoIndex) => {
                return(
                    <TodoCard key={todoIndex} todoIndex={todoIndex} {...props}/> //this {...} syntax means -> it says whaterver my parent is receiving send them down to me(children) too
                )
            })}
        </>
    )
}