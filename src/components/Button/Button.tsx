import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] focus:ring-4 focus:ring-blue-500/30',
  secondary: 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border-0 shadow-lg shadow-gray-500/30 hover:shadow-xl hover:shadow-gray-500/40 hover:from-gray-800 hover:to-gray-900 active:scale-[0.98] focus:ring-4 focus:ring-gray-500/30',
  danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/60 hover:from-red-600 hover:to-red-700 active:scale-[0.98] focus:ring-4 focus:ring-red-500/30',
  outline: 'bg-transparent text-blue-600 border-2 border-blue-600 shadow-sm hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 active:scale-[0.98] focus:ring-4 focus:ring-blue-500/20',
  ghost: 'bg-transparent text-gray-700 border-0 hover:bg-gray-100 active:bg-gray-200 active:scale-[0.98] focus:ring-4 focus:ring-gray-500/20',
  gradient: 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white border-0 shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/60 active:scale-[0.98] focus:ring-4 focus:ring-pink-500/30',
};

const sizeClasses = {
  small: 'px-4 py-2 text-sm font-semibold min-h-[2.25rem]',
  medium: 'px-6 py-2.5 text-base font-semibold min-h-[2.75rem]',
  large: 'px-8 py-3.5 text-lg font-semibold min-h-[3.5rem]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-xl cursor-pointer transition-all duration-300 ease-out outline-none font-medium relative overflow-hidden group';
  const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:scale-100 disabled:active:scale-100';

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    isLoading && 'cursor-wait',
    !disabled && !isLoading && 'transform-gpu',
    className
  );

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shine effect on hover */}
      {!disabled && !isLoading && (
        <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      )}
      
      {/* Loading spinner */}
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </span>
      )}
      
      {/* Button content */}
      <span className={cn(
        'relative z-10 flex items-center gap-2',
        isLoading && 'opacity-0'
      )}>
        {children}
      </span>
    </button>
  );
};
