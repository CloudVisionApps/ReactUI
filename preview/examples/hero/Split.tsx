import React from 'react';
import { Hero } from '../../../src';

export default function HeroSplit() {
  return (
    <div className="overflow-hidden rounded-lg">
      <Hero
        variant="split"
        title="Modern Design System"
        subtitle="macOS Inspired"
        description="Every component is carefully crafted to match the macOS design language. Clean, minimal, and beautiful."
        primaryAction={{ label: 'Explore Components', onClick: () => {} }}
        secondaryAction={{ label: 'View Docs', onClick: () => {} }}
      />
    </div>
  );
}
