
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

interface MusicPlayerProps {
  className?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const songDuration = 213; // Example duration in seconds
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const progressPercent = (currentTime / songDuration) * 100;
  
  return (
    <div className={cn('flex items-center justify-between w-full px-4 py-3 bg-ytmusic-paper border-t border-ytmusic-secondary', className)}>
      <div className="flex items-center gap-4 w-1/4">
        <div className="h-12 w-12 bg-gray-700 rounded-md flex-shrink-0"></div>
        <div>
          <h4 className="text-sm font-medium">Sample Track</h4>
          <p className="text-xs text-ytmusic-text-secondary">Sample Artist</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center gap-4">
          <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
            <Shuffle className="h-4 w-4" />
          </button>
          
          <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
            <SkipBack className="h-5 w-5" />
          </button>
          
          <button 
            className="p-2 rounded-full bg-ytmusic-text-primary text-ytmusic-background"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          
          <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
            <SkipForward className="h-5 w-5" />
          </button>
          
          <button className="text-ytmusic-text-secondary hover:text-ytmusic-text-primary">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
        
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
      </div>
      
      <div className="flex items-center gap-2 w-1/4 justify-end">
        <Volume2 className="h-5 w-5 text-ytmusic-text-secondary" />
        <div className="w-24 player-progress">
          <div className="player-progress-filled" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
