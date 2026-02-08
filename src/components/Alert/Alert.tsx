import React from 'react';
import { cn } from '../../utils/cn';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  ...props
}) => {
  const variantClasses = {
    info: 'bg-info-muted border border-primary/20 text-primary',
    success: 'bg-success-muted border border-success/25 text-success',
    warning: 'bg-warning-muted border border-warning/25 text-warning',
    danger: 'bg-destructive-muted border border-destructive/25 text-destructive',
  };

  const iconColors = {
    info: 'text-primary',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-destructive',
  };

  const icons = {
    info: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    danger: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div
      className={cn(
        'rounded-ui-lg border p-4 font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <div className={cn('flex-shrink-0', iconColors[variant])}>{icons[variant]}</div>
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="text-[13px] font-semibold mb-1 tracking-tight">{title}</h3>
          )}
          <div className="text-[13px] leading-relaxed">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity rounded-ui p-1 -m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
