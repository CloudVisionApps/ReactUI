import CardDefault from './Default';
import cardDefaultCode from './Default.tsx?raw';
import CardElevated from './Elevated';
import cardElevatedCode from './Elevated.tsx?raw';
import CardOutlined from './Outlined';
import cardOutlinedCode from './Outlined.tsx?raw';
import CardHoverable from './Hoverable';
import cardHoverableCode from './Hoverable.tsx?raw';
import CardWithFooter from './WithFooter';
import cardWithFooterCode from './WithFooter.tsx?raw';

export const cardExamples = {
  default: { Component: CardDefault, code: cardDefaultCode },
  elevated: { Component: CardElevated, code: cardElevatedCode },
  outlined: { Component: CardOutlined, code: cardOutlinedCode },
  hoverable: { Component: CardHoverable, code: cardHoverableCode },
  withFooter: { Component: CardWithFooter, code: cardWithFooterCode },
};
