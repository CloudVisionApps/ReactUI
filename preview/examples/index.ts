/**
 * Examples are loaded from .tsx files; the displayed code is the actual file
 * content (via Vite ?raw import). Add a new example by:
 * 1. Create examples/<section>/<Name>.tsx with default export component
 * 2. Import component and <Name>.tsx?raw in examples/<section>/index.ts
 * 3. Add to the section export object
 * 4. Use in App: <ExampleWithCode code={examples.buttons.variants.code}>
 *      <examples.buttons.variants.Component />
 *    </ExampleWithCode>
 */

import { buttonExamples } from './buttons';
import { inputExamples } from './inputs';

export const examples = {
  buttons: buttonExamples,
  inputs: inputExamples,
};
