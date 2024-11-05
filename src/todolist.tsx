import React, { useState } from 'react';


type Todo = {
  id: number;
  text: string;
  completed: boolean;
};


export function TodoList() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
      if (newTodo.trim()) {
        const newTodoItem: Todo = {
          id: Date.now(),
          text: newTodo,
          completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodoItem]);
        setNewTodo('');
      }
    };

     const toggleTodo = (id: number) => {
       setTodos((prevTodos) =>
         prevTodos.map((todo) =>
           todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
       );
     };

    //  delete fnction
     const deleteTodo = (id: number) => {
       setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
     };

  return (
    <>
      <h1>Welcome to TodoList!</h1>;<h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
