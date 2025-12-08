import React from 'react';
import MusicCard from './MusicCard';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';
import { useSearch } from '@/contexts/SearchContext';

interface MusicSection {
  imageUrl?: string;
  subtitle: string;
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
    // Top Picks
    {
      imageUrl: 'https://i.imgur.com/eFL8rPj.jpeg',
      subtitle: 'Juan Pablo',
      title: 'Top Picks',
      items: [
        {
          title: 'Rock 🤘🏽',
          subtitle: '684 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/BAb5BOhFgYV9XoxyG0FUwDWDtMIO0tRiLSfUCDIn5c6swIn7I3Ikol32n3lQy5RXIz55rIeloj0a=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKYNc2nDhshhLGgBNdOycRj'
        },
        {
          title: '케이팝',
          subtitle: '333 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/s4Z8EUSX6QKsBtP43Ly0fdlQlri-kcyNn-CuYP7v1pL4NzaWujGrA01V63sdaHSsIcwZccnsBh4=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQL6zBmJuBPd8FHpWs0re3Ch'
        },
        {
          title: '日本語',
          subtitle: '321 tracks • 6+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/feuA5np64cHvIhXTPY8GbTCLItzhVZtN6fL43UrNyZAd-Qz21IWnaJkcMc7YYrCCJEDQFZl5rA=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQI4hkHqi744zg0cxlP94xgR'
        },
        { title: 'English',
          subtitle: '388 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/m8g1ve3fDeCYX0HekGvPTKZ5hzN6wUOA1hZeBnkXDkvfGyCFkGkoLH8OVaJZTdAeuAElUicn0V0=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIoKWP1gSeSjmbY3rXt4M09'
        },
        { title: 'Português',
          subtitle: '364 tracks • 4+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/sOD5vbuvX-N36z8qb6cWll9zKT1MfcWAs-Nzv7WHRHze4ZGpEk5ctRMZq5885_QrddSoe4K5hPQR=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIenChNiaS6Wn6plI9-BH1M'
        },
        { title: 'Old Ones 🧓🏽',
          subtitle: '162 tracks • 6+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/duL8aDbMX8THCiRtJH_iS5_vbwRVmsMNjwpOEp3O6l3QFy5pYPhGpkwpeTJsm-YncCwDqnAuy_8=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKmRV6Qx2a0Ci8gn0tA3OHh'
        },
        { title: 'Eletronic 🔥',
          subtitle: '187 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/-1c-Fqu15fxwR9fGu5Ij_ah6vrYDnnSzc5weqck-HLX9FeLsfsdSLV5zlU0tAnjyxDU8jp0iQs5n=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKl9pyizXncoMIxmc2z6R-P'
        },
        {
          title: 'Orchestra 🎻',
          subtitle: '136 tracks • 11+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/8ASVAuJ8QaQEfZ_LE7oxSTINJY9ErGIZAw14jPNtnYkKXHByk6vPVmAYMlNXAWPJQGyNixObYg=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIM9LGaNPPfa1rY7Gqu6SXK'
        },
        {
          title: 'Shows 🔊',
          subtitle: '119 tracks • 82+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/xZE0gW72ZDT87N7CZRCLaKYR2o-tEo8il49uchx81C9tyoA-vOsxdT_nTB41Emvi641uChuc7A=s1200',
          link: 'https://www.youtube.com/playlist?list=PLoVlwuf7VgQLxwtGJ4XQiJnxjW5s5RXp2'
        }
      ]
    },
    // Refined Playlists
    {
      imageUrl: 'https://music.youtube.com/img/favicon_96.png', /*https://i.imgur.com/sdD9yas.jpeg*/
      subtitle: "Playlists that you can't find",
      title: 'Refined Playlists',
      items: [
        { title: "'Spin The Globe' Series 🌍",
          subtitle: '17 tracks • 41 minutes',
          imageUrl: 'https://yt3.googleusercontent.com/HHDoBAgIoBbNk9IyYe1LDSfWZAMuHFE3uE0Jiyi2hb9zsie4HYFEennolAeRs5lkRuZEOAz2kryR=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKW7PJTqJvWsd2UG9Y1F5Jm'
        },
        {
          title: 'Fast and Furious',
          subtitle: '42 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/DNCce9xLmDTEb8C2Dr_7i9bEYZ4sGXvqRSr3jrRH2On7L0ztLnEwVjsEj3S2QJRVYso7C7AWuohO=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIq-Bh0sWxvFwq-kuFVDauS'
        },
        {
          title: 'GTA San Andreas',
          subtitle: '10 tracks • 10+ hours',
          imageUrl: 'https://i9.ytimg.com/vi_locker/o_FWJZcBavY/locker.png?sqp=-oaymwEICKAEEKAEIAA&rs=AMzJL3lBtQAvT7Y4zGbexqyKpjjER3WyHg',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKZsz-GgkDd1n645zgVy8Ab'
        },
        {
          title: 'AESPA',
          subtitle: '48 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/TgGvL2q6PJGEQWYyKpftGdQdj0hXYanB3cBr_N53cj6Hpd-qdoEZuVf8JWUTv52x6cmRtn1Cyg=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKsfENWPoux9BtdD07_X2LG'
        },
        {
          title: '20XX em uma música - Lucas Inutilismo',
          subtitle: '10 tracks • 2+ hours',
          imageUrl: 'https://i.ytimg.com/vi/PhfXQ58ywuI/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AMzJL3lqg-xx-Q_R8KGxKAYUrnd4BkZ4rw',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIIzZiZuPOXa9Addy7kNbqI'
        },
        {
          title: 'Tiny Desk Concert 🎙',
          subtitle: '34 tracks • 10+ hours',
          imageUrl: 'https://i.ytimg.com/vi/2Ws_5-hiqao/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AMzJL3mzeFCl2V3-vohq1Aiw_0lCSxWY5A',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIvlEr1dXZ6_C3e7ew3L6-n'
        },
        {
          title: 'The First Take 🎙',
          subtitle: '53 tracks • 4+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/dDmZB5_DIrvJqJQ5-yPM_kBhEC1yCocEaLqv_9x7Gt_FDB3AMziQJhJhmKDXjl2ZSiuRGzt7MA=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIBaW7viAAasQl65axjC3AN'
        },
        {
          title: 'NCS Songs',
          subtitle: '51 tracks • 7+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/QWXaGvYI_mvPQ3_tAZys8vq8xAwo3uNFYaDRAZ6taWHJ5TzqrzlzeUoiqTyFFbci9p5N6aXRkg=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQJnNEff0qZBrMcHaSxZh1p_'
        },
        {
          title: 'Summer Eletrohits ⛱️',
          subtitle: '27 tracks • 1+ hour',
          imageUrl: 'https://yt3.googleusercontent.com/dD-Fcg4GuRdDa-vnOVLZl8FtwXgVBhRmMAwOusS2QBWxZbuc8qgj69Q8PQqJWkMz7giH9NZA0FI=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQL98EcL3M-jghkqqVd7jGfU'
        },
        {
          title: 'Lo-Fi 😌',
          subtitle: '4 tracks • 22 hours',
          imageUrl: 'https://i.ytimg.com/vi/ZhstyJSNKME/hqdefault.jpg?sqp=-oaymwEWCMACELQBIAQqCghQEJADGFogjgJIWg&rs=AMzJL3nOCbB5TH5gxpWUBT_cav6gfQ-C7Q',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQJiKOlgFJMmJXrDmL84Nr2S'
        },
        {
          title: 'Bathroom',
          subtitle: '13 tracks • 5+ hours',
          imageUrl: 'https://i.ytimg.com/vi/zn67tAr1T9Y/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AMzJL3m60qatM8sBWqDJzNSYVDmkjahyZg',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQJMaBF9RGmqupjAwZgkm-FX'
        },
        {
          title: 'Arraiá',
          subtitle: '15 tracks • 45 minutes',
          imageUrl: 'https://yt3.googleusercontent.com/QlpNIK7beCqffcs4OnNnmx_nn2bE2JdQ7wnmD__1DHhER6yXDQteYBi3OQMqug2XxS_wtxcL9Ms=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQLt7gH0k_BGHgh_fy4-AP3M'
        },
        {
          title: 'Collision Course',
          subtitle: '6 tracks • 21 minutes',
          imageUrl: 'https://yt3.googleusercontent.com/EP7nAVlB6vYh77U4fVnRAYjO2S4CQ-rbGuMHX79q54ijvEn3h0epb-mW1VlSJb09AclrTH7LLCb8=s1200',
          link: 'https://music.youtube.com/browse/VLPLoVlwuf7VgQLHMZ9UT1BIX8nCgRXEfSry'
        }
      ]
    },
    // Recaps
    {
      imageUrl: 'https://i.imgur.com/oP1bHaG.jpeg',
      subtitle: 'Back in time',
      title: 'Recaps',
      items: [
        {
          title: "2025 Recap",
          subtitle: '100 songs • 5+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/YEARLY_REVIEW_2025_V2_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRYRn7N6THE6j9MiTjW_l5nhD9UarTY5CMu8J'
        },
        {
          title: "September-November Recap '25",
          subtitle: '50 songs • 3+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/FALL_4_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRPupYGL-2owkJPgDAzcN97aHXCVk6gq3eD'
        },
        {
          title: "June-August Recap '25",
          subtitle: '50 songs • 3+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/SUMMER_4_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRVuc2a-bIAu6zET3ChDmo3uO46kiBKrD4p'
        },
        {
          title: "March-May Recap '25",
          subtitle: '50 songs • 2+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/SPRING_4_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRFFIWlTFS-vO9og4_Xd6mWV0lendMm3P0e'
        },
        {
          title: "December-February Recap '25",
          subtitle: '50 songs • 2+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/WINTER_4_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRcFV-LLyw0bEznqDYgrLX5Rdpz6RcIPDj-'
        },
        {
          title: '2024 Recap',
          subtitle: '100 songs • 5+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/YEARLY_REVIEW_2024_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRYRAxqZ3kKseLuyEyeNej471Og7LuFez_0Hp'
        },
        {
          title: "September-November Recap '24",
          subtitle: '50 songs • 2+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/FALL_3_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRIzZhuYr_nofX71CGoiN9oX0QzyG9R9iy8'
        },
        {
          title: "June-August Recap '24",
          subtitle: '50 songs • 3+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/SUMMER_3_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSR1vfHf7-a0F1SiiaalgNwy0093_vIURgli'
        },
        {
          title: "December-February Recap '24",
          subtitle: '50 songs • 2+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/WINTER_2_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRXmPoaqi3-9BowQI3aLIHCEJpTvG_sH3Yw'
        },
        {
          title: '2023 Recap',
          subtitle: '99 songs • 5+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/YEARLY_REVIEW_2023_544x544.png',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKYNc2nDhshhLGgBNdOycRj'
        },
        {
          title: "Spring Recap '23",
          subtitle: '49 songs • 2+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/SPRING_2023_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRL8_qDa5Qk6-76P98Jxwog67Bz-KcVfwCH'
        },
        {
          title: "Winter Recap '23",
          subtitle: '50 songs • 3+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/WINTER_2023_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRBgdhCeqPqfDlJY9ITqan1hT2qwAj5d_-i'
        },
        {
          title: "Fall Recap '23",
          subtitle: '49 songs • 2+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/FALL_2023_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRUsc3kwhjzQWUjPjfunqnFCKyaldVrEPOv'
        },
        {
          title: "Summer Recap '23",
          subtitle: '50 songs • 2+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/SUMMER_2023_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRSRZ58OjWO42aVGEY53uTdNFSa52vL7GbS7A'
        },
        {
          title: '2022 Recap',
          subtitle: '100 songs • 8+ hours',
          imageUrl: 'https://www.gstatic.com/music/listening_review/YEARLY_REVIEW_2022_544x544.png',
          link: 'https://music.youtube.com/playlist?list=LRYRSXYGO1gtF_A6JnoTdDiIkGLVEfqEfG9KQ'
        }
      ]
    },
    // FIFA
    {
      imageUrl: 'https://i.imgur.com/el3FL2S.jpeg',
      subtitle: "It's in the game",
      title: 'FIFA',
      items: [
        {
          title: 'My Ultimate FIFA Playlist',
          subtitle: '93 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/nHKhevspw_qVczxA3ijdinO6EWvntrmTDM-Vz6HpARfRwXDU8HtmpYKnWZUbLS-AditjIXOazcw=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQILo0Ce79kP_hQ55MFSA9kh'
        },
        {
          title: 'EA SPORTS FC Ultimate Soundtrack',
          subtitle: '100 tracks • 6+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/l49yrhKk0_OtvcXOqH4_j3azoA3vgqvlhSgE_n4Amfjbm937ss7UqDk6ROEXDD5Nk25Yr9QtQg=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIUsetAx0xJar8jiUdvDjJP'
        },
        {
          title: 'EA SPORTS FC 25 Soundtrack',
          subtitle: '114 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/HYOeOSUbAVoB389Xy2ypcv0dna_1fYzFyqg5pAigvGNMym--li2FO6WfrWdtefwcZaTVTh3icys=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQICbSuj7LOk28-6iAzI4cRJ'
        },
        {
          title: 'EA SPORTS FC 24 Soundtrack',
          subtitle: '110 tracks • 5+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/D0d_fk8Qf8mpXafsQVaecC_KcMBQexYHTF8mZfnx_oZDX3V4AEH7DHRyJj0d_3DXiF55OrVJL31o=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKsjFmZKVqPPr5sPP24NIuy'
        },
        {
          title: 'FIFA 23 OFFICIAL SOUNDTRACK',
          subtitle: '48 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/G_q5wkOKhjCJLBQ4UHCdx1ZOWT_5g_0gZ-8ZZGNXkc40vkLhQaJ7r9R5PwtpCjboQoYtoEUQXw=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQItYyHFz1RgNVckgwsodZRu'
        },
        {
          title: 'FIFA 22 Soundtrack',
          subtitle: '53 tracks • 3+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/-DEx3nYGUfBQKMpgCDzYap3-IZBNaT4n1feTBvTlzK6zyAAhKiAY64eauMZKt_CkqDXMQwYO4tY=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQLmjuxEtngtaWFUqKWBDcgQ'
        },
        {
          title: 'FIFA 19 Soundtrack',
          subtitle: '44 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/quN1UJGZ0JSvUgA_EUOHKe-Agq63NxE66_sFc-2IriK7L3E_UWK25po-wXzmOW5qMKocdCQSzAuX=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQLTh_nd-5XrXSAJfa5yW8EU'
        },
        {
          title: 'FIFA 18 Soundtrack',
          subtitle: '45 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/sMrkjqU2T9QXwCixkgLR5CkW6Lk5BFDfihpONFPW9K3Bxfj5OZBhQopITqKp_28p00HTq6DcKQ=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQITjTHRhQUMz_zsyI9aeRQE'
        },
        {
          title: 'FIFA 13 Soundtrack',
          subtitle: '47 tracks • 3+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/m7nF_o-WHuXV1LSlVzTvth4crLwI5qx4RqP-c8fVs6U7uTcuXybvzLIh4aVUMDFX7IAK2sIiVw=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIlZTe5HGVBy_Q0oQP54Cdu'
        },
        {
          title: 'FIFA 98 ~ 2003 Soundtrack',
          subtitle: '33 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/Q6n4Vua3WP2fkJLqIbSCsDa5XJGb4CcV4KnmdvXMWavuyY6ZF8J0wG3bcUqtEk2unFnPkG7vNg=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQLNI96O3F2XSi9TgvjF9QNx'
        }
      ]
    },
    // Need for Speed
    {
      imageUrl: 'https://i.imgur.com/ntvKBcY.jpeg',
      subtitle: 'Challenge Everything',
      title: 'Need for Speed',
      items: [
        {
          title: 'NFS - Best Soundtracks 🏎',
          subtitle: '42 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/3mXo9ZRbbjAU1qCprSDBT8z8HDeFzwDaymjBNNYa39JjhriUh2cgfGYIWGe-pwlJNnZcJM3-mqU=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQL0Qey1VEG9VxRc57Kjx-DJ'
        },
        {
          title: 'NFS Most Wanted 2005',
          subtitle: '29 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/_n2_r41SuQ5Wpl_kUGHjcmSoOLj6f5Ycmz12y8uD6fv3-MKwMXvuO4_f44Qo1ibKp31kyO6fSp0=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQILs6Bg4BuedIKV4UnCPIqX'
        },
        {
          title: 'NFS Underground 2',
          subtitle: '27 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/Uj0m5Ds2ZmhIrQIm1AAoDM1IDfq8-IZ4bpbMjOocgMzyOpXM7UyqOnf72Qin_l21YGgT_IwlbMY=s1200',
          link: 'https://music.youtube.com/browse/VLPLoVlwuf7VgQKViaOJK9eesbbuVJvw24w_'
        },
        {
          title: 'NFS Heat',
          subtitle: 'n tracks • x+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/nBI35hOY1lPvjgpS0P_ZcFTd2s7SUXmXfytP5A_a9m06WxrVLUHjgtdjV7A22ojbYd0nKb00QA=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKsTi3n7k0j_wq7lnscWYH8'
        },
        {
          title: 'NFS Carbon',
          subtitle: '33 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/e7xS4kiYBOWYW422lU5vectnbZ9d2Nb8nB1NrCTTX9hPid_DIL6SXiLoKul19SF_qmePyfsYmA=s1200',
          link: 'https://music.youtube.com/browse/VLPLoVlwuf7VgQIcHJQCRgH8na4RV31lXCra'
        },
        {
          title: 'NFS Underground',
          subtitle: '26 tracks • 1+ hour',
          imageUrl: 'https://yt3.googleusercontent.com/eecwEN19O-HyTekmhdrHUgu9TNru8DkgVG4Ol5EswLrOXoHR-7n-RbeSAgesXIB-hSkKCK3_JPE=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQJd9U0MBjLulOEZNg2oE31c'
        }
      ]
    },
    // Rest of World
    {
      imageUrl: 'https://i.imgur.com/0D2U4wK.jpeg',
      subtitle: 'Around the world',
      title: 'Rest of World',
      items: [
        {
          title: 'Français',
          subtitle: '42 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/b0YW0wfEpfXEHX-REaLik99AmuR7hHEEHYOtjIo7d3xbmyYZL417NbWHnymx315gFtIpBbPpaA=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKrwI8bs7fh2Rla_eTVvAYx'
        },
        {
          title: 'Español',
          subtitle: '49 tracks • 2+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/5HoqWPgTvSCurcmDideUYO2VfsK2MtRNRcylW_izzSXdycav_dJdyY0Fpu5OxdU95PflUCsmsm0=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQI3XA-AED1t56Z4zzBnrRk7'
        },
        {
          title: 'русский',
          subtitle: '61 tracks • 3+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/aq_z2PP22FeIVaTs849Oiq6H-4HJoMR-11RKyqnGvAZToGVphMpxOpNfodR1PeTQZtKImXeUtjo=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQKONbkyFpUuyVMA54I50-MQ'
        },
        {
          title: '中國',
          subtitle: '63 tracks • 4+ hours',
          imageUrl: 'https://yt3.googleusercontent.com/xwI5o9tIJpcspOqPgIJm5qyjGRD0jHrvpyEt2OckgB9QICUm3Ne1-i0PbQTyXIZyk4ZoXryp9CA=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQJZATmoNyHhrJurvZJqglsU'
        },
        {
          title: 'عربي',
          subtitle: '12 tracks • 47 minutes',
          imageUrl: 'https://yt3.googleusercontent.com/d85VVnCe0lnb_kynlLZUgqM-mlhBfmunAVtavhteFlE2EDubr74R2KkefcbyZD_R31cmpLBlNoCK=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQJGD72otNyZqlIPhrF4d-_6'
        },
        {
          title: 'Deutsch',
          subtitle: '4 tracks • 14 minutes',
          imageUrl: 'https://yt3.googleusercontent.com/j69YnJR7afz-9uWg4UMzkOVLa9YgShL4NA7JNwyDCdG8gXVThxJwvjg_oy8HRIbB3-nxuYwWB6Rs=s1200',
          link: 'https://music.youtube.com/playlist?list=PLoVlwuf7VgQIRvCugSNZ3ASx-Pf34B5Vi'
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
              <img className="w-12 h-12 md:w-14 md:h-14 xl:w-[64px] xl:h-[64px] relative rounded-[360px]" src={section.imageUrl} alt="Section thumbnail" />
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-white text-xs md:text-sm lg:text-base font-regular font-['Inter'] leading-normal">{section.subtitle}</div>
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
                      dragFree: true,
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
