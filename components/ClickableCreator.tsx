import React from 'react';
import { generateCreatorLink } from '../utils/links';

interface ClickableCreatorProps {
  creator: string;
  platform?: string;
  className?: string;
}

const ClickableCreator: React.FC<ClickableCreatorProps> = ({ 
  creator, 
  platform = 'instagram', 
  className = 'text-purple-400 hover:text-purple-300 cursor-pointer transition-colors' 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateCreatorLink(creator, platform), '_blank');
  };

  return (
    <span 
      onClick={handleClick}
      className={className}
      title={`View ${creator} profile on ${platform}`}
    >
      {creator}
    </span>
  );
};

export default ClickableCreator;
