 export function Header(props){//receiving props
    const { todos } = props //label is assgined
    const todosLength = todos.length

    const isTasksPlural = todos.length != 1

    const taskOrtasks = isTasksPlural ? 'tasks' : 'task'

    return(
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrtasks}.{isTasksPlural}</h1>
        </header>
    )
}