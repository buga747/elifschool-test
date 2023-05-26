import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2b0505;
  z-index: 5;
`;

export const DiscoverLink = styled(Link)`
  background-color: #1da1f2;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 5;
  &:hover {
    background-color: #0c8de4;
  }
`;

export const Description = styled.span`
  font-size: 1.5rem;
  color: #0f0606;
  margin-top: 1rem;
  text-transform: uppercase;
  z-index: 5;
`;
