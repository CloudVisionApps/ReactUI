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
  const baseClasses = 'bg-white flex flex-col overflow-hidden transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    default: 'rounded-lg border border-gray-200 shadow-sm',
    elevated: 'rounded-lg shadow-md',
    outlined: 'rounded-lg border-2 border-gray-300 shadow-none',
  };

  const hoverClasses = hoverable 
    ? 'hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer' 
    : '';

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    hoverClasses,
    className
  );

  return (
    <div className={classes} {...props}>
      {title && (
        <div className="px-6 py-4 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
        </div>
      )}
      <div className="px-6 py-5 flex-1 text-gray-700 text-sm leading-relaxed">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};
