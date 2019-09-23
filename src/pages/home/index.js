import React, { useState, useContext } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosQrScanner } from 'react-icons/io';
import { Container, MainCard, Content, Title } from './styles';
import ButtonTabs from '../../components/ButtonTabs';
import ReadScreen from './tabs/read';
import GenerateScreen from './tabs/generate';

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
];

const HomeScreen = () => {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);

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

          <Content>{tab === 0 ? <ReadScreen /> : <GenerateScreen />}</Content>
        </MainCard>
      </Container>
    </CodeContext.Provider>
  );
};

export default HomeScreen;
