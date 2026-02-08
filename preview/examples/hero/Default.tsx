import React from 'react';
import { Hero } from '../../../src';

export default function HeroDefault() {
  return (
    <div className="overflow-hidden rounded-lg">
      <Hero
        title="Build Beautiful UIs"
        subtitle="React Component Library"
        description="Create stunning user interfaces with our macOS-inspired component library. Clean, modern, and accessible."
        primaryAction={{ label: 'Get Started', onClick: () => {} }}
        secondaryAction={{ label: 'Learn More', onClick: () => {} }}
      />
    </div>
  );
}
