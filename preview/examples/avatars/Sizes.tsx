import React from 'react';
import { Avatar } from '../../../src';

export default function AvatarSizes() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Avatar name="John Doe" size="small" />
      <Avatar name="Jane Smith" size="medium" />
      <Avatar name="Bob Johnson" size="large" />
      <Avatar name="Alice Brown" size="xlarge" />
    </div>
  );
}
