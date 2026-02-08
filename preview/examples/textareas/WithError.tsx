import React from 'react';
import { Textarea } from '../../../src';

export default function TextareaWithError() {
  return (
    <Textarea
      label="Comments"
      placeholder="Your comments..."
      error="This field is required"
      rows={4}
    />
  );
}
