import * as React from 'react'

const contextDefaultValues: ContextType = {
  todos: [],
 saveTodo: () => { },
}

export const TodoContext = React.createContext<ContextType>(
  contextDefaultValues
);

const TodoProvider: React.FC = ({ children }) => {
  
  
    const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: 'é os guri',
      description: 'do gremio',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ])

  

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), 
      title: todo.title,
      description: todo.description,
      status: false,
    }
    setTodos([...todos, newTodo])
  }

  
/*
  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true
        setTodos([...todos])
      }
    })
  }
*/
  return (
    <TodoContext.Provider value={{todos, saveTodo}}>
   {children} 
   </TodoContext.Provider>
  )
}

export default TodoProvider