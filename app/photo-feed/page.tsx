

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
export interface Photo {
   id: number;
   src: string;
   title: string;
   description: string;
   tags: string[];
}

export const photos : Photo[] = [
   {
      id: 1,
      src: 'https://img.freepik.com/free-photo/beautiful-lesbian-couple-celebrating-their-wedding-day-outdoors_23-2150637608.jpg?t=st=1727361504~exp=1727365104~hmac=a0364e9dcdfa4986efdc03ae818a9f166054b4a29be09b2450fafab0582e75f7&w=1380',
      title: 'Sunset in the mountains',
      description: 'A beautiful sunset over the mountains',
      tags: ['nature', 'sunset', 'mountains'],
   },
   {
      id: 2,
      src: 'https://img.freepik.com/free-photo/side-view-smiley-couple-indoors_23-2149903726.jpg?t=st=1727361989~exp=1727365589~hmac=b5d54348c2aab810c694b60b2d166dc79676f24034b586739ed9c8ebd063c363&w=1380',
      title: 'Mountain landscape',
      description: 'A stunning mountain landscape',
      tags: ['nature', 'mountains', 'landscape'],
   },
   {
      id: 3,
      src: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1727361538~exp=1727365138~hmac=4a5563bc1e80e79816b17c7a40a1af82ae527de0ad0d8c744956de5c62782019&w=1380',
      title: 'Sunrise over the ocean',
      description: 'A breathtaking sunrise over the ocean',
      tags: ['nature', 'sunrise', 'ocean'],
   },
   {
      id: 4,  
      src: 'https://img.freepik.com/free-photo/sensual-adult-female-hat-nature_23-2148135093.jpg?t=st=1727361975~exp=1727365575~hmac=d05bb1e848ee5b6ecc7d64d8e186ec756769d64b862b904d68cebaa37a0deaba&w=826',
      title: 'Mountain landscape',
      description: 'A stunning mountain landscape',
      tags: ['nature', 'mountains', 'landscape'],
   },
   {
      id: 5,  
      src: 'https://img.freepik.com/free-photo/psychological-therapy-support-group-meeting_23-2151044467.jpg?t=st=1727361576~exp=1727365176~hmac=4555ba82ebf8cea7d523e823fb4121bbbc5b68d407f00e48d459cf93d812df4f&w=1380',
      title: 'Sunrise over the ocean',
      description: 'A breathtaking sunrise over the ocean',
      tags: ['nature', 'sunrise', 'ocean'],
   },
   {
      id: 6,  
      src: 'https://img.freepik.com/free-photo/medium-shot-woman-living-farmhouse_23-2150621715.jpg?t=st=1727361925~exp=1727365525~hmac=26d68730de2c6d2482247aba0e46446d4ffde3525aaeb0850e0187462be14a7b&w=1380',
      title: 'Mountain landscape',
      description: 'A stunning mountain landscape',
      tags: ['nature', 'mountains', 'landscape'],
   },
   {
      id: 7,  
      src: 'https://img.freepik.com/free-vector/hand-drawn-butterfly-illustration_52683-114320.jpg?t=st=1727361575~exp=1727365175~hmac=ca402bf19e403e5222fc9cf56235064d46ef04062618fd2619ab7b209d39fde0&w=1380',
      title: 'Sunrise over the ocean',
      description: 'A breathtaking sunrise over the ocean',
      tags: ['nature', 'sunrise', 'ocean'],
   },
   {
      id: 8,  
      src: 'https://img.freepik.com/free-vector/hand-drawn-retro-computer-windows-elements_52683-114332.jpg?t=st=1727361623~exp=1727365223~hmac=9eac2cefa2ce654e92c46f51e7e60ea33b29cc00d654ab898293d5c4d19a84d1&w=1380',
      title: 'Mountain landscape',
      description: 'A stunning mountain landscape',
      tags: ['nature', 'mountains', 'landscape'],
   },
   {
      id: 9,  
      src: 'https://img.freepik.com/free-vector/hand-drawn-retro-peace-symbol-illustration_52683-114329.jpg?t=st=1727361642~exp=1727365242~hmac=f17765484604728d121573ea5f62efe76ebd62195c768f86fd88817852538973&w=1380',
      title: 'Sunrise over the ocean',
      description: 'A breathtaking sunrise over the ocean',
      tags: ['nature', 'sunrise', 'ocean'],
   },
   {
      id: 10,
      src: 'https://img.freepik.com/free-vector/world-peace-day-template-with-dove-paper-cut-style-vector-illustration_1017-39695.jpg?t=st=1727361684~exp=1727365284~hmac=8d3dc5b39dab76c3bbdceb7706cd2e87c38f17934177493b019984e6d469ca48&w=996',
      title: 'Mountain landscape',
      description: 'A stunning mountain landscape',
      tags: ['nature', 'mountains', 'landscape'],
   },
   {
      id: 11,
      src: 'https://img.freepik.com/free-vector/flat-design-international-day-peace_23-2148606503.jpg?t=st=1727361710~exp=1727365310~hmac=3e14b2da62928b7402cf66e2bcf1e3b717e28a85d5545b54b3ba556101b0d9e6&w=826',
      title: 'Sunrise over the ocean',
      description: 'A breathtaking sunrise over the ocean',
      tags: ['nature', 'sunrise', 'ocean'],
   },
   {
      id: 12,
      src: 'https://img.freepik.com/free-vector/international-day-peace-paper-style_23-2148607478.jpg?t=st=1727361730~exp=1727365330~hmac=b4a24f860cae074f3757a2a46d290476eb0b33111f76b598c1c5f311ecdd341b&w=826',
      title: 'Mountain landscape',
      description: 'A stunning mountain landscape',
      tags: ['nature', 'mountains', 'landscape'],
   },
   {
      id: 13,
      src: 'https://img.freepik.com/free-vector/peace-freedom-message-background_23-2148970053.jpg?t=st=1727361753~exp=1727365353~hmac=fc958d02185924388bb65dc1b2d2a54940e47fbe01de6feaf6d6499ed369f210&w=1380',
      title: 'Sunrise over the ocean',
      description: 'A breathtaking sunrise over the ocean',
      tags: ['nature', 'sunrise', 'ocean'],
   },
   {
      id: 14,
      src: 'https://img.freepik.com/free-vector/international-day-peace-celebration_23-2148617967.jpg?t=st=1727361768~exp=1727365368~hmac=7a3608e81d9d33f8423596a58662730449b5b62456ed1e2d7b359fb2e916c91a&w=826',
      title: 'Mountain landscape',
      description: 'A stunning mountain landscape',
      tags: ['nature', 'mountains', 'landscape'],
   }
];
const Home = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-2xl font-bold my-4'>New Wonders of the world</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {

            photos.map(({ id, src, title, description, tags }) => (
               <Link key={id} href={`/photo-feed/${id}`}>
                  <Image src={src} alt={title} width={300} height={300} className='w-full object-cover aspect-square' />
               </Link>
            ))
         }
         
      </div>
    </div>
  )
}

export default Home
