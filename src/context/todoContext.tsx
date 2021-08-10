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
  {id: 1, title: 'Reunião com a Pedimos',description: 'Reunião sobre o desafio React',status: false,},
  {
      id: 2,
      title: 'Reunião com o Dev Thalis',
      description: 'Reunião importante',
      status: true,
     
       },
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
  


  return (
    <TodoContext.Provider value={{todos, saveTodo}}>
   {children} 
   </TodoContext.Provider>
  )
}

export default TodoProvider