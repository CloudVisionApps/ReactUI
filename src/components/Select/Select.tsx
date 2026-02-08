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
    small: 'px-3 py-2 text-[13px]',
    medium: 'px-4 py-2.5 text-[14px]',
    large: 'px-5 py-3 text-[15px]',
  };

  const baseSelectClasses = cn(
    'block w-full font-medium bg-surface text-fg',
    'border-2 border-border rounded-ui',
    'transition-all duration-150 ease-out',
    'outline-none appearance-none',
    'cursor-pointer',
    'disabled:bg-surface-muted disabled:text-fg-muted disabled:cursor-not-allowed disabled:border-border',
    sizeClasses[size]
  );

  const stateClasses = error
    ? 'border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20'
    : 'hover:border-border-strong focus:border-primary focus:ring-2 focus:ring-primary-ring';

  const selectClasses = cn(baseSelectClasses, stateClasses, fullWidth && 'w-full', className);

  const labelClasses = cn(
    'text-[13px] font-semibold text-fg mb-1.5 block tracking-tight',
    error && 'text-destructive'
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
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundSize: '1.25em 1.25em',
            backgroundPosition: 'right 0.6rem center',
            backgroundRepeat: 'no-repeat',
            paddingRight: '2.25rem',
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
