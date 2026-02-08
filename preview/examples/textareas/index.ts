import TextareaBasic from './Basic';
import textareaBasicCode from './Basic.tsx?raw';
import TextareaWithHelperText from './WithHelperText';
import textareaWithHelperTextCode from './WithHelperText.tsx?raw';
import TextareaWithError from './WithError';
import textareaWithErrorCode from './WithError.tsx?raw';
import TextareaSizes from './Sizes';
import textareaSizesCode from './Sizes.tsx?raw';

export const textareaExamples = {
  basic: { Component: TextareaBasic, code: textareaBasicCode },
  withHelperText: { Component: TextareaWithHelperText, code: textareaWithHelperTextCode },
  withError: { Component: TextareaWithError, code: textareaWithErrorCode },
  sizes: { Component: TextareaSizes, code: textareaSizesCode },
};
