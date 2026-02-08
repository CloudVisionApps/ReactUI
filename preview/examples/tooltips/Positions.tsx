import React from 'react';
import { Button, Tooltip } from '../../../src';

export default function TooltipPositions() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Tooltip content="This is a tooltip on top" position="top">
        <Button>Hover me (Top)</Button>
      </Tooltip>
      <Tooltip content="This is a tooltip on bottom" position="bottom">
        <Button>Hover me (Bottom)</Button>
      </Tooltip>
      <Tooltip content="This is a tooltip on left" position="left">
        <Button>Hover me (Left)</Button>
      </Tooltip>
      <Tooltip content="This is a tooltip on right" position="right">
        <Button>Hover me (Right)</Button>
      </Tooltip>
    </div>
  );
}
