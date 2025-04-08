import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const playlists = [
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
    { name: 'Last Night In Soho', url: 'https://music.youtube.com/playlist?list=PLvRPFirdP2spQ5D2qRxWlpbmsU0k4OQl2' },
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
  ];

  return (
    <div className={cn('flex flex-col h-full bg-[#030303] border-r border-ytmusic-secondary p-2', className)}>
      <div className="flex items-center gap-2 p-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
          <g clipPath="url(#clip0_21011_52)">
            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FF0000"/>
            <path d="M12 6.52696C15.0183 6.52696 17.473 8.98174 17.473 12C17.473 15.0183 15.0183 17.473 12 17.473C8.98174 17.473 6.52696 15.0183 6.52696 12C6.52696 8.98174 8.98174 6.52696 12 6.52696ZM12 6C8.68565 6 6 8.68565 6 12C6 15.3143 8.68565 18 12 18C15.3143 18 18 15.3143 18 12C18 8.68565 15.3143 6 12 6Z" fill="white"/>
            <path d="M10 15L15 11.8696L10 9V15Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_21011_52">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span className="text-xl font-bold">My YT Playlists</span>
      </div>
      
      <div className="pt-20 pb-20">
        <h2 className="px-4 mb-2 text-sm font-semibold text-ytmusic-text-secondary">Community Playlists</h2>
        {playlists.map((playlist) => (
          <a 
            key={playlist.name} 
            href={playlist.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-item block no-underline text-ytmusic-text-primary hover:text-ytmusic-text-primary"
          >
            <span>{playlist.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
