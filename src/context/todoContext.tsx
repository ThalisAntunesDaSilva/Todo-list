import * as React from 'react'

const contextDefaultValues: ContextType = {
  todos: [],
 saveTodo: () => { },
 removeTodo: () => { },
}

export const TodoContext = React.createContext<ContextType>(
  contextDefaultValues
);

const TodoProvider: React.FC = ({ children }) => {
  
  
    const [todos, setTodos] = React.useState<ITodo[]>([
  {id: 1, title: 'Reunião com a Pedimos',description: 'Reunião sobre o desafio React',status: false,},
  {id: 2,title: 'Reunião com o Dev Thalis',description: 'Reunião importante',status: true},
  
  ])

  
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), 
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo])
  }
  
  const removeTodo = (todo: ITodo) => {
    todos.splice(todos.indexOf(todo));

    setTodos([...todos]);
  }

  


  return (
    <TodoContext.Provider value={{todos, saveTodo, removeTodo}}>
   {children} 
   </TodoContext.Provider>
  )
}

export default TodoProvider