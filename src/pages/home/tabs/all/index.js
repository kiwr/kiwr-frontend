import React, { useRef, useState, useEffect } from 'react';
import QrCode from 'qrcode.react';
import { Alert, Spin } from 'antd';
import { Container } from './styles';
import { PrintButton } from '../../../../components/PrintButton';
import { ListContainer, ListItem } from '../generate/styles';
import { axiosPublic } from '../../../../config/axios';

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
        if (res.data.success) {
          setData(res.data.products);
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
            {data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ListItem key={index}>
                Produto #{index}
                <QrCode
                  value={item}
                  size={128}
                  level="H"
                  bgColor="#fff"
                  fgColor="#000"
                  includeMargin={false}
                  renderAs="canvas"
                />
              </ListItem>
            ))}
          </ListContainer>
        </>
      )}
    </Container>
  );
};

export default AllCodesScreen;
