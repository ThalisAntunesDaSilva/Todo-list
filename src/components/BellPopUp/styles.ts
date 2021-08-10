import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  width: 450px;
  display: flex;
  justify-content: center;
  
  border-color: var(--gray-text);
  background-color: var(--white);
  flex-direction: column;
  position: absolute;
  top:20px;
  right: 135px;
  z-index: 10;
  padding: 0px 0px 0px 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  > ul {

  }

  li{ list-style: none;
    font-size: 12px;
    margin: 5px 0px 5px 0px;

    span{
      color: var(--gray-text);
    }
}

`;

