import SwitchDefault from './Default';
import switchDefaultCode from './Default.tsx?raw';
import SwitchWithLabel from './WithLabel';
import switchWithLabelCode from './WithLabel.tsx?raw';
import SwitchSizes from './Sizes';
import switchSizesCode from './Sizes.tsx?raw';

export const switchExamples = {
  default: { Component: SwitchDefault, code: switchDefaultCode },
  withLabel: { Component: SwitchWithLabel, code: switchWithLabelCode },
  sizes: { Component: SwitchSizes, code: switchSizesCode },
};
