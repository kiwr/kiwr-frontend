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
  overflow: hidden;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ selected }) => (selected ? theme.primary : theme.grey)};
  background: ${({ selected }) => (selected ? theme.lightGrey : theme.white)};
  cursor: pointer;
  width: 100%;
  font-family: 'Manjari', sans-serif;
  font-size: 1.4em;
  border-right: 2px solid ${theme.grey}42;
  padding: 12px 0px;
  transition: all 0.65s ease;

  &:last-child {
    border: none;
  }
`;
