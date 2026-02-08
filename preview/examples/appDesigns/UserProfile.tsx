import React from 'react';
import { Card, Button, Avatar, Badge, Divider } from '../../../src';

export default function UserProfile() {
  return (
    <div className="max-w-2xl space-y-6">
      <Card variant="elevated">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Avatar name="Jordan Lee" size="xlarge" status="online" className="flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-fg">Jordan Lee</h1>
                <Badge size="small" variant="default">Pro</Badge>
              </div>
              <p className="text-fg-muted text-sm mt-1">@jordanlee</p>
              <p className="text-[13px] text-fg-muted mt-3 leading-relaxed">
                Product lead & design systems. Building tools that help teams ship faster. Coffee enthusiast.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button variant="primary" size="small">Edit profile</Button>
                <Button variant="secondary" size="small">Share profile</Button>
              </div>
            </div>
          </div>
          <Divider className="my-5" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-lg bg-surface-muted/50 px-4 py-3 text-center">
              <p className="text-2xl font-bold text-fg">128</p>
              <p className="text-[12px] text-fg-muted">Posts</p>
            </div>
            <div className="rounded-lg bg-surface-muted/50 px-4 py-3 text-center">
              <p className="text-2xl font-bold text-fg">3.4k</p>
              <p className="text-[12px] text-fg-muted">Followers</p>
            </div>
            <div className="rounded-lg bg-surface-muted/50 px-4 py-3 text-center">
              <p className="text-2xl font-bold text-fg">892</p>
              <p className="text-[12px] text-fg-muted">Following</p>
            </div>
            <div className="rounded-lg bg-surface-muted/50 px-4 py-3 text-center">
              <p className="text-2xl font-bold text-fg">12</p>
              <p className="text-[12px] text-fg-muted">Projects</p>
            </div>
          </div>
        </div>
      </Card>
      <Card variant="outlined">
        <h3 className="text-[14px] font-semibold text-fg px-5 py-4 border-b border-border">Activity</h3>
        <div className="p-5 space-y-4">
          {[
            { action: 'Commented on', target: 'Design system docs', time: '2h ago' },
            { action: 'Created project', target: 'Dashboard v2', time: '1d ago' },
            { action: 'Joined team', target: 'Acme Inc.', time: '3d ago' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-muted flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-semibold">JL</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-fg">
                  <span className="font-medium">{item.action}</span> {item.target}
                </p>
                <p className="text-[12px] text-fg-muted">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
