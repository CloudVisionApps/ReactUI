import React from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  rows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  size = 'medium',
  rows = 4,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2.5 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const baseTextareaClasses = cn(
    'block w-full font-normal bg-white text-gray-900',
    'border border-solid rounded-lg',
    'box-border',
    'transition-all duration-200 ease-in-out',
    'outline-none appearance-none',
    'leading-relaxed',
    'resize-y',
    'placeholder:text-gray-400',
    'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-200',
    sizeClasses[size]
  );

  const stateClasses = error
    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 hover:border-red-400'
    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400';

  const textareaClasses = cn(
    baseTextareaClasses,
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
        <label htmlFor={textareaId} className={labelClasses}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        <textarea
          id={textareaId}
          rows={rows}
          className={textareaClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${textareaId}-help` : undefined}
          style={{ boxSizing: 'border-box' }}
          {...props}
        />
      </div>
      {(error || helperText) && (
        <span
          id={`${textareaId}-help`}
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
