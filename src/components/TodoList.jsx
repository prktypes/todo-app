import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const { todos,selectedTab } = props
    const filterTodosList = selectedTab === 'All' ?
    todos :
    selectedTab === 'Completed' ?
        todos.filter(val => val.complete) : 
        todos.filter(val => !val.complete)
    return(
        <>
            {filterTodosList.map((todo,todoIndex) => {
                return(
                    <TodoCard 
                    key={todoIndex}
                    todoIndex={todoIndex}
                    {...props}
                    todo={todo}/> //this {...} syntax means -> it says whaterver my parent is receiving send them down to me(children) too
                )
            })}
        </>
    )
}