import styled from 'styled-components';

export const Container = styled.label`

  background-color: var(--secondary-color);
  width: 40px;
  height: 20px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 38px;
 

  input{ 
    height: 100%;
    width: 100%;
    opacity:0;
    background-color: var(--primary-color);
    cursor: pointer;
  }

  span {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 1rem;
    background-color: var(--secondary-color);
    left: 0;
    cursor: pointer;
    box-shadow: 2px 2px 4px gray; 
    transition: 0.25s;
  }

  input:checked + span {
  left: 50%;
  background-color: var(--white);
}
`;

