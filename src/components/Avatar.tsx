import React from 'react';
import { clsx } from 'clsx';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'square' | 'rounded';
  fallback?: React.ReactNode;
  isLoading?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
  xl: 'w-24 h-24 text-lg'
};

const variantClasses = {
  circle: 'rounded-full',
  square: 'rounded-none',
  rounded: 'rounded-md'
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = 'Avatar',
      initials,
      size = 'md',
      variant = 'circle',
      fallback,
      isLoading = false,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);
    const showImage = src && !imageError && !isLoading;
    const showInitials = !showImage && initials && !isLoading;
    const showFallback = !showImage && !showInitials && !isLoading;

    const handleImageError = () => {
      setImageError(true);
    };

    const containerClasses = clsx(
      'inline-flex items-center justify-center bg-gray-300 text-gray-600 font-medium overflow-hidden',
      sizeClasses[size],
      variantClasses[variant],
      isLoading && 'animate-pulse bg-gray-200',
      className
    );

    // Fallback par défaut
    const defaultFallback = (
      <svg
        className="w-1/2 h-1/2 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {showImage && (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        )}
        
        {showInitials && (
          <span className="font-semibold">{initials}</span>
        )}
        
        {showFallback && (
          <div className="flex items-center justify-center w-full h-full">
            {fallback || defaultFallback}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;