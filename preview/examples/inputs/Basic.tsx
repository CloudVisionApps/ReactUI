import React, { useState } from 'react';
import { Input } from '../../../src';

export default function InputBasic() {
  const [value, setValue] = useState('');
  return (
    <Input
      label="Email Address"
      placeholder="Enter your email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
