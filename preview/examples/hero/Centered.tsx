import React from 'react';
import { Hero } from '../../../src';

export default function HeroCentered() {
  return (
    <div className="overflow-hidden rounded-lg">
      <Hero
        variant="centered"
        title="Welcome to React UI"
        description="A comprehensive component library designed with macOS aesthetics in mind. Build faster, design better."
        primaryAction={{ label: 'Start Building', onClick: () => {} }}
      />
    </div>
  );
}
