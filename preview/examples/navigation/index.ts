import NavigationDefault from './Default';
import navigationDefaultCode from './Default.tsx?raw';
import NavigationTransparent from './Transparent';
import navigationTransparentCode from './Transparent.tsx?raw';
import NavigationSolid from './Solid';
import navigationSolidCode from './Solid.tsx?raw';

export const navigationExamples = {
  default: { Component: NavigationDefault, code: navigationDefaultCode },
  transparent: { Component: NavigationTransparent, code: navigationTransparentCode },
  solid: { Component: NavigationSolid, code: navigationSolidCode },
};
