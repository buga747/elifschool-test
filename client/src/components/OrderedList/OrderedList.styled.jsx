import styled from 'styled-components';

export const ItemContainer = styled.div`
  flex-basis: 50%;
  max-height: 80vh;
  overflow-y: scroll;

  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e6e6e6;
  }

  li:last-child {
    border-bottom: none;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  flex-shrink: 0;
  width: 150px;
  height: auto;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ItemPrice = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #373434;
`;

export const ItemQuantity = styled.div`
  margin-top: 5px;
  font-size: 14px;

  input[type='number'] {
    width: 50px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const ItemTotalPrice = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #063c56;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #ff0000;
  transition: color 0.2s;

  &:hover {
    color: #ff5555;
  }
`;

export const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: #00aaff;
`;
