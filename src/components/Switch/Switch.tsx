import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-8 h-4',
  medium: 'w-11 h-6',
  large: 'w-14 h-7',
};

const thumbSizeClasses = {
  small: 'w-3 h-3',
  medium: 'w-5 h-5',
  large: 'w-6 h-6',
};

const thumbTranslate = {
  small: { off: 'translateX(0.125rem)', on: 'translateX(1rem)' },
  medium: { off: 'translateX(0.125rem)', on: 'translateX(1.25rem)' },
  large: { off: 'translateX(0.125rem)', on: 'translateX(1.75rem)' },
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  onCheckedChange,
  label,
  size = 'medium',
  disabled,
  className = '',
  ...props
}) => {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : uncontrolled;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const next = !isChecked;
    if (checked === undefined) setUncontrolled(next);
    onCheckedChange?.(next);
    props.onClick?.(e);
  };

  const btn = (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      data-state={isChecked ? 'checked' : 'unchecked'}
      className={cn(
        'inline-flex shrink-0 cursor-pointer items-center rounded-full border-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        isChecked ? 'bg-primary' : 'bg-border',
        sizeClasses[size],
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span
        className={cn(
          'pointer-events-none block rounded-full bg-white shadow-ui transition-transform duration-150',
          thumbSizeClasses[size]
        )}
        style={{ transform: isChecked ? thumbTranslate[size].on : thumbTranslate[size].off }}
      />
    </button>
  );

  if (label) {
    return (
      <label className={cn('inline-flex items-center gap-3 cursor-pointer', disabled && 'cursor-not-allowed opacity-70')}>
        {btn}
        <span className="text-sm font-medium text-fg">{label}</span>
      </label>
    );
  }
  return btn;
};
