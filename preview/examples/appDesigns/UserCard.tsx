import React from 'react';
import { Card, Button, Avatar, Badge } from '../../../src';

export default function UserCard() {
  return (
    <Card variant="elevated" hoverable className="max-w-xs">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <Avatar name="Alex Morgan" size="large" status="online" />
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-semibold text-fg truncate">Alex Morgan</h3>
            <p className="text-[13px] text-fg-muted">Product Designer</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <Badge size="small" variant="default">Design</Badge>
              <Badge size="small" variant="info">Figma</Badge>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-lg font-semibold text-fg">24</p>
            <p className="text-[11px] text-fg-muted uppercase tracking-wide">Projects</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="text-lg font-semibold text-fg">1.2k</p>
            <p className="text-[11px] text-fg-muted uppercase tracking-wide">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-fg">89</p>
            <p className="text-[11px] text-fg-muted uppercase tracking-wide">Following</p>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="primary" size="small" className="flex-1">Message</Button>
          <Button variant="secondary" size="small">Follow</Button>
        </div>
      </div>
    </Card>
  );
}
