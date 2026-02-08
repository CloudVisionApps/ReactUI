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
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2.5 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const iconPadding = {
    small: leftIcon ? 'pl-9' : rightIcon ? 'pr-9' : '',
    medium: leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '',
    large: leftIcon ? 'pl-11' : rightIcon ? 'pr-11' : '',
  };

  const baseInputClasses = cn(
    'w-full font-normal bg-white text-gray-900',
    'border rounded-lg',
    'transition-all duration-300 ease-in-out',
    'outline-none',
    'placeholder:text-gray-400 placeholder:font-normal',
    'shadow-sm',
    'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:shadow-none',
    sizeClasses[size],
    iconPadding[size]
  );

  const stateClasses = error
    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-200/50 hover:border-red-400 shadow-red-100/50'
    : 'border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200/50 hover:border-gray-400 hover:shadow-md';

  const inputClasses = cn(
    baseInputClasses,
    stateClasses,
    fullWidth && 'w-full',
    className
  );

  const labelClasses = cn(
    'text-sm font-semibold text-gray-700 mb-2 block transition-colors',
    error && 'text-red-600'
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
      <div className="relative">
        {leftIcon && (
          <div className={cn(
            'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none',
            iconSizeClasses[size]
          )}>
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${inputId}-help` : undefined}
          {...props}
        />
        {rightIcon && (
          <div className={cn(
            'absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none',
            iconSizeClasses[size]
          )}>
            {rightIcon}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <span
          id={`${inputId}-help`}
          className={cn(
            'text-xs mt-1.5 flex items-center gap-1',
            error ? 'text-red-600 font-medium' : 'text-gray-500'
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
