import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface MusicCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  link?: string;
  className?: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ title, subtitle, imageUrl, link, className }) => {
  const isMobile = useIsMobile();
  
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn('music-card w-40 md:w-48 xl:w-56 cursor-pointer block transition-transform duration-200 hover:scale-105 relative z-10', className)}
    >
      <div className="music-card-image bg-ytmusic-secondary rounded-md aspect-square">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-md" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl opacity-30"></span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className={`${isMobile ? 'text-base' : 'text-base'} font-medium`}>{title}</h3>
        <p className={`${isMobile ? 'text-sm' : 'text-sm'} text-ytmusic-text-secondary truncate`}>{subtitle}</p>
      </div>
    </a>
  );
};

export default MusicCard;
