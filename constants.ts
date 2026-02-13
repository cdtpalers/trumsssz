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
    coverUrl: "https://scontent.fmnl14-2.fna.fbcdn.net/v/t39.30808-6/467267536_10227814890625316_3240943355742182016_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGxD1HhGCGKPJfNC8_TDOvpvf6NB3aij4m9_o0HdqKPidUJCYVkxKL8p2Mrghp-m2sJFUiXtnx_xh_YHGi1eER3&_nc_ohc=t-uHVBCwqqgQ7kNvwFUaeCN&_nc_oc=Adlul5gE8pMZSWLnGczhsNyifxOTDHGqnVaaxibKwHtunGmEos25UClfc2yM1cmB-j0&_nc_zt=23&_nc_ht=scontent.fmnl14-2.fna&_nc_gid=uzqEdn5UFeLyHq0V_vWfhA&oh=00_Afvbd4HF5CK9zKUi-9D3J8MRHTmymBTNL_3YXiGQ9YxIxA&oe=69951AC7", // Placeholder image
    audioUrl: "https://audio.jukehost.co.uk/8Q4KCNIsMBlSPEJ0dLZEPAnzVjqyvMEv", // Example royalty-free MP3
    note: "yung song mo for me🤗",
  },
  {
    id: '2',
    title: "You Don't Know",
    artist: "Nico Play",
    coverUrl: "https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-6/633242236_25718909007731967_1390839016425213415_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGmU-IFfsJa1ESJEGgDjWt4KkmEi7ekaAkqSYSLt6RoCf8EVk5W4eXeyI7mrPNaqm3_QLaOQEcgWZrkdyAHktCr&_nc_ohc=UVofPmKnvb0Q7kNvwGqmlGg&_nc_oc=AdmkfzpBOAxt03vlFH_PutoXHISRldkCLM1ZYYTQZFAPzD7a4TMDVon_N0krjSvIhH0&_nc_zt=23&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=wvj9a8GJVQjvAO_iSU9cIw&oh=00_Afv8oElmytsbOfZ4Ick8KXQklrIE5e2BtfTGpkEpEzuedg&oe=69950079",
    audioUrl: "https://audio.jukehost.co.uk/DFLVwFqB7FTaRKo0NZNAH1hS82YJGQc8",
    note: "You don't know How I long for you, How it keeps me awake, You don't know All that I would do, The vows I would make, Married life, A family, and a wife",
  },
  {
    id: '3',
    title: "Tulda Mo",
    artist: "TJ monterde",
    coverUrl: "https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-6/495349435_4122846914703048_1886679763937689094_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH-CdZzzz58ZMKN_g1ZaApPWIRhdg48XVxYhGF2DjxdXPfDVE1U7Wlmzz7xlxZfRSOLlheD4Kv-B5WvEV1KalwT&_nc_ohc=RTaXL0EPwlcQ7kNvwEfdMLF&_nc_oc=AdnAtWWgHKOFo-WmA5--slY6DDUnuRXfG2T1MpH18_E8BAweqHFUdp1Yo2lq3dxs0Kw&_nc_zt=23&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=sbfefZAuUtgEvXjQZRjDHA&oh=00_AfuQa2zJjrbkgaWVvJQzPT_-0VkZw6P9ynbR-_SaXXCAFA&oe=699518BC",
    audioUrl: "https://audio.jukehost.co.uk/rQRrU4tqsPg7mkin4IeCYL6W2BNhAyBC",
    note: "Aalagaan ka't di papabayaan,Pagkat ikaw sa'kin ay prinsesa🥰",
  },
];
