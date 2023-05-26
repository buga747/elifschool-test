import styled from 'styled-components';

export const ProductListWrapper = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  height: 100vh;
  overflow-y: scroll;
`;

export const ProductListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-height: 100vh;
`;

export const Title = styled.h2`
  margin-bottom: 12px;
`;
