import styled, { css } from 'styled-components';
import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 355px;
  padding: 10px 90px 10px 90px;
  
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
 
`;

export const BoxSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  > input {
    width: 340px;
    height: 39px;
    border-radius: 19.5px;
    background-color: var(--white);
    color: var(--gray-text);
    border-radius: 5px;
    border-bottom: 2px solid darkgray;
  }
  input:focus{
       transition: 0.5s;
        outline: 0;
        border-bottom: 2px solid var(--primary-color);
        color:rgb(107, 107, 107);
       }

  > button {
        background-color: var(--primary-color);
        border-radius: 5px;
        height: 39px;
        width: 39px;
        margin-left: 10px;
  }

  > button:hover {
      background-color: #D25959;
      transition: 0.5s;
  }


`;

const iconCSS = css`
    height: 20px;
    fill: var(--white);
`

export const IconSearch = styled(Search)`
${iconCSS}
`;