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
    'block w-full font-normal bg-white text-[#1D1D1F]',
    'border border-[#D2D2D7] rounded-md',
    'box-border',
    'transition-all duration-150 ease-out',
    'outline-none appearance-none',
    'leading-relaxed',
    'resize-y',
    'placeholder:text-[#86868B]',
    'disabled:bg-[#F5F5F7] disabled:text-[#86868B] disabled:cursor-not-allowed disabled:border-[#E8E8ED]',
    sizeClasses[size]
  );

  const stateClasses = error
    ? 'border-[#FF3B30] focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 hover:border-[#FF3B30]'
    : 'border-[#D2D2D7] focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 hover:border-[#AEAEB2]';

  const textareaClasses = cn(
    baseTextareaClasses,
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
