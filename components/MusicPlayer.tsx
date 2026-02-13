import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music, Disc, Upload } from 'lucide-react';
import { PLAYLIST } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Song } from '../types';

const MusicPlayer: React.FC = () => {
  // Initialize playlist from constants but keep it in state to allow updates (uploads)
  const [playlist, setPlaylist] = useState<Song[]>(PLAYLIST);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const currentSong = playlist[currentSongIndex];

  // Reset state when song changes
  useEffect(() => {
    setProgress(0);
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Handle auto-play restrictions or empty URLs
        console.warn("Could not play audio automatically");
      });
    }
  }, [currentSongIndex, isPlaying, currentSong.audioUrl]); // Added audioUrl dependency to replay if file changes

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.error("Play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1; // Avoid divide by zero
      setProgress((current / duration) * 100);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      
      const newPlaylist = [...playlist];
      newPlaylist[currentSongIndex] = {
        ...newPlaylist[currentSongIndex],
        audioUrl: objectUrl
      };
      
      setPlaylist(newPlaylist);
      setIsPlaying(true);
    }
  };

  // Fake progress interval if no audio URL is present to simulate playing
  useEffect(() => {
    let interval: number;
    // Only simulate if strictly no URL. If there is a URL (even broken), the audio element handles it.
    if (isPlaying && !currentSong.audioUrl) {
      interval = window.setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return p + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong.audioUrl]);

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Left Side: Player UI */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/50 relative overflow-hidden">
        {/* Background ambience */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-blue-200 via-green-100 to-transparent opacity-50 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Album Art */}
          <motion.div 
            key={currentSong.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 rounded-2xl shadow-lg overflow-hidden mb-6 relative group"
          >
            {currentSong.coverUrl ? (
              <img 
                src={currentSong.coverUrl} 
                alt={currentSong.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Music size={48} className="text-gray-400" />
              </div>
            )}
            
            {/* Spinning Disc Effect Overlay */}
            <motion.div 
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-2 right-2 opacity-80"
            >
              <Disc size={24} className="text-white drop-shadow-md" />
            </motion.div>
          </motion.div>

          {/* Song Info */}
          <div className="text-center mb-6 w-full relative">
            <h3 className="text-2xl font-bold text-gray-800 truncate px-4">{currentSong.title}</h3>
            <p className="text-teal-600 font-medium">{currentSong.artist}</p>
            
            {/* Upload Button */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="audio/*,.flac"
                    className="hidden"
                />
                <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-gray-400 hover:text-teal-600 transition-colors bg-white/50 rounded-full hover:bg-white"
                    title="Upload local FLAC/audio file for this song"
                >
                    <Upload size={18} />
                </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-1.5 rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-teal-500 rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-8">
            <button 
              onClick={prevSong}
              className="p-3 text-gray-500 hover:text-teal-600 transition-colors"
            >
              <SkipBack size={28} />
            </button>
            
            <button 
              onClick={togglePlay}
              className="w-16 h-16 bg-teal-500 hover:bg-teal-600 rounded-full text-white flex items-center justify-center shadow-lg shadow-teal-200 transition-transform hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>

            <button 
              onClick={nextSong}
              className="p-3 text-gray-500 hover:text-teal-600 transition-colors"
            >
              <SkipForward size={28} />
            </button>
          </div>

          {/* Hidden Audio Element */}
          <audio 
            ref={audioRef}
            src={currentSong.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onEnded={nextSong}
          />
        </div>
      </div>

      {/* Right Side: Meaningful Note */}
      <div className="relative min-h-[300px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSong.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-teal-400 w-full"
          >
            <h4 className="text-teal-500 uppercase tracking-widest text-xs font-bold mb-3">
              Why this song?
            </h4>
            <p className="text-gray-700 font-serif text-xl leading-relaxed italic">
              "{currentSong.note}"
            </p>
            <div className="mt-6 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-300" />
              <span className="w-2 h-2 rounded-full bg-teal-300" />
              <span className="w-2 h-2 rounded-full bg-teal-300" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default MusicPlayer;
