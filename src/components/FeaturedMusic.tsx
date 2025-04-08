import React from 'react';
import MusicCard from './MusicCard';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';
import { useSearch } from '@/contexts/SearchContext';

interface MusicSection {
  title: string;
  items: {
    title: string;
    subtitle: string;
    imageUrl?: string;
    link?: string;
  }[];
}

const FeaturedMusic: React.FC = () => {
  const isMobile = useIsMobile();
  const { searchQuery } = useSearch();
  
  // Sample music data
  const musicSections: MusicSection[] = [
    {
      title: 'Top Picks',
      items: [
        {
          title: 'Rock 🤘🏽',
          subtitle: '17 tracks • 41 minutes',
          imageUrl: 'https://yt3.googleusercontent.com/BAb5BOhFgYV9XoxyG0FUwDWDtMIO0tRiLSfUCDIn5c6swIn7I3Ikol32n3lQy5RXIz55rIeloj0a=s1200',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: '케이팝',
          subtitle: 'Night Owls',
          imageUrl: 'https://yt3.googleusercontent.com/GWjexwyYQaDyi0kayQ7HZQp08lp46C9NS3YPbieBrfNW_iGEc6m2KVcKUi6lnMtblrilWBxsJN0=s1200',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Serenity',
          subtitle: 'Peaceful Minds',
          imageUrl: 'https://example.com/image3.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        { title: 'Elevation',
          subtitle: 'The Heights',
          imageUrl: 'https://example.com/image4.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        { title: 'Vibrant',
          subtitle: 'Color Theory',
          imageUrl: 'https://example.com/image5.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        { title: 'Echoes',
          subtitle: 'Sound Waves',
          imageUrl: 'https://example.com/image6.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        { title: 'Urban Jungle',
          subtitle: 'City Beats',
          imageUrl: 'https://example.com/image7.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        { title: 'Ocean Dreams',
          subtitle: 'Deep Blue',
          imageUrl: 'https://example.com/image8.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
      ]
    },
    {
      title: 'Popular Playlists',
      items: [
        {
          title: 'Trending Beats',
          subtitle: 'Curated for you',
          imageUrl: 'https://example.com/image9.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Study Focus',
          subtitle: 'Concentration mix',
          imageUrl: 'https://example.com/image10.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Morning Coffee',
          subtitle: 'Start your day',
          imageUrl: 'https://example.com/image11.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Workout Energy',
          subtitle: 'Push your limits',
          imageUrl: 'https://example.com/image12.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Evening Wind Down',
          subtitle: 'Relax and unwind',
          imageUrl: 'https://example.com/image13.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Road Trip',
          subtitle: 'Journey soundtrack',
          imageUrl: 'https://example.com/image14.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Party Mix',
          subtitle: 'Weekend celebration',
          imageUrl: 'https://example.com/image15.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Indie Discoveries',
          subtitle: 'Fresh talent',
          imageUrl: 'https://example.com/image16.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Evening Wind Down',
          subtitle: 'Relax and unwind',
          imageUrl: 'https://example.com/image13.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Road Trip',
          subtitle: 'Journey soundtrack',
          imageUrl: 'https://example.com/image14.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Party Mix',
          subtitle: 'Weekend celebration',
          imageUrl: 'https://example.com/image15.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Indie Discoveries',
          subtitle: 'Fresh talent',
          imageUrl: 'https://example.com/image16.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Evening Wind Down',
          subtitle: 'Relax and unwind',
          imageUrl: 'https://example.com/image13.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Road Trip',
          subtitle: 'Journey soundtrack',
          imageUrl: 'https://example.com/image14.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Party Mix',
          subtitle: 'Weekend celebration',
          imageUrl: 'https://example.com/image15.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Indie Discoveries',
          subtitle: 'Fresh talent',
          imageUrl: 'https://example.com/image16.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
      ]
    },
    {
      title: 'Recently Played',
      items: [
        {
          title: 'Your Top Mix',
          subtitle: 'Based on your listening',
          imageUrl: 'https://example.com/image17.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Discover Weekly',
          subtitle: 'New discoveries',
          imageUrl: 'https://example.com/image18.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: '2010s Throwback',
          subtitle: 'Decade classics',
          imageUrl: 'https://example.com/image19.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Acoustic Sessions',
          subtitle: 'Unplugged hits',
          imageUrl: 'https://example.com/image20.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Daily Drive',
          subtitle: 'Music for your commute',
          imageUrl: 'https://example.com/image21.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Chill Vibes',
          subtitle: 'Laid-back tunes',
          imageUrl: 'https://example.com/image22.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Mood Booster',
          subtitle: 'Feel-good tracks',
          imageUrl: 'https://example.com/image23.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
        {
          title: 'Jazz Essentials',
          subtitle: 'Smooth classics',
          imageUrl: 'https://example.com/image24.jpg',
          link: 'https://music.youtube.com/playlist?list=PLB02wINShjkBKnLfufaEPnCupGO-SK6e4'
        },
      ]
    }
  ];

  // Filter function for music items
  const filterItems = (items: MusicSection['items']) => {
    if (!searchQuery) return items;
    
    return items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="pt-6">
      {musicSections.map((section) => {
        const filteredItems = filterItems(section.items);
        
        // Don't render sections with no matching items
        if (filteredItems.length === 0) return null;

        return (
          <div key={section.title} className="px-4 md:pl-14 lg:pl-24 pt-6 pb-6 lg:pt-14 lg:pb-14">
            <div className="inline-flex justify-start items-center gap-3">
              <img className="w-12 h-12 md:w-14 md:h-14 xl:w-[64px] xl:h-[64px] relative rounded-[360px]" src="https://i.imgur.com/eFL8rPj.jpeg" alt="Section thumbnail" />
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-white text-xs md:text-sm lg:text-base font-regular font-['Inter'] leading-normal">Juan Pablo</div>
                <div className="justify-center text-white text-xl md:text-2xl lg:text-4xl font-semibold font-['Inter']">{section.title}</div>
              </div>
            </div>
            <div className="relative">
              <ScrollArea className="w-full">
                <div className="overflow-visible">
                  <Carousel 
                    className="w-full"
                    opts={{
                      align: "start",
                      containScroll: "trimSnaps",
                      dragFree: false,
                      skipSnaps: false
                    }}
                  >
                    <CarouselContent className="gap-6 !-ml-0">
                      {filteredItems.map((item, index) => (
                        <CarouselItem 
                          key={`${section.title}-${index}`} 
                          className="w-40 md:w-48 xl:w-56 shrink-0 basis-40 md:basis-48 xl:basis-56 !pl-0"
                        >
                          <div className="pt-4 pb-4 px-2">
                            <div className="relative">
                              <MusicCard
                                title={item.title}
                                subtitle={item.subtitle}
                                imageUrl={item.imageUrl}
                                link={item.link}
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </ScrollArea>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedMusic;
