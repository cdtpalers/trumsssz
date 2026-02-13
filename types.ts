export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string; // URL to an image for the album art
  audioUrl: string; // URL to the audio file (mp3)
  note: string; // The special reason why this song matters
}

export interface LoveNote {
  id: string;
  content: string; // The text content of the love note
  color: string; // Background color for the note paper
}
