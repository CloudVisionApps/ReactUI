import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-[#007AFF] text-white border-0 shadow-sm hover:bg-[#0051D5] active:bg-[#0040AA] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:ring-offset-2',
  secondary: 'bg-[#F5F5F7] text-[#1D1D1F] border-0 shadow-sm hover:bg-[#E8E8ED] active:bg-[#D2D2D7] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-gray-400/30 focus:ring-offset-2',
  danger: 'bg-[#FF3B30] text-white border-0 shadow-sm hover:bg-[#D70015] active:bg-[#C70014] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#FF3B30]/30 focus:ring-offset-2',
  outline: 'bg-transparent text-[#007AFF] border border-[#007AFF] hover:bg-[#007AFF]/10 active:bg-[#007AFF]/20 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:ring-offset-2',
  ghost: 'bg-transparent text-[#1D1D1F] border-0 hover:bg-[#F5F5F7] active:bg-[#E8E8ED] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-gray-400/30 focus:ring-offset-2',
  gradient: 'bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white border-0 shadow-sm hover:from-[#0051D5] hover:to-[#4A48C4] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:ring-offset-2',
};

const sizeClasses = {
  small: 'px-4 py-1.5 text-sm font-medium min-h-[28px]',
  medium: 'px-5 py-2 text-[13px] font-medium min-h-[32px]',
  large: 'px-6 py-2.5 text-[15px] font-medium min-h-[36px]',
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
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-md cursor-pointer transition-all duration-150 ease-out outline-none relative';
  const disabledClasses = 'disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:scale-100 disabled:active:scale-100';

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
      {/* Loading spinner */}
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </span>
      )}
      
      {/* Button content */}
      <span className={cn(
        'relative flex items-center gap-2',
        isLoading && 'opacity-0'
      )}>
        {children}
      </span>
    </button>
  );
};
