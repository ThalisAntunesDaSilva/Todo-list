import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 130px;
  background-color: var(--white);
  justify-content: space-between;
  align-items: center;
  padding: 0px 90px 0px 90px;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;

    > h1{
        color: var(--black);
        font-size: 28px; 
    }

    > span {
        color: var(--gray-text);
        font-size:14px;
    }

`;

export const ButtonNew = styled.button`
    background-color: var(--primary-color);
    color : var(--white);
    height: 35px;
    width:118px;
    border-radius: 10px;
    `;
