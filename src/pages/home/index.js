import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosList } from 'react-icons/io';
import { Container, MainCard, Content, Title } from './styles';
import ButtonTabs from '../../components/ButtonTabs';
// eslint-disable-next-line import/no-cycle
import GenerateScreen from './tabs/generate';
import AllCodesScreen from './tabs/all';

export const CodeContext = React.createContext();

const tabs = [
  {
    title: 'Gerar',
    icon: <FiPlus size={64} />,
  },
  {
    title: 'Códigos',
    icon: <IoIosList size={64} />,
  },
];

const HomeScreen = () => {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);

  const renderScreen = () => {
    switch (tab) {
      case 0:
        return <GenerateScreen />;
      case 1:
        return <AllCodesScreen />;

      default:
        return <GenerateScreen />;
    }
  };

  return (
    <CodeContext.Provider value={{ data, setData }}>
      <Container>
        <MainCard>
          <div>
            <Title>KiwR</Title>
            <ButtonTabs
              tabs={tabs}
              onChange={value => setTab(value)}
              value={tab}
            />
          </div>

          <Content>{renderScreen()}</Content>
        </MainCard>
      </Container>
    </CodeContext.Provider>
  );
};

export default HomeScreen;
