import React from 'react';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const DefaultSeparator = () => (
  <svg className="w-4 h-4 text-fg-subtle flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className = '',
  ...props
}) => {
  const Sep = separator ?? <DefaultSeparator />;
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1.5 text-sm flex-wrap', className)} {...props}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && Sep}
          {item.href && i < items.length - 1 ? (
            <a
              href={item.href}
              className="text-fg-muted hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ) : (
            <span className={i === items.length - 1 ? 'text-fg font-medium' : 'text-fg-muted'}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
