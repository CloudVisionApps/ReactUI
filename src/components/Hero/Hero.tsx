import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  backgroundImage?: string;
  variant?: 'default' | 'centered' | 'split';
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantClasses = {
    default: 'text-left',
    centered: 'text-center items-center',
    split: 'text-left',
  };

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        'bg-gradient-to-b from-white to-[#F5F5F7]',
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      {...props}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20" />
      )}
      
      <div className={cn(
        'relative max-w-7xl mx-auto px-5 py-20 md:py-32',
        variant === 'centered' && 'flex flex-col items-center text-center',
        variant === 'split' && 'grid md:grid-cols-2 gap-12 items-center'
      )}>
        <div className={cn(
          'flex flex-col',
          variantClasses[variant]
        )}>
          {subtitle && (
            <p className="text-[13px] font-medium text-[#007AFF] uppercase tracking-wide mb-3">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-4 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-[17px] md:text-[19px] text-[#86868B] mb-8 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-3">
              {primaryAction && (
                primaryAction.href ? (
                  <a
                    href={primaryAction.href}
                    className="inline-flex items-center justify-center gap-2 rounded-md cursor-pointer transition-all duration-150 ease-out outline-none relative px-6 py-2.5 text-[15px] font-medium min-h-[36px] bg-[#007AFF] text-white border-0 shadow-sm hover:bg-[#0051D5] active:bg-[#0040AA] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:ring-offset-2"
                  >
                    {primaryAction.label}
                  </a>
                ) : (
                  <Button
                    variant="primary"
                    size="large"
                    onClick={primaryAction.onClick}
                  >
                    {primaryAction.label}
                  </Button>
                )
              )}
              {secondaryAction && (
                secondaryAction.href ? (
                  <a
                    href={secondaryAction.href}
                    className="inline-flex items-center justify-center gap-2 rounded-md cursor-pointer transition-all duration-150 ease-out outline-none relative px-6 py-2.5 text-[15px] font-medium min-h-[36px] bg-transparent text-[#007AFF] border border-[#007AFF] hover:bg-[#007AFF]/10 active:bg-[#007AFF]/20 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:ring-offset-2"
                  >
                    {secondaryAction.label}
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    size="large"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
        
        {variant === 'split' && (
          <div className="hidden md:block">
            {/* Placeholder for image or content */}
            <div className="w-full h-96 bg-[#E8E8ED] rounded-lg flex items-center justify-center">
              <span className="text-[#86868B] text-[13px]">Image or Content</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
