import React from 'react';
import { Accordion } from '../../../src';

export default function AccordionSingleOpen() {
  return (
    <Accordion
      items={[
        {
          title: 'What is React UI?',
          value: '1',
          content: 'React UI is a comprehensive component library designed with macOS aesthetics in mind.',
        },
        {
          title: 'How do I install it?',
          value: '2',
          content: 'You can install React UI using npm or yarn package managers.',
        },
        {
          title: 'Is it free to use?',
          value: '3',
          content: 'Yes, React UI is completely free and open source.',
        },
      ]}
    />
  );
}
