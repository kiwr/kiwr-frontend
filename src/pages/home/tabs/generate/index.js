import React, { useState } from 'react';
import { Input, Row, Col, InputNumber, Button, Alert } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import QrCode from 'qrcode.react';
import {
  Description,
  ListContainer,
  ListItem,
  QrCodeContainer,
  Content,
} from './styles';
// eslint-disable-next-line import/no-cycle
import { CodeContext } from '../..';
import { axiosPublic } from '../../../../config/axios';

const initialState = {
  name: '',
  size: '',
  lot: '',
  desc: '',
};

const GenerateScreen = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState(null);
  const [error, setError] = useState(null);

  const onChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const onSubmit = async ({ setData }) => {
    setLoading(true);
    setError(null);
    try {
      const req = await axiosPublic.post(`/create?size=${form.size}`, form);
      setData(req.data.codes);
    } catch (err) {
      setError('Ocorreu um erro ao gerar novos códigos');
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
        !props.data.length ? (
          <div>
            {error && <Alert message={error} type="error" />}
            <Description>Insira dados do Produto</Description>
            <Row gutter={16}>
              <Col md={10} lg={10} style={{ marginBottom: 6 }}>
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
              <Col md={2}>
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
              {qrCode && (
                <QrCode
                  value={qrCode}
                  size={128}
                  level="H"
                  bgColor="#fff"
                  fgColor="#000"
                  includeMargin={false}
                  renderAs="canvas"
                />
              )}
              <Content>
                <Button onClick={() => handleNew(props)}>
                  Gerar novos códigos
                </Button>
                <Description>Selecione um código abaixo</Description>
              </Content>
            </QrCodeContainer>
            <ListContainer>
              {props.data.map((item, index) => (
                <ListItem onClick={() => setQrCode(item)}>
                  Produto #{index}
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
