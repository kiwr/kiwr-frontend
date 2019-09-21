import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.primary};
`;

export const MainCard = styled.div`
  width: 60%;
  & span {
    font-size: 48px;
    color: ${theme.white}
    font-family: 'Dosis', sans-serif;
    text-align: center;
    display: block;
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  background: ${theme.white};
  border-radius: 6px;
  padding: 12px;
`;
