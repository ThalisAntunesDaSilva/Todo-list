import styled from 'styled-components';
import {Delete} from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  max-height: 300px; 
  overflow-y: auto;
  
> table {
    width: 100%;
    th{ 
      border-bottom: 2px solid gray;
      border-style: inset;
      color: var(--gray-text);  
      padding-bottom: 15px;
    }

}
  
`;

export const Type = styled.div`
  background-color: var(--primary-light);
  color: var(--primary-color);
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const DeleteIcon = styled(Delete)`
      fill: var(--primary-color);
      height: 25px;
      margin-left: 15px;
`;