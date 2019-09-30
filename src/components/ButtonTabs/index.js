import React from 'react';
import { TabContainer, Tab } from './styles';

const ButtonTabs = ({ tabs = [], onChange, value }) => (
  <TabContainer>
    {tabs.map((tabProps, index) => (
      <Tab
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        selected={value === index}
        onClick={() => onChange(index)}
      >
        {tabProps.icon}
        {tabProps.title}
      </Tab>
    ))}
  </TabContainer>
);

export default ButtonTabs;
