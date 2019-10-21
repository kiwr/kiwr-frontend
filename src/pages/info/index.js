import React, { useState, useEffect } from 'react';
import { Alert, Descriptions, Spin, Layout } from 'antd';
import { InfoContainer } from './styles';
import { axiosPublic } from '../../config/axios';
import { Title, Content, Header } from '../home/styles';

const { Sider } = Layout;

const InfoScreen = ({ match }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { code } = match.params;
        if (code) {
          const { data } = await axiosPublic.get(`/read/${code}`);
          if (data.success) {
            setInfo({
              ...data.product,
              message: data.product.message,
            });
          } else {
            throw data;
          }
        } else {
          throw String('err');
        }
      } catch (err) {
        setError('Erro ao carregar informações');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

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
        <Header style={{ background: '#fff' }}>Informações</Header>
        <Content>
          {loading ? (
            <Spin />
          ) : (
            <>
              {error && <Alert message={error} type="error" />}

              {info && (
                <InfoContainer>
                  <Descriptions title="Produto" size="middle">
                    <Descriptions.Item label="Nome">
                      {info.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Lote">
                      {info.lot}
                    </Descriptions.Item>
                    <Descriptions.Item label="Descrição">
                      {info.desc}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">
                      {info.message}
                    </Descriptions.Item>
                  </Descriptions>
                </InfoContainer>
              )}
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default InfoScreen;
