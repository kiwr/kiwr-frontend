import styled from 'styled-components';
import theme from '../../theme';

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: ${theme.white};
  border-radius: 6px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ selected }) => (selected ? theme.primary : theme.grey)};
  cursor: pointer;
  width: 100%;
  font-family: 'Manjari', sans-serif;
  font-size: 1.4em;
  border-right: 2px solid ${theme.grey}42;
  padding: 12px 0px;

  &:last-child {
    border: none;
  }
`;
