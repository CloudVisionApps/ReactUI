import SelectBasic from './Basic';
import selectBasicCode from './Basic.tsx?raw';
import SelectWithError from './WithError';
import selectWithErrorCode from './WithError.tsx?raw';
import SelectSizes from './Sizes';
import selectSizesCode from './Sizes.tsx?raw';
import SelectDisabled from './Disabled';
import selectDisabledCode from './Disabled.tsx?raw';

export const selectExamples = {
  basic: { Component: SelectBasic, code: selectBasicCode },
  withError: { Component: SelectWithError, code: selectWithErrorCode },
  sizes: { Component: SelectSizes, code: selectSizesCode },
  disabled: { Component: SelectDisabled, code: selectDisabledCode },
};
