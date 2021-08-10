import * as React from 'react';

import ToggleSwitch from '../ToggleSwitch';
 import { Container, Type, DeleteIcon } from './styles';
import {TodoContext} from '../../context/todoContext';



const ListTask: React.FC = () => {
    
    const {todos} = React.useContext(TodoContext);

  return (
    <Container>  
   
   {todos.map((todo: ITodo) => (
   <table key={todo.id}>
           
    <tr>
        <th>ID</th>
        <th>FINALIZADO?</th>
        <th>Tipo</th>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Data/Horário</th>
        <th>Ação</th>
    </tr>
   
    
    <tr>
       
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>{todo.title}</span></td>
        <td><span>{todo.description}</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>


    <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>  <tr>
        <td><span>1</span></td>
        <td><div><ToggleSwitch/></div></td>
        <td><Type>Chamada</Type></td>
        <td><span>Reunião com a Pedimos</span></td>
        <td><span>Reunião para alinhamento de desafio de React...</span></td>
        <td><span>02 Ago 2021 15:30</span></td>
        <td><DeleteIcon /></td>
    </tr>
   
   
</table>
))}
</Container>

  );
}

export default ListTask;