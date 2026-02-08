import React from 'react';
import { cn } from '../../utils/cn';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  options: Array<{ value: string; label: string }>;
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  size = 'medium',
  options,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2.5 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const baseSelectClasses = cn(
    'block w-full font-normal bg-white text-gray-900',
    'border border-solid rounded-lg',
    'box-border',
    'transition-all duration-200 ease-in-out',
    'outline-none appearance-none',
    'leading-normal',
    'cursor-pointer',
    'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-200',
    sizeClasses[size]
  );

  const stateClasses = error
    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 hover:border-red-400'
    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400';

  const selectClasses = cn(
    baseSelectClasses,
    stateClasses,
    fullWidth && 'w-full',
    className
  );

  const labelClasses = cn(
    'text-sm font-semibold text-gray-700 mb-2 block transition-colors',
    error && 'text-red-600'
  );

  return (
    <div className={cn('flex flex-col', fullWidth && 'w-full')}>
      {label && (
        <label htmlFor={selectId} className={labelClasses}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          id={selectId}
          className={selectClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${selectId}-help` : undefined}
          style={{ 
            boxSizing: 'border-box',
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundSize: '1.5em 1.5em',
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            paddingRight: '2.5rem'
          }}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {(error || helperText) && (
        <span
          id={`${selectId}-help`}
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
