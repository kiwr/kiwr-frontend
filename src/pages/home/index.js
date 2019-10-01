import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosQrScanner, IoIosList } from 'react-icons/io';
import { Container, MainCard, Content, Title } from './styles';
import ButtonTabs from '../../components/ButtonTabs';
import ReadScreen from './tabs/read';
// eslint-disable-next-line import/no-cycle
import GenerateScreen from './tabs/generate';
import AllCodesScreen from './tabs/all';

export const CodeContext = React.createContext();

const tabs = [
  {
    title: 'Ler',
    icon: <IoIosQrScanner size={64} />,
  },
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
        return <ReadScreen />;
      case 1:
        return <GenerateScreen />;
      case 2:
        return <AllCodesScreen />;
      default:
        return <ReadScreen />;
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
