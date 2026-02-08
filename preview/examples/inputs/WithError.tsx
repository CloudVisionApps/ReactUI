import React from 'react';
import { Input } from '../../../src';

export default function InputWithError() {
  return (
    <Input
      label="Username"
      placeholder="Enter username"
      error="Username is already taken"
    />
  );
}
