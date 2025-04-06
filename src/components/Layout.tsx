
import React from 'react';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';
import { Search, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar - conditionally shown based on mobile state */}
        <Sidebar 
          className={`${isMobile 
            ? 'fixed top-0 bottom-0 left-0 z-30 transition-transform duration-300 w-64' 
            : 'w-64 flex-shrink-0 hidden md:block'} ${isMobile && !sidebarOpen ? '-translate-x-full' : ''}`}
        />
        
        <div className="flex-1 overflow-y-auto">
          <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-ytmusic-background border-b border-ytmusic-secondary">
            <div className="flex items-center gap-2">
              {isMobile && (
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="mr-2"
                >
                  <Menu className="h-6 w-6" />
                </button>
              )}
              <span className="text-xl font-bold">TuneTown</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-ytmusic-secondary rounded-full px-4 py-2 w-full max-w-md mx-4">
              <Search className="h-5 w-5 text-ytmusic-text-secondary" />
              <input 
                type="text" 
                placeholder={isMobile ? "Search..." : "Search songs, artists, albums..."} 
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
