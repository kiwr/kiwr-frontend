import React, { useState, useRef } from 'react';
import { Input, Row, Col, InputNumber, Button, Alert } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import QrCode from 'qrcode.react';
import {
  Description,
  ListContainer,
  ListItem,
  QrCodeContainer,
  Content,
  PrintContainer,
} from './styles';
// eslint-disable-next-line import/no-cycle
import { CodeContext } from '../..';
import { axiosPublic } from '../../../../config/axios';
import { PrintButton } from '../../../../components/PrintButton';

const initialState = {
  name: '',
  size: '',
  lot: '',
  desc: '',
};

const GenerateScreen = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const contentRef = useRef();

  const onChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const onSubmit = async ({ setData }) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axiosPublic.post(
        `/create?size=${form.size}`,
        form
      );
      if (data.success) {
        const { products, initialIndex } = data;
        setData({ products, initialIndex });
      }
    } catch (err) {
      setError(
        (err.response && err.response.data.errorMessage) ||
          'Ocorreu um erro ao gerar novos códigos'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNew = ({ setData }) => {
    setData([]);
    setForm(initialState);
  };

  return (
    <CodeContext.Consumer>
      {props =>
        !(props.data.products && props.data.products.length) ? (
          <div>
            {error && <Alert message={error} type="error" />}
            <Description>Insira dados do Produto</Description>
            <Row gutter={12}>
              <Col md={11} lg={11} style={{ marginBottom: 6 }}>
                <Input
                  placeholder="Nome"
                  value={form.name}
                  style={{ marginBottom: 6 }}
                  onChange={e => onChange('name', e.target.value)}
                />
              </Col>
              <Col md={10} lg={10}>
                <Input
                  placeholder="Lote"
                  style={{ marginBottom: 6 }}
                  onChange={e => onChange('lot', e.target.value)}
                  value={form.lot}
                />
              </Col>
              <Col md={3} lg={3}>
                <InputNumber
                  placeholder="Quantidade"
                  style={{ marginBottom: 6 }}
                  onChange={value => onChange('size', value)}
                  min={0}
                  value={form.size}
                />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Descrição"
                  style={{ marginBottom: 6 }}
                  onChange={e => onChange('desc', e.target.value)}
                  value={form.desc}
                  autosize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  type="primary"
                  onClick={() => onSubmit(props)}
                  loading={loading}
                >
                  Gerar
                </Button>
              </Col>
            </Row>
          </div>
        ) : (
          <>
            <QrCodeContainer>
              <Content>
                <Button onClick={() => handleNew(props)}>
                  Gerar novos códigos
                </Button>
                <Description>Selecione um código abaixo</Description>
              </Content>
              <PrintContainer>
                <PrintButton content={() => contentRef.current} />
              </PrintContainer>
            </QrCodeContainer>
            <ListContainer ref={contentRef}>
              {props.data.products.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ListItem key={index}>
                  Produto #{props.data.initialIndex + index + 1}
                  <QrCode
                    value={`${process.env.REACT_APP_URL}/read/${item}`}
                    size={256}
                    level=""
                    bgColor="#fff"
                    fgColor="#000"
                    includeMargin={false}
                    renderAs="canvas"
                  />
                </ListItem>
              ))}
            </ListContainer>
          </>
        )
      }
    </CodeContext.Consumer>
  );
};

export default GenerateScreen;
