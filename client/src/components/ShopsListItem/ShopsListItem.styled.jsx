import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
export const ShopButton = styled.button`
  background-color: ${props => (props.isActive ? '#4c4ec7' : '#5691f1')};
  border: none;
  width: 100%;
  color: #090101;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 5;
  &:hover {
    background-color: #4c4ec7;
  }
`;

export const ShopName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
