import React from 'react';

import { Container } from './styles';

const BellPopUp: React.FC = () => {
  return (
    <Container>
   
    <li>
      <ul><strong>Nossaa! Parece que você a hora de uma tarefa</strong></ul>
      <span>A tarefa "Reunião com a Pedimos" está atrasada.</span>
    </li>
    <li>
      <ul><strong>Nossaa! Parece que você a hora de uma tarefa</strong></ul>
      <span>A tarefa "Reunião com a Pedimos" está atrasada.</span>
    </li>
    <li>
      <ul><strong>Atenção! Parece que você possui uma tarefa registrada para hoje</strong></ul>
      <span>A tarefa "Reunião com a Pedimos" começa 15h30m.</span>
    </li>


    </Container>
  );
}

export default BellPopUp;