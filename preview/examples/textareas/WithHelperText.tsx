import React from 'react';
import { Textarea } from '../../../src';

export default function TextareaWithHelperText() {
  return (
    <Textarea
      label="Description"
      placeholder="Describe something..."
      helperText="Maximum 500 characters"
      rows={5}
    />
  );
}
