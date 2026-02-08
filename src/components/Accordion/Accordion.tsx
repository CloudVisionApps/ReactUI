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
          <div key={item.value} className="border border-[#E8E8ED] rounded-md overflow-hidden">
            <button
              type="button"
              onClick={() => !item.disabled && toggleItem(item.value)}
              disabled={item.disabled}
              className={cn(
                'w-full px-4 py-3 text-left flex items-center justify-between',
                'text-[13px] font-medium text-[#1D1D1F]',
                'transition-colors duration-150 ease-out',
                'focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:ring-offset-2',
                item.disabled && 'opacity-40 cursor-not-allowed',
                !item.disabled && 'hover:bg-[#F5F5F7]'
              )}
            >
              <span>{item.title}</span>
              <svg
                className={cn(
                  'w-5 h-5 text-[#86868B] transition-transform duration-150',
                  isOpen && 'transform rotate-180',
                  !isOpen && 'transform rotate-0'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 py-3 border-t border-[#E8E8ED] bg-white text-[#86868B] text-[13px]">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
