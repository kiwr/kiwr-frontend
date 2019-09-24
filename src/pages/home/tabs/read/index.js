import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import QrReader from 'react-qr-reader';
import { Alert, Descriptions } from 'antd';
import { Container, InfoContainer } from './styles';
import { axiosPublic } from '../../../../config/axios';

const ReadScreen = () => {
  const [camera, setCamera] = useState(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  const toggleCamera = () => {
    setError(null);
    setCamera(!camera);
  };

  return (
    <>
      {error && <Alert message={error} type="error" />}
      <Container onClick={toggleCamera}>
        {camera ? (
          <QrReader
            delay={300}
            onError={() => setError('Erro ao ler o código')}
            onScan={async value => {
              if (value) {
                const data = await axiosPublic.post('/read', { token: value });
                setInfo({ ...data.product, message: data.message });
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
      {info && (
        <InfoContainer>
          <Descriptions title="Produto" size="middle">
            <Descriptions.Item label="Nome">{info.name}</Descriptions.Item>
            <Descriptions.Item label="Lote">{info.lot}</Descriptions.Item>
            <Descriptions.Item label="Descrição">{info.desc}</Descriptions.Item>
            <Descriptions.Item label="Status">{info.message}</Descriptions.Item>
          </Descriptions>
        </InfoContainer>
      )}
    </>
  );
};

export default ReadScreen;
