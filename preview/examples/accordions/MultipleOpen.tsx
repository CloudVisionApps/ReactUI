import React from 'react';
import { Accordion } from '../../../src';

export default function AccordionMultipleOpen() {
  return (
    <Accordion
      allowMultiple
      items={[
        { title: 'Feature 1', value: '1', content: 'This is the first feature description.' },
        { title: 'Feature 2', value: '2', content: 'This is the second feature description.' },
        { title: 'Feature 3', value: '3', content: 'This is the third feature description.' },
      ]}
    />
  );
}
