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
    'block w-full font-normal bg-white text-[#1D1D1F]',
    'border border-[#D2D2D7] rounded-md',
    'box-border',
    'transition-all duration-150 ease-out',
    'outline-none appearance-none',
    'leading-normal',
    'cursor-pointer',
    'disabled:bg-[#F5F5F7] disabled:text-[#86868B] disabled:cursor-not-allowed disabled:border-[#E8E8ED]',
    sizeClasses[size]
  );

  const stateClasses = error
    ? 'border-[#FF3B30] focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 hover:border-[#FF3B30]'
    : 'border-[#D2D2D7] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 hover:border-[#AEAEB2]';

  const selectClasses = cn(
    baseSelectClasses,
    stateClasses,
    fullWidth && 'w-full',
    className
  );

  const labelClasses = cn(
    'text-[13px] font-medium text-[#1D1D1F] mb-1.5 block transition-colors',
    error && 'text-[#FF3B30]'
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
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2386868B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
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
            'text-[12px] mt-1.5 flex items-center gap-1',
            error ? 'text-[#FF3B30] font-medium' : 'text-[#86868B]'
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
