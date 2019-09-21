import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosQrScanner } from 'react-icons/io';
import { Container, MainCard, Content } from './styles';
import ButtonTabs from '../../components/ButtonTabs';
import ReadScreen from './tabs/read';

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

const HomeScreen = () => (
  <Container>
    <MainCard>
      <span>KiwR</span>
      <ButtonTabs tabs={tabs} />
      <Content>
        <ReadScreen />
      </Content>
    </MainCard>
  </Container>
);

export default HomeScreen;
