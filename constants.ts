import { LoveNote, Song } from './types';

// ==================================================================================
// 💖 USER CUSTOMIZATION SECTION 💖
// Edit the values below to personalize your Valentine's website!
// ==================================================================================

export const PARTNER_NAME = "WABI KO"; // Change this to your partner's name

// 💌 LOVE NOTES 💌
// Add as many notes as you want. These will appear in the "Love Jar" feature.
// Colors updated to match the blue-green theme: bg-blue-100, bg-cyan-100, bg-teal-50, etc.
export const LOVE_NOTES: LoveNote[] = [
  {
    id: '1',
    content: "Your eyes literally makes me melt wabiii🫣",
    color: 'bg-blue-100',
  },
  {
    id: '2',
    content: "Remember that time we got lost in the city and found that amazing pizza place? One of my favorite memories.",
    color: 'bg-teal-100',
  },
  {
    id: '3',
    content: "You are my best friend, my greatest support, and the love of my life.",
    color: 'bg-cyan-50',
  },
  {
    id: '4',
    content: "Thank you for always being there for me, even when things are tough. You're my rock.",
    color: 'bg-sky-50',
  },
  {
    id: '5',
    content: "I can't wait to build our future together. Every day with you is a gift.",
    color: 'bg-emerald-50',
  },
];

// 🎵 OUR PLAYLIST 🎵
// Add songs that mean something to you.
// For 'audioUrl', you can use direct links to MP3 files. 
// If you don't have direct MP3 links, the player will just simulate playing for the UI demo.
// For 'coverUrl', use https://picsum.photos/300/300 or specific image links.
export const PLAYLIST: Song[] = [
  {
    id: '1',
    title: "Estranghero",
    artist: "Cup of Joe",
    coverUrl: "https://cdn-images.dzcdn.net/images/cover/2a6fa96a0485ec0bf27c91bfaa2a5045/0x1900-000000-80-0-0.jpg", // Placeholder image
    audioUrl: "https://audio.jukehost.co.uk/8Q4KCNIsMBlSPEJ0dLZEPAnzVjqyvMEv", // Example royalty-free MP3
    note: "yung song mo for me🤗",
  },
  {
    id: '2',
    title: "You Don't Know",
    artist: "Nico Play",
    coverUrl: "https://i.scdn.co/image/ab67616d0000b273210e76ff9d2cf25b1ce3f611",
    audioUrl: "https://audio.jukehost.co.uk/DFLVwFqB7FTaRKo0NZNAH1hS82YJGQc8",
    note: "You don't know How I long for you, How it keeps me awake, You don't know All that I would do, The vows I would make, Married life, A family, and a wife",
  },
  {
    id: '3',
    title: "All of Me",
    artist: "John Legend",
    coverUrl: "https://picsum.photos/id/65/300/300",
    audioUrl: "",
    note: "I give you all of me, and I know you give me all of you. That trust is everything to me.",
  },
];
