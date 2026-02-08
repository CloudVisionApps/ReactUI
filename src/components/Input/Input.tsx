import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  size = 'medium',
  leftIcon,
  rightIcon,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    small: 'px-3 py-2 text-[13px]',
    medium: 'px-4 py-2.5 text-[14px]',
    large: 'px-5 py-3 text-[15px]',
  };

  const iconPadding = {
    small: leftIcon ? 'pl-9' : rightIcon ? 'pr-9' : '',
    medium: leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '',
    large: leftIcon ? 'pl-11' : rightIcon ? 'pr-11' : '',
  };

  const baseInputClasses = cn(
    'block w-full font-medium bg-surface text-fg',
    'border-2 border-border rounded-ui',
    'transition-all duration-150 ease-out',
    'outline-none appearance-none',
    'placeholder:text-fg-muted',
    'disabled:bg-surface-muted disabled:text-fg-muted disabled:cursor-not-allowed disabled:border-border',
    sizeClasses[size],
    iconPadding[size]
  );

  const stateClasses = error
    ? 'border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20'
    : 'hover:border-border-strong focus:border-primary focus:ring-2 focus:ring-primary-ring';

  const inputClasses = cn(baseInputClasses, stateClasses, fullWidth && 'w-full', className);

  const labelClasses = cn(
    'text-[13px] font-semibold text-fg mb-1.5 block tracking-tight',
    error && 'text-destructive'
  );

  const iconSizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  return (
    <div className={cn('flex flex-col', fullWidth && 'w-full')}>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        {leftIcon && (
          <div
            className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none z-10',
              iconSizeClasses[size]
            )}
          >
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${inputId}-help` : undefined}
          style={{ boxSizing: 'border-box' }}
          {...props}
        />
        {rightIcon && (
          <div
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none z-10',
              iconSizeClasses[size]
            )}
          >
            {rightIcon}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <span
          id={`${inputId}-help`}
          className={cn(
            'text-[12px] mt-1.5 flex items-center gap-1 font-medium',
            error ? 'text-destructive' : 'text-fg-muted'
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
