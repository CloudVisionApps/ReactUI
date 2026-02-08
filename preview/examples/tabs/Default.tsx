import React from 'react';
import { Tabs, TabPanel } from '../../../src';

export default function TabsDefault() {
  return (
    <Tabs
      items={[
        { label: 'Overview', value: 'overview' },
        { label: 'Settings', value: 'settings' },
        { label: 'Profile', value: 'profile' },
      ]}
      defaultValue="overview"
    >
      <TabPanel value="overview">
        <p className="text-[#86868B] text-[13px]">This is the overview tab content.</p>
      </TabPanel>
      <TabPanel value="settings">
        <p className="text-[#86868B] text-[13px]">This is the settings tab content.</p>
      </TabPanel>
      <TabPanel value="profile">
        <p className="text-[#86868B] text-[13px]">This is the profile tab content.</p>
      </TabPanel>
    </Tabs>
  );
}
