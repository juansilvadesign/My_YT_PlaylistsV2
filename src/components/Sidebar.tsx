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
          src="https://github.com/user-attachments/assets/a35e438f-e772-4271-ab3a-c753eb467797" 
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
