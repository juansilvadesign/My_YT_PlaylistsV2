
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Search, Library, Disc, Clock, Heart, Plus } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn('flex flex-col h-full bg-ytmusic-paper p-2', className)}>
      <div className="flex items-center gap-2 p-4 mb-6">
        <Disc className="h-6 w-6 text-ytmusic-primary" />
        <span className="text-xl font-bold">TuneTown</span>
      </div>
      
      <nav className="space-y-2">
        <div className="sidebar-item active">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </div>
        
        <div className="sidebar-item">
          <Search className="h-5 w-5" />
          <span>Search</span>
        </div>
        
        <div className="sidebar-item">
          <Library className="h-5 w-5" />
          <span>Library</span>
        </div>
      </nav>
      
      <div className="mt-8">
        <h2 className="px-4 mb-2 text-sm font-semibold text-ytmusic-text-secondary">YOUR PLAYLISTS</h2>
        
        <div className="sidebar-item">
          <Plus className="h-4 w-4" />
          <span>Create playlist</span>
        </div>
        
        <div className="sidebar-item">
          <Heart className="h-4 w-4" />
          <span>Liked Songs</span>
        </div>
        
        <div className="sidebar-item">
          <Clock className="h-4 w-4" />
          <span>Recently played</span>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="px-4 mb-2 text-sm font-semibold text-ytmusic-text-secondary">PLAYLISTS</h2>
        {['Chill Vibes', 'Workout Mix', 'Focus Playlist', 'Road Trip', 'Party Anthems'].map((playlist) => (
          <div key={playlist} className="sidebar-item">
            <span>{playlist}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
