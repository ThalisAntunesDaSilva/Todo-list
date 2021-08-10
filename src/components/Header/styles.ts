import styled, { css } from 'styled-components';


import { Notifications, Dashboard } from '../../styles/Icons'

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   background-color: var(--header);
   align-items: center;
   padding: 0px 90px 0px 90px;
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  height: 114px;
  align-items: center;

`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  margin-right: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--gray-text);
`;


export const Welcome = styled.div`
  display:flex;
  flex-direction: column;
  color: black;
`;


export const RightSide = styled.div`

`;


export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content:center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`; 

const iconCSS = css`
flex-shrink: 0;

width: 30px;
height: 30px;
color: black;
`;

export const Bagde = styled.span `
    position: absolute;
    top: -10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background-color: var(--primary-color);
    color: var(--white);
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;

`;


export const NotificationsIcon = styled(Notifications)`
${iconCSS}
`;

export const DashboardIcon = styled(Dashboard)`
${iconCSS}
margin-left: 20px;
`;

