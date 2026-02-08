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
    small: 'px-3 py-2 text-[13px]',
    medium: 'px-4 py-2.5 text-[14px]',
    large: 'px-5 py-3 text-[15px]',
  };

  const baseTextareaClasses = cn(
    'block w-full font-medium bg-surface text-fg',
    'border-2 border-border rounded-ui',
    'transition-all duration-150 ease-out',
    'outline-none appearance-none',
    'leading-relaxed resize-y',
    'placeholder:text-fg-muted',
    'disabled:bg-surface-muted disabled:text-fg-muted disabled:cursor-not-allowed disabled:border-border',
    sizeClasses[size]
  );

  const stateClasses = error
    ? 'border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20'
    : 'hover:border-border-strong focus:border-primary focus:ring-2 focus:ring-primary-ring';

  const textareaClasses = cn(baseTextareaClasses, stateClasses, fullWidth && 'w-full', className);

  const labelClasses = cn(
    'text-[13px] font-semibold text-fg mb-1.5 block tracking-tight',
    error && 'text-destructive'
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
