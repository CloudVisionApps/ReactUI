/**
 * Examples are loaded from .tsx files; the displayed code is the actual file
 * content (via Vite ?raw import). Add a new example by:
 * 1. Create examples/<section>/<Name>.tsx with default export component
 * 2. Import component and <Name>.tsx?raw in examples/<section>/index.ts
 * 3. Add to the section export object and to this index
 * 4. Use in App: <ExampleWithCode code={examples.section.key.code}>
 *      <examples.section.key.Component />
 *    </ExampleWithCode>
 */

import { buttonExamples } from './buttons';
import { inputExamples } from './inputs';
import { navigationExamples } from './navigation';
import { heroExamples } from './hero';
import { footerExamples } from './footer';
import { selectExamples } from './selects';
import { checkboxExamples } from './checkboxes';
import { radioExamples } from './radios';
import { textareaExamples } from './textareas';
import { cardExamples } from './cards';
import { badgeExamples } from './badges';
import { avatarExamples } from './avatars';
import { alertExamples } from './alerts';
import { modalExamples } from './modals';
import { tabExamples } from './tabs';
import { accordionExamples } from './accordions';
import { tooltipExamples } from './tooltips';
import { breadcrumbExamples } from './breadcrumbs';
import { spinnerExamples } from './spinners';
import { progressExamples } from './progress';
import { switchExamples } from './switches';
import { dividerExamples } from './dividers';
import { skeletonExamples } from './skeletons';
import { paginationExamples } from './pagination';
import { tableExamples } from './table';
import { linkExamples } from './link';
import { emptyStateExamples } from './emptyState';
import { appDesignsExamples } from './appDesigns';

export const examples = {
  buttons: buttonExamples,
  inputs: inputExamples,
  navigation: navigationExamples,
  hero: heroExamples,
  footer: footerExamples,
  selects: selectExamples,
  checkboxes: checkboxExamples,
  radios: radioExamples,
  textareas: textareaExamples,
  cards: cardExamples,
  badges: badgeExamples,
  avatars: avatarExamples,
  alerts: alertExamples,
  modals: modalExamples,
  tabs: tabExamples,
  accordions: accordionExamples,
  tooltips: tooltipExamples,
  breadcrumbs: breadcrumbExamples,
  spinners: spinnerExamples,
  progress: progressExamples,
  switches: switchExamples,
  dividers: dividerExamples,
  skeletons: skeletonExamples,
  pagination: paginationExamples,
  table: tableExamples,
  link: linkExamples,
  emptyState: emptyStateExamples,
  appDesigns: appDesignsExamples,
};
