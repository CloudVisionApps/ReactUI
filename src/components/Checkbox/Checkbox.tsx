import React, { useState, useRef } from 'react';
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
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const [isChecked, setIsChecked] = useState(defaultChecked || false);
  const inputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const checkmarkSizes = {
    small: 'w-2.5 h-2.5',
    medium: 'w-3 h-3',
    large: 'w-3.5 h-3.5',
  };

  const currentChecked = checked !== undefined ? checked : isChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setIsChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const toggleCheckbox = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.checked = !currentChecked;
      const syntheticEvent = {
        target: inputRef.current,
        currentTarget: inputRef.current,
      } as React.ChangeEvent<HTMLInputElement>;
      handleChange(syntheticEvent);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleCheckbox();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      toggleCheckbox();
    }
  };

  const customCheckboxClasses = cn(
    'relative flex items-center justify-center',
    'rounded-md border-2',
    'transition-all duration-300 ease-in-out',
    'cursor-pointer',
    'shadow-sm',
    'hover:shadow-md hover:scale-105',
    'focus-within:ring-4 focus-within:ring-offset-0',
    disabled && 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-sm',
    error
      ? 'border-red-400 focus-within:ring-red-200 hover:border-red-500'
      : 'border-gray-300 focus-within:ring-blue-200 hover:border-blue-400',
    currentChecked && 'bg-blue-600 border-blue-600 hover:border-blue-700 shadow-md shadow-blue-500/30',
    !currentChecked && 'bg-white',
    sizeClasses[size],
    className
  );

  const labelClasses = cn(
    'text-sm font-semibold text-gray-800 cursor-pointer transition-colors',
    'hover:text-gray-900',
    error && 'text-red-600',
    disabled && 'opacity-60 cursor-not-allowed hover:text-gray-800'
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 group">
        <div
          className={customCheckboxClasses}
          onClick={handleClick}
          role="checkbox"
          aria-checked={currentChecked}
          aria-invalid={error ? 'true' : 'false'}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
        >
          <input
            ref={inputRef}
            id={checkboxId}
            type="checkbox"
            checked={currentChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            aria-hidden="true"
            {...props}
          />
          {currentChecked && (
            <svg
              className={cn(
                'text-white pointer-events-none',
                checkmarkSizes[size]
              )}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(labelClasses, 'cursor-pointer')}
            onClick={(e) => {
              e.preventDefault();
              toggleCheckbox();
            }}
          >
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
