import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  closeOnOverlayClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlayClick = true,
  className = '',
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
    full: 'max-w-full mx-4',
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-fg/40 backdrop-blur-[2px]"
          aria-hidden="true"
        />
        <div
          className={cn(
            'inline-block align-bottom bg-surface rounded-ui-lg text-left overflow-hidden shadow-ui-lg transform transition-all sm:my-8 sm:align-middle w-full border border-border',
            sizeClasses[size],
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {title && (
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-surface-subtle/50">
              <h3 className="text-[15px] font-semibold text-fg tracking-tight">{title}</h3>
              <button
                onClick={onClose}
                className="text-fg-muted hover:text-fg transition-colors p-1.5 rounded-ui hover:bg-surface-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <div className="px-6 py-5 text-fg text-[13px] leading-relaxed">{children}</div>
          {footer && (
            <div className="px-6 py-4 border-t border-border flex items-center justify-end gap-3 bg-surface-subtle/50">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
