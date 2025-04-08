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
          subtitle: '537 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/BAb5BOhFgYV9XoxyG0FUwDWDtMIO0tRiLSfUCDIn5c6swIn7I3Ikol32n3lQy5RXIz55rIeloj0a=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKYNc2nDhshhLGgBNdOycRj'
        },
        {
          title: '케이팝',
          subtitle: '311 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/GWjexwyYQaDyi0kayQ7HZQp08lp46C9NS3YPbieBrfNW_iGEc6m2KVcKUi6lnMtblrilWBxsJN0=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQL6zBmJuBPd8FHpWs0re3Ch'
        },
        {
          title: '日本語',
          subtitle: '281 tracks • 6+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/feuA5np64cHvIhXTPY8GbTCLItzhVZtN6fL43UrNyZAd-Qz21IWnaJkcMc7YYrCCJEDQFZl5rA=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQI4hkHqi744zg0cxlP94xgR'
        },
        { title: 'English',
          subtitle: '360 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/BIw52yXMR7cEV9Eu87NgKOMonTPiJWteBg1hABtOtK8lGqUv2LiOsLkOOQCHVg9CjAvBiI5HxAs=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIoKWP1gSeSjmbY3rXt4M09'
        },
        { title: 'Português',
          subtitle: '339 tracks • 4+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/sOD5vbuvX-N36z8qb6cWll9zKT1MfcWAs-Nzv7WHRHze4ZGpEk5ctRMZq5885_QrddSoe4K5hPQR=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIenChNiaS6Wn6plI9-BH1M'
        },
        { title: 'Old Ones 🧓🏽',
          subtitle: '153 tracks • 6+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/duL8aDbMX8THCiRtJH_iS5_vbwRVmsMNjwpOEp3O6l3QFy5pYPhGpkwpeTJsm-YncCwDqnAuy_8=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKmRV6Qx2a0Ci8gn0tA3OHh'
        },
        { title: 'Eletronic 🔥',
          subtitle: '175 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/-1c-Fqu15fxwR9fGu5Ij_ah6vrYDnnSzc5weqck-HLX9FeLsfsdSLV5zlU0tAnjyxDU8jp0iQs5n=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKl9pyizXncoMIxmc2z6R-P'
        },
      ]
    },
    {
      title: 'Refined Playlists',
      items: [
        { title: "'Spin The Globe' Series 🌍",
          subtitle: '17 tracks • 41 minutes',
          imageUrl: 'https://yt3.googleusercontent.com/HHDoBAgIoBbNk9IyYe1LDSfWZAMuHFE3uE0Jiyi2hb9zsie4HYFEennolAeRs5lkRuZEOAz2kryR=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKW7PJTqJvWsd2UG9Y1F5Jm'
        },
        {
          title: 'Trending Beats',
          subtitle: 'Curated for you',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Study Focus',
          subtitle: 'Concentration mix',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Morning Coffee',
          subtitle: 'Start your day',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Workout Energy',
          subtitle: 'Push your limits',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Evening Wind Down',
          subtitle: 'Relax and unwind',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Road Trip',
          subtitle: 'Journey soundtrack',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Party Mix',
          subtitle: 'Weekend celebration',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Indie Discoveries',
          subtitle: 'Fresh talent',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Evening Wind Down',
          subtitle: 'Relax and unwind',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Road Trip',
          subtitle: 'Journey soundtrack',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Party Mix',
          subtitle: 'Weekend celebration',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Indie Discoveries',
          subtitle: 'Fresh talent',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Evening Wind Down',
          subtitle: 'Relax and unwind',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Road Trip',
          subtitle: 'Journey soundtrack',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Party Mix',
          subtitle: 'Weekend celebration',
          imageUrl: '',
          link: ''
        },
        {
          title: 'Indie Discoveries',
          subtitle: 'Fresh talent',
          imageUrl: '',
          link: ''
        },
      ]
    },
    {
      title: 'Recaps',
      items: [
        {
          title: '2024 Recap',
          subtitle: '100 songs • 5+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/YEARLY_REVIEW_2024_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRYRAxqZ3kKseLuyEyeNej471Og7LuFez_0Hp'
        },
        {
          title: '2023 Recap',
          subtitle: '99 songs • 5+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/YEARLY_REVIEW_2023_544x544.png',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKYNc2nDhshhLGgBNdOycRj'
        },
        {
          title: '2022 Recap',
          subtitle: '100 songs • 8+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/YEARLY_REVIEW_2022_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRYRSXYGO1gtF_A6JnoTdDiIkGLVEfqEfG9KQ'
        }
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
