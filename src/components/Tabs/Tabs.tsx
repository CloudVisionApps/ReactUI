import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

const TAB_CONTAINER_CLASSES: Record<'default' | 'pills', string> = {
  default: 'relative border-b border-[#D2D2D7]/60',
  pills: 'inline-flex p-1 rounded-xl bg-[#F5F5F7]',
};

const TAB_BUTTON_CLASSES: Record<'default' | 'pills', Record<'active' | 'inactive', string>> = {
  default: {
    active: 'text-[#007AFF]',
    inactive: 'text-[#86868B] hover:text-[#1D1D1F]',
  },
  pills: {
    active: 'rounded-lg bg-white text-[#1D1D1F] shadow-sm',
    inactive: 'rounded-lg text-[#86868B] hover:text-[#1D1D1F]',
  },
};

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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    if (variant !== 'default') return;
    const activeBtn = buttonRefs.current.get(activeValue);
    const nav = navRef.current;
    if (activeBtn && nav) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
      });
    }
  }, [activeValue, variant, items]);

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={cn('w-full', className)} {...props}>
      <div
        ref={navRef}
        className={cn(
          'flex',
          variant === 'default' ? 'flex' : 'flex gap-0.5',
          TAB_CONTAINER_CLASSES[variant]
        )}
      >
        {variant === 'default' && (
          <span
            className="absolute bottom-0 h-0.5 bg-[#007AFF] transition-all duration-200 ease-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        )}
        {items.map((item) => {
          const isActive = activeValue === item.value;
          const state = isActive ? 'active' : 'inactive';
          return (
            <button
              key={item.value}
              ref={(el) => {
                if (el) buttonRefs.current.set(item.value, el);
              }}
              type="button"
              onClick={() => !item.disabled && handleChange(item.value)}
              disabled={item.disabled}
              className={cn(
                'relative px-4 py-2.5 text-[13px] font-medium transition-all duration-150 ease-out',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/30 focus-visible:ring-offset-2',
                item.disabled && 'opacity-40 cursor-not-allowed',
                item.icon ? 'flex items-center gap-2' : '',
                variant === 'default' && 'pb-3',
                TAB_BUTTON_CLASSES[variant][state]
              )}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {item.label}
            </button>
          );
        })}
      </div>
      {children && (
        <div className="mt-5">
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
