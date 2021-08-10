import * as React from 'react';
import {
    Container,
    LeftSide,
    Avatar,
    Welcome,
    RightSide,
    Button,
    DashboardIcon,
    NotificationsIcon,
    Bagde
} from './styles';
import BellPopUp from '../BellPopUp';

const Header: React.FC = () => {

  

    const [openModal, setOpenModal] = React.useState(false);



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

                <Button onClick={() => {setOpenModal(true)}}>
                    <NotificationsIcon />
                    <Bagde>2</Bagde>
                </Button>

             {openModal && <BellPopUp /> }


                <Button>
                    <DashboardIcon />
                </Button>


            </RightSide>





        </Container>
    );
}

export default Header;