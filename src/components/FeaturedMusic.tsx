
import React from 'react';
import MusicCard from './MusicCard';

interface MusicSection {
  title: string;
  items: {
    title: string;
    subtitle: string;
    imageUrl?: string;
  }[];
}

const FeaturedMusic: React.FC = () => {
  // Sample music data
  const musicSections: MusicSection[] = [
    {
      title: 'New Releases',
      items: [
        { title: 'Harmony', subtitle: 'Various Artists' },
        { title: 'Moonlight', subtitle: 'Night Owls' },
        { title: 'Serenity', subtitle: 'Peaceful Minds' },
        { title: 'Elevation', subtitle: 'The Heights' },
        { title: 'Vibrant', subtitle: 'Color Theory' },
      ]
    },
    {
      title: 'Popular Playlists',
      items: [
        { title: 'Trending Beats', subtitle: 'Curated for you' },
        { title: 'Study Focus', subtitle: 'Concentration mix' },
        { title: 'Morning Coffee', subtitle: 'Start your day' },
        { title: 'Workout Energy', subtitle: 'Push your limits' },
        { title: 'Evening Wind Down', subtitle: 'Relax and unwind' },
      ]
    },
    {
      title: 'Recently Played',
      items: [
        { title: 'Your Top Mix', subtitle: 'Based on your listening' },
        { title: 'Discover Weekly', subtitle: 'New discoveries' },
        { title: '2010s Throwback', subtitle: 'Decade classics' },
        { title: 'Acoustic Sessions', subtitle: 'Unplugged hits' },
        { title: 'Daily Drive', subtitle: 'Music for your commute' },
      ]
    }
  ];

  return (
    <div className="py-6 space-y-8">
      {musicSections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h2 className="text-xl font-bold px-6">{section.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6">
            {section.items.map((item, index) => (
              <MusicCard
                key={`${section.title}-${index}`}
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedMusic;
