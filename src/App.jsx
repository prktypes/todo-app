import './index.css'
import './fanta.css'
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

function App() {
  // const todos = [
  //   {input:'Hello! Add your first todo!',complete:true},
  //   {input:'Get the groceries!',complete:false},
  //   {input:'Learn React!',complete:false},
  //   {input:'Say hi to friends!',complete:true},
  // ]

  const [todos,setTodos] = useState([
    {input:'Hello! Add your first todo!',complete:true}
  ])

  function handleAddTodo(newTodo){
    const newTodoList = [...todos,{ input : newTodo,complete:false }]
    setTodos(newTodoList)
  }
  function handleEditTodo(){

  }
  function handleDeleteTodo(){

  }

  return (
    <div>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </div>
  )
}

export default App;