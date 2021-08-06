import styled, { css } from 'styled-components';

import { Call, Business, Email, Map } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 90px 0px 90px; 
   
`;

export const Box = styled.div`
  display: flex;
    flex-direction: row;
    
    align-items: center;
    

`;

export const BallCall = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50% ;
  background-color: var(--primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const Info = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const BallMeet = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50% ;
  background-color: var(--secondary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const BallEmail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50% ;
  background-color: var(--primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const BallLocal = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50% ;
  background-color: var(--secondary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;


const iconCSSPrimary = css `
    width: 40px;
    height: 40px;
   

    fill: var(--primary-color);

`

const iconCSSSecondary = css `
    width: 40px;
    height: 40px;
   

    fill: var(--secondary-color);

`

export const IconCall = styled(Call)`
    ${iconCSSPrimary}
`;

export const IconMeet = styled(Business)`
   ${iconCSSSecondary}
`;

export const IconEmail = styled(Email)`
   ${iconCSSPrimary}
`;

export const IconLocal = styled(Map)`
   ${iconCSSSecondary}
`;
