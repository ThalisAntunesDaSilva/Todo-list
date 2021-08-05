import styled, { css } from 'styled-components';


import { Notifications, Dashboard } from '../../styles/Icons'

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   background-color: var(--header);
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  height: 114px;
  padding: 40px 0px 0px 40px;

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
  padding: 40px 40px 0px 0px;;
`;

export const Button = styled.button``;

const iconCSS = css`
flex-shrink: 0;

width: 30px;
height: 30px;
color: black;
`;


export const NotificationsIcon = styled(Notifications)`
${iconCSS}
`;

export const DashboardIcon = styled(Dashboard)`
${iconCSS}
margin-left: 20px;
`;
