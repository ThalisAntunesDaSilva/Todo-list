import React from 'react';

import { Container, 
    Box, 
    BallCall, 
    IconCall, 
    BallMeet, 
    IconMeet, 
    BallEmail,
    IconEmail, 
    BallLocal, 
    IconLocal, 
    Info
} from './styles';

const MidSide: React.FC = () => {
  return (
        <Container>
            <Box>
            
            <BallCall>
            <IconCall/>
            </BallCall>
            <Info>
            <h1>150</h1>
            <span>Chamadas</span>
            </Info>
            </Box>
            
            <Box>
            <BallMeet>
            <IconMeet/>
            </BallMeet>
            <Info>
            <h1>14</h1>
            <span>Reuniões</span>
            </Info>
            </Box>

            <Box>
            <BallEmail>
            <IconEmail/>
            </BallEmail>
            <Info>
            <h1>25</h1>
            <span>E-mails</span>
            </Info>
            </Box>

            <Box>
            <BallLocal>
            <IconLocal/>
            </BallLocal>
            <Info>
            <h1>34</h1>
            <span>Visitas</span>
            </Info>
            </Box>



        </Container>

  );
}

export default MidSide;