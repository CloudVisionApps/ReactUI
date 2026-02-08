import React from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'medium',
  status,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    small: 'w-8 h-8 text-xs',
    medium: 'w-10 h-10 text-sm',
    large: 'w-12 h-12 text-base',
    xlarge: 'w-16 h-16 text-lg',
  };

  const statusClasses = {
    online: 'bg-[#34C759]',
    offline: 'bg-[#86868B]',
    away: 'bg-[#FF9500]',
    busy: 'bg-[#FF3B30]',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={cn('relative inline-block', className)} {...props}>
      <div
        className={cn(
          'rounded-full bg-[#E8E8ED] flex items-center justify-center overflow-hidden',
          'border-2 border-white',
          sizeClasses[size]
        )}
      >
        {src ? (
          <img src={src} alt={alt || name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-[#86868B] font-medium">
            {name ? getInitials(name) : '?'}
          </span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-white',
            statusClasses[status],
            size === 'small' && 'w-2.5 h-2.5',
            size === 'medium' && 'w-3 h-3',
            size === 'large' && 'w-3.5 h-3.5',
            size === 'xlarge' && 'w-4 h-4'
          )}
        />
      )}
    </div>
  );
};
