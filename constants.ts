import { LoveNote, Song } from './types';

// ==================================================================================
// 💖 USER CUSTOMIZATION SECTION 💖
// Edit the values below to personalize your Valentine's website!
// ==================================================================================

export const PARTNER_NAME = "My Love"; // Change this to your partner's name

// 💌 LOVE NOTES 💌
// Add as many notes as you want. These will appear in the "Love Jar" feature.
// Colors updated to match the blue-green theme: bg-blue-100, bg-cyan-100, bg-teal-50, etc.
export const LOVE_NOTES: LoveNote[] = [
  {
    id: '1',
    content: "I love the way your eyes sparkle when you laugh. It makes my whole day brighter.",
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
    title: "Perfect",
    artist: "Ed Sheeran",
    coverUrl: "https://picsum.photos/id/30/300/300", // Placeholder image
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Example royalty-free MP3
    note: "This was the song playing when we first danced. It always reminds me of how lucky I am to hold you.",
  },
  {
    id: '2',
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    coverUrl: "https://picsum.photos/id/40/300/300",
    audioUrl: "", // Empty URL will just simulate playback visually
    note: "Because you truly are amazing, just the way you are. Never change.",
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
