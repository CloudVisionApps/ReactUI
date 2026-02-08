import React from 'react';
import { Tabs, TabPanel } from '../../../src';

export default function TabsPills() {
  return (
    <Tabs
      variant="pills"
      items={[
        { label: 'Home', value: 'home' },
        { label: 'About', value: 'about' },
        { label: 'Contact', value: 'contact' },
      ]}
      defaultValue="home"
    >
      <TabPanel value="home">
        <p className="text-[#86868B] text-[13px]">Home content here.</p>
      </TabPanel>
      <TabPanel value="about">
        <p className="text-[#86868B] text-[13px]">About content here.</p>
      </TabPanel>
      <TabPanel value="contact">
        <p className="text-[#86868B] text-[13px]">Contact content here.</p>
      </TabPanel>
    </Tabs>
  );
}
