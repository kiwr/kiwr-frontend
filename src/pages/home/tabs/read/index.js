import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import QrReader from 'react-qr-reader';
import { Container } from './styles';
import { axiosPublic } from '../../../../config/axios';

const ReadScreen = () => {
  const [camera, setCamera] = useState(false);
  const [info, setInfo] = useState(null);

  return (
    <Container onClick={() => setCamera(!camera)}>
      {camera ? (
        <QrReader
          delay={300}
          onError={() => console.log('error')}
          onScan={async value => {
            if (value) {
              const data = await axiosPublic.post('/read', { token: value });
              setInfo(data.product);
              setCamera(false);
            }
          }}
          style={{ width: '100%' }}
        />
      ) : (
        <>
          <FaCamera size={72} />
          Posicione a camera no código QR
        </>
      )}
    </Container>
  );
};

export default ReadScreen;
