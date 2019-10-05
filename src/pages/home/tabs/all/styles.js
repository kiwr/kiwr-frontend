import styled from 'styled-components';
import theme from '../../../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const LotContainer = styled.div`
  font-weight: 400;
  font-size: 1.2em;
  font-family: 'Manjari', sans-serif; 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1,
  flex: 1;
  justify-content: center;
`;

export const ListContainer = styled.div`
  font-weight: 700;
  padding: 12 0;
`;

export const LotTitle = styled.p`
  border-top: 1px solid #21212145;
  padding-top: 6px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 22px;
  font-weight: bold;
  font-size: 1.5em;
  font-family: 'Manjari', sans-serif;
`;

export const ListItem = styled.div`
  font-size: 14px;
  color: ${theme.black};
  background: transparent;
  transition: all 0.35s ease;
  cursor: pointer;
  padding: 12px;
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
`;
