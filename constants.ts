import { LoveNote, Song } from './types';

// ==================================================================================
// 💖 USER CUSTOMIZATION SECTION 💖
// Edit the values below to personalize your Valentine's website!
// ==================================================================================

export const PARTNER_NAME = "Sophia"; // Change this to your partner's name

// 💌 LOVE NOTES 💌
// Add as many notes as you want. These will appear in the "Love Jar" feature.
// Colors updated to match the blue-green theme: bg-blue-100, bg-cyan-100, bg-teal-50, etc.
export const LOVE_NOTES: LoveNote[] = [
  {
    id: '1',
    content: "gobless love sa incoming final demo, kaya mo yan",
    color: 'bg-blue-100',
  },
  {
    id: '2',
    content: "no words can explain how much i miss you",
    color: 'bg-indigo-100',
  },
  {
    id: '3',
    content: "love thank you always reminding me that i am worthy for what i have right now",
    color: 'bg-blue-50',
  },
  {
    id: '4',
    content: "i promise that i will always stay loyal to you",
    color: 'bg-sky-50',
  },
  {
    id: '5',
    content: " onti nalang love maabot mo yung pinapangarap mo, i'm always proud of u",
    color: 'bg-indigo-50',
  },
  {
    id: '6',
    content: " sorry kung lagi kitang natutulugan",
    color: 'bg-sky-50',
  },
  {
    id: '7',
    content: "patawarin mo kung minsan nappag initan kita ulo hehehe",
    color: 'bg-indigo-100',
  },
  {
    id: '8',
    content: "kung may mga problema ka man tandaan mo nandito lang ako lagi para sayo",
    color: 'bg-indigo-100',
  },
  {
    id: '9',
    content: "sana ikaw na yung makakasama ko hanggang sa pagtanda",
    color: 'bg-sky-50',
  },
  {
    id: '10',
    content: "praying for more memories and achievement with u love",
    color: 'bg-sky-50',
  },
  {
    id: '11',
    content: " sana tumaba ka pa lalo, jk",
    color: 'bg-sky-50',
  },
];

// 🎵 OUR PLAYLIST 🎵

export const PLAYLIST: Song[] = [
  {
    id: '1',
    title: "Lifetime",
    artist: "Ben&Ben",
    coverUrl: "https://scontent.fmnl14-2.fna.fbcdn.net/v/t39.30808-6/634884928_1631474138279607_1600884015483074888_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V_iacsArDfAQ7kNvwEIvbSv&_nc_oc=AdkixepC4TJFWM71fc3tcl51Cbv5k003eWXabxAslhKng2hAra6hPoTkq9MTBb9mBA4&_nc_zt=23&_nc_ht=scontent.fmnl14-2.fna&_nc_gid=qfSUUWw5tVye4spZ62JuMQ&oh=00_AfvSBwymabfMXJHO5tTfOag7CC68fjfoRyv1uMYRUkBG_g&oe=6995B327", // Placeholder image
    audioUrl: "https://audio.jukehost.co.uk/7zXFeS7VwVjaccjSZcboIGdScxTCVJWg", // Example royalty-free MP3
    note: "always remember that i will always choose you",
  },
  {
    id: '2',
    title: "Make It With You",
    artist: "Ben&Ben",
    coverUrl: "https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-6/633018734_1631474121612942_5803761759293836611_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N8o_92dCKGAQ7kNvwFzBs_n&_nc_oc=AdmQzpYo6Fy2IYqpbWHcXswWHvuXYXjF1kxy-uJOdt8326HlzZaHDVxBlWvTAPC-64I&_nc_zt=23&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=rVeud19tmUAKiKUcP7qXfA&oh=00_AftTvAX0dB1co6Suddj54vbJYZf1iYj47RR0U3M2LRsFUw&oe=6995C048",
    audioUrl: "https://audio.jukehost.co.uk/LcQloUqivH2paNsJd8qoaLDPG4G0Gkwf",
    note: "malayo man tayo sa isat isa pero papatunayan ko na ikaw at ikaw lang ang iibigin ko",
  },
  {
    id: '3',
    title: "Araw Araw",
    artist: "Ben&Ben",
    coverUrl: "https://scontent.fmnl14-2.fna.fbcdn.net/v/t39.30808-6/633957844_1631474124946275_4089246019893141067_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=F0HTd1AbQDwQ7kNvwEwDj5O&_nc_oc=AdkizHvDsdTg_inezOUzipLcxG9PEfyaOqFxnXajSTTlwah8sQEdE0uMCNkR-fOMtIo&_nc_zt=23&_nc_ht=scontent.fmnl14-2.fna&_nc_gid=xDyyKPiuV4NdJjLBjyfH8g&oh=00_AfssWvzDgZXxcMRfjBS8FgMzHnQx5LKvUtuoYfw7AgC7JA&oe=6995A602",
    audioUrl: "https://audio.jukehost.co.uk/mcfXftJkKzhcTHS0Kc1GZStITAbK07XB",
    note: "pasensya na kung minsan nawawalan ako ng oras sayo pero tandaan mo na nandito ako para sayo",
  },

];
