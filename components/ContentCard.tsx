import React from 'react';

interface ContentCardProps {
  imageUrl: string;
  title: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ imageUrl, title }) => {
  return (
    <div 
      className="rounded-2xl h-60 bg-cover bg-center flex flex-col justify-end p-4 text-[#eaeaea] relative overflow-hidden" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default ContentCard;