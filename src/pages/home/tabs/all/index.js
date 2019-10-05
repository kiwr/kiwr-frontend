import React, { useRef, useState, useEffect } from 'react';
import QrCode from 'qrcode.react';
import { Alert, Spin } from 'antd';
import { PrintButton } from '../../../../components/PrintButton';
import { axiosPublic } from '../../../../config/axios';
import {
  Container,
  ListContainer,
  LotContainer,
  ListItem,
  LotTitle,
} from './styles';

const AllCodesScreen = () => {
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axiosPublic.get('/readAll');
        const lotData = res.data;
        if (lotData.success) {
          setData(lotData.produtos);
        }
      } catch (err) {
        const { response } = err;
        setError(response.data.errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <Container>
      {error && <Alert message={error} type="error" />}

      {loading ? (
        <Spin />
      ) : (
        <>
          <PrintButton content={() => contentRef.current} />
          <ListContainer ref={contentRef}>
            {Object.keys(data).map(lot => (
              <>
                <LotTitle>{String(lot).toUpperCase()} </LotTitle>
                <LotContainer key={Math.random().toString()}>
                  {data[lot].map((code, index) => (
                    <ListItem key={Math.random().toString()}>
                      Produto #{index + 1}
                      <QrCode
                        value={`${process.env.REACT_APP_URL}/read/${code}`}
                        size={256}
                        level="M"
                        bgColor="#fff"
                        fgColor="#000"
                        includeMargin={false}
                        renderAs="canvas"
                      />
                    </ListItem>
                  ))}
                </LotContainer>
              </>
            ))}
          </ListContainer>
        </>
      )}
    </Container>
  );
};

export default AllCodesScreen;
