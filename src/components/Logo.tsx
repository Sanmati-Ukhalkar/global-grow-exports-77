
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = "" }) => {
  return (
    <img 
      src="/lovable-uploads/477202ae-01a0-4eb0-b182-2d0557b1423b.png"
      alt="GrowwInternationals Logo"
      className={className}
      style={{ width: size, height: size, background: 'none' }}
    />
  );
};

export default Logo;
