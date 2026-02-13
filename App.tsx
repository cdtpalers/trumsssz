import React, { useState } from 'react';
import { PARTNER_NAME } from './constants';
import LoveJar from './components/LoveJar';
import MusicPlayer from './components/MusicPlayer';
import FloatingHearts from './components/FloatingHearts';
import { Heart, Music, Mail } from 'lucide-react';

enum View {
  LANDING = 'LANDING',
  NOTES = 'NOTES',
  PLAYLIST = 'PLAYLIST'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);

  const renderContent = () => {
    switch (currentView) {
      case View.NOTES:
        return (
          <div className="w-full animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 text-center mb-10">
              Notes from the Heart
            </h2>
            <LoveJar />
          </div>
        );
      case View.PLAYLIST:
        return (
          <div className="w-full animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 text-center mb-10">
              Our Love Soundtrack
            </h2>
            <MusicPlayer />
          </div>
        );
      default:
        return (
          <div className="text-center animate-fadeIn max-w-2xl px-6">
            <div className="mb-6 flex justify-center">
              <Heart className="w-20 h-20 text-teal-500 fill-teal-500 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-blue-900 mb-6 leading-tight">
              Happy Heart's Day,<br />
              <span className="text-teal-600">{PARTNER_NAME}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light mb-12">
              I made this little space just for us, to remind you how much you mean to me.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setCurrentView(View.NOTES)}
                className="group relative px-8 py-4 bg-white text-teal-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-blue-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-3">
                  <Mail className="w-6 h-6" /> Open Love Jar
                </span>
              </button>

              <button
                onClick={() => setCurrentView(View.PLAYLIST)}
                className="group relative px-8 py-4 bg-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-teal-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-3">
                  <Music className="w-6 h-6" /> Play Our Songs
                </span>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-gray-800 font-sans selection:bg-teal-200 overflow-x-hidden">

      {/* Background Ambience */}
      <FloatingHearts />

      {/* Main Container */}
      <main className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">

        {/* Navigation (Only show if not on landing) */}
        {currentView !== View.LANDING && (
          <nav className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setCurrentView(View.LANDING)}
              className="text-blue-400 hover:text-teal-600 transition-colors"
            >
              Home
            </button>
            <span className="text-blue-200">|</span>
            <button
              onClick={() => setCurrentView(View.NOTES)}
              className={`transition-colors ${currentView === View.NOTES ? 'text-teal-700 font-bold' : 'text-blue-400 hover:text-teal-600'}`}
            >
              Notes
            </button>
            <span className="text-blue-200">|</span>
            <button
              onClick={() => setCurrentView(View.PLAYLIST)}
              className={`transition-colors ${currentView === View.PLAYLIST ? 'text-teal-700 font-bold' : 'text-blue-400 hover:text-teal-600'}`}
            >
              Playlist
            </button>
          </nav>
        )}

        {/* Content Area */}
        <div className="flex-grow flex items-center justify-center">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="text-center text-teal-300 text-sm mt-12 pb-4">
          Made with ❤️ for {PARTNER_NAME}
        </footer>
      </main>
    </div>
  );
};

export default App;
