import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import QrReader from 'react-qr-reader';
import { Alert, Descriptions, Layout } from 'antd';
import { Container, InfoContainer } from './styles';
import { axiosPublic } from '../../config/axios';
import { Content, Title, Header } from '../home/styles';

const { Sider } = Layout;

const ReadScreen = () => {
  const [collapsed, setCollapsed] = useState(false);
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
    <Layout style={{ minHeight: '100vh', paddingLeft: collapsed ? 81 : 200 }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
        <Title>KiwR</Title>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>Leitura de Códigos</Header>
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
      </Layout>
    </Layout>
  );
};

export default ReadScreen;
