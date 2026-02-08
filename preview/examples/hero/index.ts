import HeroDefault from './Default';
import heroDefaultCode from './Default.tsx?raw';
import HeroCentered from './Centered';
import heroCenteredCode from './Centered.tsx?raw';
import HeroSplit from './Split';
import heroSplitCode from './Split.tsx?raw';

export const heroExamples = {
  default: { Component: HeroDefault, code: heroDefaultCode },
  centered: { Component: HeroCentered, code: heroCenteredCode },
  split: { Component: HeroSplit, code: heroSplitCode },
};
