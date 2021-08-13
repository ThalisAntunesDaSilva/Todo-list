import * as React from 'react';

import ToggleSwitch from '../ToggleSwitch';
 import { Container, Type, DeleteIcon } from './styles';
import {TodoContext} from '../../context/todoContext';



const ListTask: React.FC = () => {
    
    const {todos, removeTodo} = React.useContext(TodoContext);

    const handleDelete = (todo: ITodo) => {
      removeTodo(todo);
    }


  return (
    <Container>  
   <table>
    <thead>       
    <tr>
        <th>ID</th>
        <th>FINALIZADO?</th>
        <th>Tipo</th>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Data/Horário</th>
        <th>Ação</th>
    </tr>
    </thead>
    <tbody>
    {todos.map((todo: ITodo) => {
        return(
    <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>{todo.title}</span></td>
        <td><span>{todo.description}</span></td>
        <td><span>{todo.date}</span></td>
        <td><DeleteIcon onClick={() => handleDelete(todo)}/></td>
    </tr>
) })}
   
</tbody>
   
   
   
</table>

</Container>

  );
}

export default ListTask;