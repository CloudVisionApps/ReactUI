import React, { useState, useRef } from 'react';
import { cn } from '../../utils/cn';

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
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const [isChecked, setIsChecked] = useState(defaultChecked || false);
  const inputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const dotSizes = {
    small: 'w-1.5 h-1.5',
    medium: 'w-2 h-2',
    large: 'w-2.5 h-2.5',
  };

  const currentChecked = checked !== undefined ? checked : isChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setIsChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const toggleRadio = () => {
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
    toggleRadio();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      toggleRadio();
    }
  };

  const customRadioClasses = cn(
    'relative flex items-center justify-center',
    'rounded-full border-2',
    'transition-all duration-300 ease-in-out',
    'cursor-pointer',
    'shadow-sm',
    'hover:shadow-md hover:scale-105',
    'focus-within:ring-4 focus-within:ring-offset-0',
    disabled && 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-sm',
    error
      ? 'border-red-400 focus-within:ring-red-200 hover:border-red-500'
      : currentChecked
      ? 'border-blue-600 focus-within:ring-blue-200'
      : 'border-gray-400 focus-within:ring-blue-200 hover:border-gray-500',
    currentChecked && 'bg-white border-blue-600 hover:border-blue-700 shadow-md shadow-blue-500/30',
    !currentChecked && 'bg-gray-100 border-gray-400 hover:bg-gray-200 hover:border-gray-500',
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
          className={customRadioClasses}
          onClick={handleClick}
          role="radio"
          aria-checked={currentChecked}
          aria-invalid={error ? 'true' : 'false'}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
        >
          <input
            ref={inputRef}
            id={radioId}
            type="radio"
            checked={currentChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            aria-hidden="true"
            {...props}
          />
          {currentChecked && (
            <div
              className={cn(
                'rounded-full bg-blue-600 pointer-events-none',
                dotSizes[size]
              )}
            />
          )}
        </div>
        {label && (
          <label
            htmlFor={radioId}
            className={cn(labelClasses, 'cursor-pointer')}
            onClick={(e) => {
              e.preventDefault();
              toggleRadio();
            }}
          >
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
