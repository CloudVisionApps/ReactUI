import React from 'react';
import { cn } from '../../utils/cn';
import './Radio.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Radio: React.FC<RadioProps> = ({
  label,
  error,
  helperText,
  size = 'medium',
  className = '',
  id,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const baseRadioClasses = cn(
    'rounded-full border-2',
    'appearance-none relative',
    'transition-all duration-300 ease-in-out',
    'cursor-pointer',
    'shadow-sm',
    'hover:shadow-md hover:scale-105',
    'focus:outline-none focus:ring-4 focus:ring-offset-0',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-sm',
    error
      ? 'border-red-400 focus:ring-red-200 hover:border-red-500'
      : 'border-gray-300 focus:ring-blue-200 hover:border-blue-400',
    'checked:border-blue-600 checked:hover:border-blue-700',
    'checked:shadow-md checked:shadow-blue-500/30',
    sizeClasses[size],
    className
  );

  const labelClasses = cn(
    'text-sm font-semibold text-gray-800 cursor-pointer transition-colors',
    'hover:text-gray-900',
    error && 'text-red-600',
    props.disabled && 'opacity-60 cursor-not-allowed hover:text-gray-800'
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 group">
        <div className="relative flex-shrink-0">
          <input
            id={radioId}
            type="radio"
            className={baseRadioClasses}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error || helperText ? `${radioId}-help` : undefined}
            {...props}
          />
        </div>
        {label && (
          <label htmlFor={radioId} className={labelClasses}>
            {label}
          </label>
        )}
      </div>
      {(error || helperText) && (
        <span
          id={`${radioId}-help`}
          className={cn(
            'text-xs mt-1.5 ml-8 flex items-center gap-1',
            error ? 'text-red-600 font-medium' : 'text-gray-500'
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
