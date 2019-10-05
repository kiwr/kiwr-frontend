import React, { useState, useEffect } from 'react';
import { Alert, Descriptions, Spin } from 'antd';
import { InfoContainer } from './styles';
import { axiosPublic } from '../../config/axios';
import { Container, MainCard, Title, Content } from '../home/styles';

const InfoScreen = ({ match }) => {
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
    <Container>
      <MainCard>
        <div>
          <Title>KiwR</Title>
        </div>

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
      </MainCard>
    </Container>
  );
};

export default InfoScreen;
