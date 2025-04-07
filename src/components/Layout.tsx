import React from 'react';
import Sidebar from './Sidebar';
import { Search, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSearch } from '@/contexts/SearchContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed background with gradient overlay */}
      <div 
        className="fixed inset-0 w-full h-[720px] lg:h-[650px] bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/NuHosKA4eblVMc1FikgVycO4XdVii6yFQPjqC25_kzFAgusSHWHqcqedYnT1xXqitofx6t4asRCz52z_=w1500-h844-l90-rj")'
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-[#030303]"></div>
      </div>

      <div className="flex flex-1 overflow-hidden relative z-1">
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
            : 'w-64 flex-shrink-0 hidden xl:block'} ${isMobile && !sidebarOpen ? '-translate-x-full' : ''}`}
        />
        
        <div className="flex-1 overflow-y-auto">
          <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-[rgba(3,3,3,0.5)] to-[rgba(3,3,3,0.1)] backdrop-blur-md border-b border-ytmusic-secondary">
            <div className="flex items-center gap-2">
              {isMobile && (
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="mr-2"
                >
                  <Menu className="h-6 w-6" />
                </button>
              )}
            </div>
            
            <div className="flex items-center space-x-2 bg-ytmusic-secondary rounded-full px-4 py-2 w-full max-w-md mx-4">
              <Search className="h-5 w-5 text-ytmusic-text-secondary" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isMobile ? "Search..." : "Search songs, artists, albums..."} 
                className="bg-transparent border-none focus:outline-none text-sm w-full text-white"
              />
            </div>
          </header>
          
          <main className="pb-24 relative z-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
