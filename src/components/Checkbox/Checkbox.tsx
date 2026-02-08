import React from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  helperText,
  size = 'medium',
  className = '',
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const baseCheckboxClasses = cn(
    'rounded border-gray-300',
    'text-blue-600 focus:ring-2 focus:ring-blue-200',
    'transition-all duration-200 ease-in-out',
    'cursor-pointer',
    'disabled:bg-gray-100 disabled:border-gray-300 disabled:cursor-not-allowed',
    error && 'border-red-300 focus:ring-red-200',
    sizeClasses[size],
    className
  );

  const labelClasses = cn(
    'text-sm font-medium text-gray-700 cursor-pointer flex items-center gap-2',
    error && 'text-red-600',
    props.disabled && 'opacity-60 cursor-not-allowed'
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <input
          id={checkboxId}
          type="checkbox"
          className={baseCheckboxClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${checkboxId}-help` : undefined}
          {...props}
        />
        {label && (
          <label htmlFor={checkboxId} className={labelClasses}>
            <span>{label}</span>
          </label>
        )}
      </div>
      {(error || helperText) && (
        <span
          id={`${checkboxId}-help`}
          className={cn(
            'text-xs mt-1.5 ml-7 flex items-center gap-1',
            error ? 'text-red-600 font-medium' : 'text-gray-500'
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
