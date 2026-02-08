import InputBasic from './Basic';
import inputBasicCode from './Basic.tsx?raw';
import InputWithHelperText from './WithHelperText';
import inputWithHelperTextCode from './WithHelperText.tsx?raw';
import InputWithError from './WithError';
import inputWithErrorCode from './WithError.tsx?raw';
import InputDisabled from './Disabled';
import inputDisabledCode from './Disabled.tsx?raw';

export const inputExamples = {
  basic: { Component: InputBasic, code: inputBasicCode },
  withHelperText: { Component: InputWithHelperText, code: inputWithHelperTextCode },
  withError: { Component: InputWithError, code: inputWithErrorCode },
  disabled: { Component: InputDisabled, code: inputDisabledCode },
};
