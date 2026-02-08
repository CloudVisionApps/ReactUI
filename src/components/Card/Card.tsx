import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  hoverable?: boolean;
  variant?: 'default' | 'elevated' | 'outlined';
}

export const Card: React.FC<CardProps> = ({
  title,
  footer,
  children,
  className = '',
  hoverable = false,
  variant = 'default',
  ...props
}) => {
  const baseClasses =
    'bg-surface flex flex-col overflow-hidden transition-all duration-200 ease-out rounded-ui-lg';

  const variantClasses = {
    default: 'border border-border shadow-ui',
    elevated: 'border border-border shadow-ui-md hover:shadow-ui-lg',
    outlined: 'border-2 border-border shadow-none',
  };

  const hoverClasses = hoverable
    ? 'hover:shadow-ui-md hover:border-border-strong cursor-pointer'
    : '';

  const classes = cn(baseClasses, variantClasses[variant], hoverClasses, className);

  return (
    <div className={classes} {...props}>
      {title && (
        <div className="px-5 py-4 bg-surface-subtle/80 border-b border-border">
          <h3 className="text-[14px] font-semibold text-fg leading-tight tracking-tight">
            {title}
          </h3>
        </div>
      )}
      <div className="px-5 py-4 flex-1 text-fg text-[13px] leading-relaxed">
        {children}
      </div>
      {footer && (
        <div className="px-5 py-4 bg-surface-subtle/80 border-t border-border">{footer}</div>
      )}
    </div>
  );
};
