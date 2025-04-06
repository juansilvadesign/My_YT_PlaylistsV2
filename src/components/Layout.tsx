
import React from 'react';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';
import { Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-64 flex-shrink-0 hidden md:block" />
        
        <div className="flex-1 overflow-y-auto">
          <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-ytmusic-background border-b border-ytmusic-secondary">
            <div className="md:hidden">
              <span className="text-xl font-bold">TuneTown</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-ytmusic-secondary rounded-full px-4 py-2 w-full max-w-md">
              <Search className="h-5 w-5 text-ytmusic-text-secondary" />
              <input 
                type="text" 
                placeholder="Search songs, artists, albums..." 
                className="bg-transparent border-none focus:outline-none text-sm w-full"
              />
            </div>
            
            <div className="hidden md:block">
              <button className="px-4 py-2 text-sm bg-transparent text-ytmusic-text-primary hover:bg-ytmusic-secondary rounded-full">
                Sign In
              </button>
            </div>
          </header>
          
          <main className="pb-24">
            {children}
          </main>
        </div>
      </div>
      
      <MusicPlayer className="fixed bottom-0 left-0 right-0" />
    </div>
  );
};

export default Layout;
