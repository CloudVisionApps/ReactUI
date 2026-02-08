import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface NavigationItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: NavigationItem[];
  logo?: React.ReactNode;
  /** Right-side content (e.g. CTA button, user menu). Hidden on mobile. */
  trailing?: React.ReactNode;
  variant?: 'default' | 'transparent' | 'solid';
  position?: 'static' | 'sticky' | 'fixed';
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  logo,
  trailing,
  variant = 'default',
  position = 'static',
  className = '',
  ...props
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const variantClasses = {
    default: 'bg-surface/80 dark:bg-surface/90 backdrop-blur-md border-b border-border',
    transparent: 'bg-transparent',
    solid: 'bg-surface border-b border-border',
  };

  const positionClasses = {
    static: 'relative',
    sticky: 'sticky top-0 z-50',
    fixed: 'fixed top-0 left-0 right-0 z-50',
  };

  return (
    <nav
      className={cn(
        'w-full transition-all duration-150 ease-out',
        variantClasses[variant],
        positionClasses[position],
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-4 h-14">
          {/* Logo */}
          {logo && (
            <div className="flex-shrink-0 flex items-center">
              {logo}
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 flex-1 min-w-0">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={cn(
                  'px-4 py-2 rounded-md text-[13px] font-medium transition-all duration-150 ease-out',
                  'text-fg hover:text-primary',
                  item.active
                    ? 'bg-primary-muted text-primary'
                    : 'hover:bg-surface-muted',
                  item.icon ? 'flex items-center gap-2' : ''
                )}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </div>

          {/* Trailing (CTA, user menu, etc.) */}
          {trailing && (
            <div className="hidden md:flex md:items-center md:gap-2 flex-shrink-0">
              {trailing}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-fg hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                    setMobileMenuOpen(false);
                  }
                }}
                className={cn(
                  'block px-4 py-2 rounded-md text-[13px] font-medium transition-all duration-150 ease-out',
                  'text-fg hover:text-primary',
                  item.active
                    ? 'bg-primary-muted text-primary'
                    : 'hover:bg-surface-muted',
                  item.icon ? 'flex items-center gap-2' : ''
                )}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
