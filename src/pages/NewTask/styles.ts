import styled , {css} from 'styled-components';

import { ArrowRight, ArrowBack, Task, Call, Description, DateRange } from '../../styles/Icons';

export const Container = styled.div`
    height:100%;
    width:100%;
`;

export const TopSide = styled.div`
   height: 120px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0px 90px 0px 90px;
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

export const IconArrowRight = styled(ArrowRight)`
    fill: var(--gray-text);
    height:20px;
`;

export const ButtonBack = styled.button`
  height:40px;
  width:40px;
  border-radius:50%;
  margin-right: 60px;
  cursor: pointer;
`;

export const IconBack = styled(ArrowBack)`
  height:40px;
`;

export const Box = styled.div`
  >span { color: var(--gray-text);}
`;

export const ButtonSave = styled.button`
    background-color: var(--primary-color);
    color : var(--white);
    height: 35px;
    width:118px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        transition: 0.5s;
        background-color: var(--primary-light);
        color: black;
        cursor: pointer;
    }
`;


export const Form = styled.div`
  height: 300px;
  padding: 20px 90px 0px 90px;

  >form {
    display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

   }
  
  div{ 
    display: flex;
    flex-direction: column;
  }

  span { 
    color: var(--gray-text);
    margin: 5px 0px 2px 0px;
  }

  input { 
    width: 340px;
    height: 39px;
    border-radius: 19.5px;
    background-color: var(--white);
    color: var(--gray-text);
    border-radius: 5px;
    border-bottom: 2px solid darkgray;
    margin-bottom: 15px;
  }
  input:hover ,input:focus{
       transition: 0.5s;
        outline: 0;
        border-bottom: 2px solid var(--primary-color);
        color:rgb(107, 107, 107);
       }
   
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  
  

`;
const iconCSS = css `
  height: 30px;
  fill: var(--gray-text);
`;

export const IconPencil = styled(Task)`
  ${iconCSS}
`;

export const IconCall = styled(Call)`
  ${iconCSS}
`;

export const IconDocument = styled(Description)`
  ${iconCSS}
`;

export const IconCalendar = styled(DateRange)`
  ${iconCSS}
`;



