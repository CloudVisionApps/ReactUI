import React from 'react';
import { cn } from '../../utils/cn';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'muted' | 'underline';
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => (
  <a
    className={cn(
      'font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2 rounded',
      variant === 'default' && 'text-primary hover:text-primary-hover',
      variant === 'muted' && 'text-fg-muted hover:text-primary',
      variant === 'underline' && 'text-primary hover:text-primary-hover underline underline-offset-2',
      className
    )}
    {...props}
  >
    {children}
  </a>
);
