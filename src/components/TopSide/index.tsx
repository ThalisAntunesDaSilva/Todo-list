import React from 'react';
import { Container, TitleBox, ButtonNew } from './styles';
import {
  Link
} from "react-router-dom";

const TopSide: React.FC = () => {
  return (
    <Container>
      <TitleBox>
        <h1>Gerenciamento de Tarefas</h1>
        <span>Tenha o controle de suas tarefas em um único lugar</span>
      </TitleBox>
      <Link to="/newtask">
        <ButtonNew>

          Novo
        </ButtonNew>
      </Link>

    </Container>

  );
}

export default TopSide;