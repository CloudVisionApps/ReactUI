import DividerDefault from './Default';
import dividerDefaultCode from './Default.tsx?raw';
import DividerWithLabel from './WithLabel';
import dividerWithLabelCode from './WithLabel.tsx?raw';
import DividerVertical from './Vertical';
import dividerVerticalCode from './Vertical.tsx?raw';

export const dividerExamples = {
  default: { Component: DividerDefault, code: dividerDefaultCode },
  withLabel: { Component: DividerWithLabel, code: dividerWithLabelCode },
  vertical: { Component: DividerVertical, code: dividerVerticalCode },
};
