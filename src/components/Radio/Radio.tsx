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
      ? 'border-[#FF3B30] focus-within:ring-[#FF3B30]/20 hover:border-[#FF3B30]'
      : currentChecked
      ? 'border-[#007AFF] focus-within:ring-[#007AFF]/20'
      : 'border-[#D2D2D7] focus-within:ring-[#007AFF]/20 hover:border-[#AEAEB2]',
    currentChecked && 'bg-white border-[#007AFF] hover:border-[#0051D5]',
    !currentChecked && 'bg-white border-[#D2D2D7] hover:bg-[#F5F5F7] hover:border-[#AEAEB2]',
    sizeClasses[size],
    className
  );

  const labelClasses = cn(
    'text-[13px] font-medium text-[#1D1D1F] cursor-pointer transition-colors',
    'hover:text-[#1D1D1F]',
    error && 'text-[#FF3B30]',
    disabled && 'opacity-40 cursor-not-allowed hover:text-[#1D1D1F]'
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
                'rounded-full bg-[#007AFF] pointer-events-none',
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
            'text-[12px] mt-1.5 ml-8 flex items-center gap-1',
            error ? 'text-[#FF3B30] font-medium' : 'text-[#86868B]'
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
