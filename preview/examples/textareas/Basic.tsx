import React from 'react';
import { Textarea } from '../../../src';

export default function TextareaBasic() {
  return (
    <Textarea
      label="Message"
      placeholder="Enter your message here..."
      rows={4}
    />
  );
}
