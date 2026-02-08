import ProgressDefault from './Default';
import progressDefaultCode from './Default.tsx?raw';
import ProgressVariants from './Variants';
import progressVariantsCode from './Variants.tsx?raw';
import ProgressWithLabel from './WithLabel';
import progressWithLabelCode from './WithLabel.tsx?raw';

export const progressExamples = {
  default: { Component: ProgressDefault, code: progressDefaultCode },
  variants: { Component: ProgressVariants, code: progressVariantsCode },
  withLabel: { Component: ProgressWithLabel, code: progressWithLabelCode },
};
