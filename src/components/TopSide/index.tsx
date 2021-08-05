import React from 'react';
import { Container,TitleBox, ButtonNew } from './styles';

const TopSide: React.FC = () => {
  return (
    <Container>
        <TitleBox>
        <h1>Gerenciamento de Tarefas</h1>
        <span>Tenha o controle de suas tarefas em um único lugar</span>
        </TitleBox>

        <ButtonNew>
            Novo
        </ButtonNew>


    </Container>

  );
}

export default TopSide;