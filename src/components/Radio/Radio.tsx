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
    'relative flex items-center justify-center rounded-full border-2 transition-all duration-200 cursor-pointer',
    'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-ring',
    disabled && 'opacity-50 cursor-not-allowed',
    error
      ? 'border-destructive focus-within:ring-destructive/20'
      : currentChecked
      ? 'border-primary bg-surface'
      : 'border-border bg-surface hover:border-border-strong',
    sizeClasses[size],
    className
  );

  const labelClasses = cn(
    'text-[13px] font-semibold text-fg cursor-pointer transition-colors tracking-tight',
    error && 'text-destructive',
    disabled && 'opacity-50 cursor-not-allowed'
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
              className={cn('rounded-full bg-primary pointer-events-none', dotSizes[size])}
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
            'text-[12px] mt-1.5 ml-8 font-medium',
            error ? 'text-destructive' : 'text-fg-muted'
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
