import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const playlists = [
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
    { name: 'Vocaloids', url: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4' },
  ];

  return (
    <div className={cn('flex flex-col h-full bg-[#030303] border-r border-ytmusic-secondary p-2', className)}>
      <div className="flex items-center gap-2 p-4">
        <img 
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/113949476/430741846-7c027354-3cd3-44a2-9cbb-a8b75d41b533.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250406T213803Z&X-Amz-Expires=300&X-Amz-Signature=32b51b1392feed14f5118793827c2f61a4ed4fce01c9ad1d51aa9080563d4bd3&X-Amz-SignedHeaders=host" 
          alt="Logo" 
          className="h-6 w-6"
        />
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
