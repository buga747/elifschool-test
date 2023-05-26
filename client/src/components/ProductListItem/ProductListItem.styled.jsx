import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  display: flex;
  width: 330px;
  height: 460px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Price = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #9a2222;
  padding: 4px;
  border-radius: 4px;
  background-color: beige;
`;

export const Category = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;
  color: #150505;
  background-color: #ebcfcf;
  padding: 4px;
  border-radius: 4px;
`;
