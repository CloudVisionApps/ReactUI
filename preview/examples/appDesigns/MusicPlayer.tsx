import React, { useState } from 'react';
import { Card, Button, Progress } from '../../../src';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(34);

  return (
    <Card variant="elevated" className="max-w-sm overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-indigo-600/20 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-surface/80 flex items-center justify-center shadow-ui-lg">
          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-[15px] font-semibold text-fg">Midnight Dreams</h3>
          <p className="text-[13px] text-fg-muted">Elena Nova</p>
        </div>
        <Progress value={progress} showLabel={false} />
        <div className="flex justify-between text-[12px] text-fg-muted">
          <span>1:24</span>
          <span>4:12</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button variant="ghost" size="small" className="rounded-full p-2 min-w-0">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
          </Button>
          <Button
            variant="primary"
            size="medium"
            className="rounded-full w-12 h-12 p-0 min-w-0 flex items-center justify-center"
            onClick={() => setPlaying(!playing)}
          >
            {playing ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            ) : (
              <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            )}
          </Button>
          <Button variant="ghost" size="small" className="rounded-full p-2 min-w-0">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-fg-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" /></svg>
          <div className="flex-1 h-1.5 rounded-full bg-surface-muted overflow-hidden">
            <div className="h-full w-2/3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}
