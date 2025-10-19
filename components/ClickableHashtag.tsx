import React from 'react';
import { generateHashtagLink } from '../utils/links';

interface ClickableHashtagProps {
  hashtag: string;
  platform?: string;
  className?: string;
}

const ClickableHashtag: React.FC<ClickableHashtagProps> = ({ 
  hashtag, 
  platform = 'instagram', 
  className = 'text-blue-400 hover:text-blue-300 cursor-pointer transition-colors' 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateHashtagLink(hashtag, platform), '_blank');
  };

  return (
    <span 
      onClick={handleClick}
      className={className}
      title={`View ${hashtag} on ${platform}`}
    >
      {hashtag}
    </span>
  );
};

export default ClickableHashtag;
