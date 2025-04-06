
import React from 'react';
import MusicCard from './MusicCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';

interface MusicSection {
  title: string;
  items: {
    title: string;
    subtitle: string;
    imageUrl?: string;
  }[];
}

const FeaturedMusic: React.FC = () => {
  const isMobile = useIsMobile();
  
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
        { title: 'Echoes', subtitle: 'Sound Waves' },
        { title: 'Urban Jungle', subtitle: 'City Beats' },
        { title: 'Ocean Dreams', subtitle: 'Deep Blue' },
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
        { title: 'Road Trip', subtitle: 'Journey soundtrack' },
        { title: 'Party Mix', subtitle: 'Weekend celebration' },
        { title: 'Indie Discoveries', subtitle: 'Fresh talent' },
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
        { title: 'Chill Vibes', subtitle: 'Laid-back tunes' },
        { title: 'Mood Booster', subtitle: 'Feel-good tracks' },
        { title: 'Jazz Essentials', subtitle: 'Smooth classics' },
      ]
    }
  ];

  return (
    <div className="py-4 md:py-6 space-y-8 md:space-y-12">
      {musicSections.map((section) => (
        <div key={section.title} className="space-y-2 md:space-y-4">
          <div className="flex items-center justify-between px-4 md:px-6">
            <h2 className="text-lg md:text-xl font-bold">{section.title}</h2>
          </div>
          <ScrollArea className="w-full">
            <Carousel className="w-full px-4 md:px-6">
              <div className="flex items-center justify-between mb-2 md:mb-4">
                <div></div> {/* Empty div for spacing */}
                <div className="flex items-center gap-2">
                  <CarouselPrevious className="relative inset-0 translate-y-0 h-7 w-7 md:h-8 md:w-8 rounded-full bg-ytmusic-secondary text-ytmusic-text-primary border-none hover:bg-ytmusic-secondary/80" />
                  <CarouselNext className="relative inset-0 translate-y-0 h-7 w-7 md:h-8 md:w-8 rounded-full bg-ytmusic-secondary text-ytmusic-text-primary border-none hover:bg-ytmusic-secondary/80" />
                </div>
              </div>
              <CarouselContent className="-ml-2 md:-ml-4">
                {section.items.map((item, index) => (
                  <CarouselItem 
                    key={`${section.title}-${index}`} 
                    className={`pl-2 md:pl-4 ${isMobile ? 'basis-1/2' : 'md:basis-1/3 lg:basis-1/5'}`}
                  >
                    <MusicCard
                      title={item.title}
                      subtitle={item.subtitle}
                      imageUrl={item.imageUrl}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </ScrollArea>
        </div>
      ))}
    </div>
  );
};

export default FeaturedMusic;
