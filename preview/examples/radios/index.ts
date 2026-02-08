import RadioGroup from './Group';
import radioGroupCode from './Group.tsx?raw';
import RadioStates from './States';
import radioStatesCode from './States.tsx?raw';
import RadioSizes from './Sizes';
import radioSizesCode from './Sizes.tsx?raw';
import RadioWithError from './WithError';
import radioWithErrorCode from './WithError.tsx?raw';

export const radioExamples = {
  group: { Component: RadioGroup, code: radioGroupCode },
  states: { Component: RadioStates, code: radioStatesCode },
  sizes: { Component: RadioSizes, code: radioSizesCode },
  withError: { Component: RadioWithError, code: radioWithErrorCode },
};
