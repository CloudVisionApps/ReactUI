import React from 'react';
import { Textarea } from '../../../src';

export default function TextareaSizes() {
  return (
    <div className="space-y-4">
      <Textarea label="Small" size="small" rows={3} placeholder="Small textarea" />
      <Textarea label="Large" size="large" rows={3} placeholder="Large textarea" />
    </div>
  );
}
