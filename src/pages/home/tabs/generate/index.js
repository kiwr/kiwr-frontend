import React, { useState } from 'react';
import { Input, Row, Col, InputNumber, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import QrCode from 'qrcode.react';
import {
  Description,
  ListContainer,
  ListItem,
  QrCodeContainer,
} from './styles';
// eslint-disable-next-line import/no-cycle
import { CodeContext } from '../..';
import { axiosPublic } from '../../../../config/axios';

const GenerateScreen = () => {
  const [form, setForm] = useState({
    name: '',
    size: '',
    lot: '',
    desc: '',
  });
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState(null);

  const onChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const onSubmit = async ({ data, setData }) => {
    setLoading(true);
    setData(['teste', 'teste2']);
    try {
      const req = await axiosPublic.post(`/create?size=${form.size}`, form);
      console.log(req);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CodeContext.Consumer>
      {props =>
        !props.data.length ? (
          <div>
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
              <Col md={12} lg={10}>
                <Input
                  placeholder="Lote"
                  style={{ marginBottom: 6 }}
                  onChange={e => onChange('lot', e.target.value)}
                  value={form.lot}
                />
              </Col>
              <Col md={2} lg={2}>
                <InputNumber
                  placeholder="Quantidade"
                  style={{ marginBottom: 6 }}
                  onChange={value => onChange('size', value)}
                  min={0}
                  alue={form.size}
                />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Descrição"
                  style={{ marginBottom: 6 }}
                  onChange={e => onChange('desc', e.target.value)}
                  alue={form.desc}
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
              {qrCode ? (
                <QrCode
                  value={qrCode}
                  size={128}
                  level="H"
                  bgColor="#fff"
                  fgColor="#000"
                  includeMargin={false}
                  renderAs="canvas"
                />
              ) : (
                <Description>Selecione um código abaixo</Description>
              )}
            </QrCodeContainer>
            <ListContainer>
              {props.data.map((item, index) => (
                <ListItem onClick={() => setQrCode(item)}>
                  Código #{index}
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
