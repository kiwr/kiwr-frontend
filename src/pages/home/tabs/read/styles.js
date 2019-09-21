import styled from 'styled-components';
import theme from '../../../../theme';

export const Container = styled.div`
  height: 50vh;
  width: 100%;
  border: 4px solid ${theme.grey};
  border-style: dashed;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${theme.grey};
  font-size: 16px;
  font-family: 'Disio', sans-serif;
`;
