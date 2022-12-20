import React,{ useState } from 'react';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { IItem } from './types/todo'

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  const handleAddTodo = (todo:IItem) => {
    setTodos((prevTodo) => [...prevTodo, {
      id: Math.random().toString(),
      title: todo.title,
    }])
  }

    const handleRemoveTodo = (id:string):void => {
      setTodos((prevTodo) => {
        return prevTodo.filter(t => t.id !== id)
      })
  }

  return (
    <>
      <h2>Todos Example</h2>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} onRemove={handleRemoveTodo} />
    </>
  );
}

export default App;
