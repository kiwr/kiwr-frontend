import React, { useState } from 'react';
import { TabContainer, Tab } from './styles';

const ButtonTabs = ({ tabs = [] }) => {
  const [tab, setTab] = useState(0);

  return (
    <TabContainer>
      {tabs.map((tabProps, index) => (
        <>
          <Tab selected={tab === index} onClick={() => setTab(index)}>
            {tabProps.icon}
            {tabProps.title}
          </Tab>
        </>
      ))}
    </TabContainer>
  );
};

export default ButtonTabs;
