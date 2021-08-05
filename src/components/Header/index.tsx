import React from 'react';

import { Container, LeftSide, Avatar, Welcome, RightSide, Button, NotificationsIcon, DashboardIcon } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <LeftSide>
                <Avatar />
                <Welcome>
                    <strong>Olá, Thalis</strong>
                    <span>Bem vindo de volta.</span>
                </Welcome>
            </LeftSide>

            <RightSide>
                <Button>

                    <NotificationsIcon />
                </Button>

                <Button>

                    <DashboardIcon />
                </Button>


            </RightSide>





        </Container>
    );
}

export default Header;