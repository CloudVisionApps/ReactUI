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
  const baseClasses = 'bg-white flex flex-col overflow-hidden transition-all duration-150 ease-out';
  
  const variantClasses = {
    default: 'rounded-lg border border-[#E8E8ED] shadow-sm',
    elevated: 'rounded-lg shadow-sm border border-[#E8E8ED]',
    outlined: 'rounded-lg border border-[#D2D2D7] shadow-none',
  };

  const hoverClasses = hoverable 
    ? 'hover:shadow-md hover:border-[#D2D2D7] cursor-pointer' 
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
        <div className="px-5 py-3.5 bg-[#F5F5F7] border-b border-[#E8E8ED]">
          <h3 className="text-[15px] font-semibold text-[#1D1D1F] leading-tight">
            {title}
          </h3>
        </div>
      )}
      <div className="px-5 py-4 flex-1 text-[#1D1D1F] text-[13px] leading-relaxed">
        {children}
      </div>
      {footer && (
        <div className="px-5 py-3.5 bg-[#F5F5F7] border-t border-[#E8E8ED]">
          {footer}
        </div>
      )}
    </div>
  );
};
