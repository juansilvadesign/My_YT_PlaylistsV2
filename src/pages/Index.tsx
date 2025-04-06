
import React from 'react';
import Layout from '@/components/Layout';
import FeaturedMusic from '@/components/FeaturedMusic';

const Index = () => {
  return (
    <Layout>
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to TuneTown</h1>
        <p className="text-ytmusic-text-secondary max-w-2xl mb-8">
          Your personal music streaming platform. Discover new music, create playlists, 
          and enjoy your favorite tracks anytime, anywhere.
        </p>
      </div>
      
      <FeaturedMusic />
    </Layout>
  );
};

export default Index;
