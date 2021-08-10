 
interface ITodo {
    id?: number
    title?: string
    description?: string
    status?: boolean
    date ?: date
    }
    
    type ContextType = {
     todos: ITodo[]
     saveTodo: (todo: ITodo) => void
     
  
    
    }

    