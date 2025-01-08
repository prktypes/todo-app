import './index.css'
import './fanta.css'
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const todos = [
    {input:'Hello! Add your first todo!',complete:true},
    {input:'Get the groceries!',complete:false},
    {input:'Learn React!',complete:false},
    {input:'Say hi to friends!',complete:true},
    {input:'HEYYYYYYYYYYYYYYYY',complete:true},
  ]
  return (
    <div>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput todos={todos}/>
    </div>
  )
}

export default App;