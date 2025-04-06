
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MusicPlayerProps {
  className?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const songDuration = 213; // Example duration in seconds
  const isMobile = useIsMobile();
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const progressPercent = (currentTime / songDuration) * 100;
  
  return (
    <div className={cn('flex items-center justify-between w-full px-2 md:px-4 py-2 md:py-3 bg-ytmusic-paper border-t border-ytmusic-secondary', className)}>
      <div className={`flex items-center gap-2 md:gap-4 ${isMobile ? 'w-1/3' : 'w-1/4'}`}>
        <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-700 rounded-md flex-shrink-0"></div>
        {!isMobile && (
          <div>
            <h4 className="text-sm font-medium">Sample Track</h4>
            <p className="text-xs text-ytmusic-text-secondary">Sample Artist</p>
          </div>
        )}
      </div>
      
      <div className={`flex flex-col items-center ${isMobile ? 'w-1/3' : 'w-2/4'}`}>
        <div className="flex items-center gap-1 md:gap-4">
          {!isMobile && (
            <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
              <Shuffle className="h-4 w-4" />
            </button>
          )}
          
          <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
            <SkipBack className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
          </button>
          
          <button 
            className={`p-1 md:p-2 rounded-full bg-ytmusic-text-primary text-ytmusic-background`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? 
              <Pause className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} /> : 
              <Play className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
            }
          </button>
          
          <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
            <SkipForward className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
          </button>
          
          {!isMobile && (
            <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
              <Repeat className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {!isMobile && (
          <div className="w-full flex items-center gap-2 mt-2">
            <span className="text-xs text-ytmusic-text-secondary">{formatTime(currentTime)}</span>
            <div className="flex-1 player-progress" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = (e.clientX - rect.left) / rect.width;
              setCurrentTime(percent * songDuration);
            }}>
              <div className="player-progress-filled" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <span className="text-xs text-ytmusic-text-secondary">{formatTime(songDuration)}</span>
          </div>
        )}
      </div>
      
      <div className={`flex items-center gap-2 ${isMobile ? 'w-1/3' : 'w-1/4'} justify-end`}>
        {!isMobile && (
          <>
            <Volume2 className="h-5 w-5 text-ytmusic-text-secondary" />
            <div className="w-24 player-progress">
              <div className="player-progress-filled" style={{ width: '75%' }}></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
