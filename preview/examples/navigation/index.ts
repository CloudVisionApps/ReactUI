import NavigationDefault from './Default';
import navigationDefaultCode from './Default.tsx?raw';
import NavigationTransparent from './Transparent';
import navigationTransparentCode from './Transparent.tsx?raw';
import NavigationSolid from './Solid';
import navigationSolidCode from './Solid.tsx?raw';
import NavigationWithIcons from './WithIcons';
import navigationWithIconsCode from './WithIcons.tsx?raw';
import NavigationWithCta from './WithCta';
import navigationWithCtaCode from './WithCta.tsx?raw';
import NavigationSticky from './Sticky';
import navigationStickyCode from './Sticky.tsx?raw';
import NavigationWithUserMenu from './WithUserMenu';
import navigationWithUserMenuCode from './WithUserMenu.tsx?raw';
import NavigationFixed from './Fixed';
import navigationFixedCode from './Fixed.tsx?raw';

export const navigationExamples = {
  default: { Component: NavigationDefault, code: navigationDefaultCode },
  transparent: { Component: NavigationTransparent, code: navigationTransparentCode },
  solid: { Component: NavigationSolid, code: navigationSolidCode },
  withIcons: { Component: NavigationWithIcons, code: navigationWithIconsCode },
  withCta: { Component: NavigationWithCta, code: navigationWithCtaCode },
  sticky: { Component: NavigationSticky, code: navigationStickyCode },
  withUserMenu: { Component: NavigationWithUserMenu, code: navigationWithUserMenuCode },
  fixed: { Component: NavigationFixed, code: navigationFixedCode },
};
