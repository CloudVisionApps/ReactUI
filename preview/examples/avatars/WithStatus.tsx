import React from 'react';
import { Avatar } from '../../../src';

export default function AvatarWithStatus() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Avatar name="Online User" status="online" />
      <Avatar name="Offline User" status="offline" />
      <Avatar name="Away User" status="away" />
      <Avatar name="Busy User" status="busy" />
    </div>
  );
}
