import React from 'react';
import { cn } from '../../utils/cn';

export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  copyright?: string;
  socialLinks?: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  variant?: 'default' | 'minimal';
}

export const Footer: React.FC<FooterProps> = ({
  columns = [],
  copyright,
  socialLinks = [],
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-[#F5F5F7] border-t border-[#E8E8ED]',
    minimal: 'bg-white border-t border-[#E8E8ED]',
  };

  return (
    <footer
      className={cn(
        'w-full',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Footer Columns */}
        {columns.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {columns.map((column, index) => (
              <div key={index}>
                <h3 className="text-[13px] font-semibold text-[#1D1D1F] mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href || '#'}
                        onClick={(e) => {
                          if (link.onClick) {
                            e.preventDefault();
                            link.onClick();
                          }
                        }}
                        className="text-[12px] text-[#86868B] hover:text-[#007AFF] transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#86868B] hover:text-[#007AFF] transition-colors duration-150"
                aria-label={social.label}
              >
                {social.icon || social.label}
              </a>
            ))}
          </div>
        )}

        {/* Copyright */}
        {copyright && (
          <div className="pt-8 border-t border-[#E8E8ED]">
            <p className="text-[12px] text-[#86868B]">
              {copyright}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};
