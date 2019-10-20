import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Content, Title, Header } from './styles';

// eslint-disable-next-line import/no-cycle
import GenerateScreen from './tabs/generate';
import AllCodesScreen from './tabs/all';

const { Sider } = Layout;

export const CodeContext = React.createContext();

const HomeScreen = () => {
  const [tab, setTab] = useState('1');
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const renderScreen = () => {
    switch (tab) {
      case '1':
        return <GenerateScreen />;
      case '2':
        return <AllCodesScreen />;

      default:
        return <GenerateScreen />;
    }
  };

  const getTitle = () => {
    switch (tab) {
      case '1':
        return 'Gerar Códigos';
      case '2':
        return 'Listar Códigos';

      default:
        return 'Gerar Códigos';
    }
  };

  const handleMenu = e => setTab(e.key);

  return (
    <CodeContext.Provider value={{ data, setData }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Title>KiwR</Title>
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            onClick={handleMenu}
            mode="inline"
          >
            <Menu.Item key="1">
              <Icon type="qrcode" />
              <span>Gerar</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="unordered-list" />
              <span>Códigos</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }}>{getTitle()}</Header>
          <Content style={{ margin: '0 16px' }}>{renderScreen()}</Content>
        </Layout>
      </Layout>
    </CodeContext.Provider>
  );
};

export default HomeScreen;
