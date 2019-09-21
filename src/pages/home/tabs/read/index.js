import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { Container } from './styles';

const ReadScreen = () => {
  return (
    <Container>
      <FaCamera size={72} />
      Posicione a camera no código QR
    </Container>
  );
};

export default ReadScreen;
