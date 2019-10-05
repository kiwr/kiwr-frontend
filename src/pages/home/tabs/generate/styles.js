import styled from 'styled-components';
import theme from '../../../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const Description = styled.p`
  font-size: 14px;
  font-family: 'Disio', sans-serif;
  color: ${theme.black};
  paddingtop: 12px;
  font-weight: 600;
`;

export const QrCodeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1,
  flex: 1;
  justify-content: center;

`;

export const ListItem = styled.span`
  font-size: 14px;
  color: ${theme.black};
  background: transparent;
  transition: all 0.35s ease;
  cursor: pointer;
  padding: 12px;
  borderbottom: 1px solid ${theme.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PrintContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
