import React from 'react';

import {
    Container,
    Head,
    BoxSearch,
    IconSearch
} from './styles';

import ListTask from '../ListTask';

const BotSide: React.FC = () => {
    return (
        <Container>

            <Head>
                <h1>Tarefas</h1>
                <BoxSearch>
                    <input placeholder="Buscar..." />
                    <button>
                        <IconSearch />
                    </button>
                </BoxSearch>
            </Head>

        <ListTask />
          

        </Container>

    );
}

export default BotSide;