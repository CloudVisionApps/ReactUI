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

  const checkmarkSizes = {
    small: 'checked:bg-[length:10px_10px]',
    medium: 'checked:bg-[length:12px_12px]',
    large: 'checked:bg-[length:14px_14px]',
  };

  // Using Tailwind arbitrary value for background-image
  const checkmarkBg = "checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 16 16\\' fill=\\'white\\'%3E%3Cpath d=\\'M12.207 4.793a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L4.5 10.586l6.293-6.293a1 1 0 011.414 0z\\'/%3E%3C/svg%3E')]";

  const baseCheckboxClasses = cn(
    'rounded-md border-2',
    'appearance-none relative',
    'box-border m-0 p-0',
    'transition-all duration-300 ease-in-out',
    'cursor-pointer',
    'shadow-sm',
    'hover:shadow-md hover:scale-105',
    'focus:outline-none focus:ring-4 focus:ring-offset-0',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-sm',
    error
      ? 'border-red-400 focus:ring-red-200 hover:border-red-500'
      : 'border-gray-300 focus:ring-blue-200 hover:border-blue-400',
    'checked:bg-blue-600 checked:border-blue-600 checked:hover:border-blue-700',
    'checked:shadow-md checked:shadow-blue-500/30',
    checkmarkBg,
    'checked:bg-center checked:bg-no-repeat',
    checkmarkSizes[size],
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
        <input
          id={checkboxId}
          type="checkbox"
          className={baseCheckboxClasses}
          style={{ flexShrink: 0 }}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${checkboxId}-help` : undefined}
          {...props}
        />
        {label && (
          <label htmlFor={checkboxId} className={labelClasses}>
            {label}
          </label>
        )}
      </div>
      {(error || helperText) && (
        <span
          id={`${checkboxId}-help`}
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
