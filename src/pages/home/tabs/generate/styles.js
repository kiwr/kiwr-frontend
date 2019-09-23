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
`;

export const QrCodeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ListItem = styled.span`
  font-size: 14px;
  color: ${theme.black};
  background: transparent;
  transition: all 0.35s ease;
  cursor: pointer;
  width: 100%;
  padding: 12px;
  borderbottom: 1px solid ${theme.grey};
  display: block;

  &:hover {
    background: ${theme.primary};
    color: ${theme.white};
    transition: all 0.55s ease;
  }
`;
