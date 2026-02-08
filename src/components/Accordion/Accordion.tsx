import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  ...props
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
      } else {
        return prev.includes(value) ? [] : [value];
      }
    });
  };

  return (
    <div className={cn('w-full space-y-1', className)} {...props}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.value);
        return (
          <div
            key={item.value}
            className="border-2 border-border rounded-ui overflow-hidden bg-surface"
          >
            <button
              type="button"
              onClick={() => !item.disabled && toggleItem(item.value)}
              disabled={item.disabled}
              className={cn(
                'w-full px-4 py-3 text-left flex items-center justify-between font-semibold text-fg text-[13px] tracking-tight',
                'transition-colors duration-150 ease-out',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2',
                item.disabled && 'opacity-40 cursor-not-allowed',
                !item.disabled && 'hover:bg-surface-muted'
              )}
            >
              <span>{item.title}</span>
              <svg
                className={cn(
                  'w-5 h-5 text-fg-muted transition-transform duration-200 shrink-0',
                  isOpen && 'rotate-180'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 py-3 border-t-2 border-border bg-surface-subtle/50 text-fg-muted text-[13px] leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
