import styled from 'styled-components';
import { Layout } from 'antd';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  background: ${theme.primary};
`;

export const MainCard = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const Title = styled.span`
    font-size: 48px;
    color: ${theme.white}
    font-family: 'Dosis', sans-serif;
    text-align: center;
    display: block;
    margin-bottom: 16px;
`;

export const Content = styled(Layout.Content)`
  padding: 48px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled(Layout.Header)`
  background: #fff;
  padding: 0;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  font-weight: 600;
`;
