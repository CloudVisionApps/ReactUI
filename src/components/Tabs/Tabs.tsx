import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface TabItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'default' | 'pills';
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultValue,
  value: controlledValue,
  onChange,
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.value || '');
  const activeValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={cn('w-full', className)} {...props}>
      <div className={cn(
        'flex',
        variant === 'default' && 'border-b border-[#E8E8ED]',
        variant === 'pills' && 'gap-2'
      )}>
        {items.map((item) => {
          const isActive = activeValue === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => !item.disabled && handleChange(item.value)}
              disabled={item.disabled}
              className={cn(
                'px-4 py-2 text-[13px] font-medium transition-all duration-150 ease-out',
                'focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:ring-offset-2',
                item.disabled && 'opacity-40 cursor-not-allowed',
                item.icon ? 'flex items-center gap-2' : '',
                // Default variant classes - all written out for Tailwind scanner
                variant === 'default' && isActive && 'border-b-2 -mb-px border-[#007AFF] text-[#007AFF]',
                variant === 'default' && !isActive && 'border-b-2 -mb-px border-transparent text-[#86868B] hover:text-[#1D1D1F] hover:border-[#D2D2D7]',
                // Pills variant classes - all written out for Tailwind scanner
                variant === 'pills' && isActive && 'rounded-md bg-[#007AFF] text-white',
                variant === 'pills' && !isActive && 'rounded-md text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]'
              )}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </button>
          );
        })}
      </div>
      {children && (
        <div className="mt-4">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.props.value === activeValue) {
              return child;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({ value, children, ...props }) => {
  return <div {...props}>{children}</div>;
};
