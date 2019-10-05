import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import QrReader from 'react-qr-reader';
import { Alert, Descriptions } from 'antd';
import { Container, InfoContainer } from './styles';
import { axiosPublic } from '../../config/axios';
import {
  Content,
  MainCard,
  Container as HomeContainer,
  Title,
} from '../home/styles';

const ReadScreen = () => {
  const [camera, setCamera] = useState(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  let teste = true;

  const toggleCamera = () => {
    setError(null);
    setCamera(!camera);
    teste = true;
  };

  return (
    <HomeContainer>
      <MainCard>
        <div>
          <Title>KiwR</Title>
        </div>

        <Content>
          {error && <Alert message={error} type="error" />}

          {info && (
            <InfoContainer>
              <Descriptions title="Produto" size="middle">
                <Descriptions.Item label="Nome">{info.name}</Descriptions.Item>
                <Descriptions.Item label="Lote">{info.lot}</Descriptions.Item>
                <Descriptions.Item label="Descrição">
                  {info.desc}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  {info.message}
                </Descriptions.Item>
              </Descriptions>
            </InfoContainer>
          )}
          <Container onClick={toggleCamera}>
            {camera ? (
              <QrReader
                delay={300}
                onError={() => setError('Erro ao ler o código')}
                onScan={async value => {
                  if (value && teste) {
                    const data = await axiosPublic.post('/read', {
                      token: value,
                    });
                    teste = false;
                    setInfo({
                      ...data.data.product,
                      message: data.data.product.message,
                    });

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
        </Content>
      </MainCard>
    </HomeContainer>
  );
};

export default ReadScreen;
