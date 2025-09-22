import React from 'react';
import { BarChart3, TrendingUp, Database } from 'lucide-react';

interface EntrancePageProps {
  onEnter: () => void;
  isVisible: boolean;
}

const EntrancePage: React.FC<EntrancePageProps> = ({ onEnter, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix Numbers */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400 font-mono text-sm animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {Math.floor(Math.random() * 2)}
            </div>
          ))}
        </div>

        {/* Floating Data Icons */}
        <div className="absolute inset-0">
          <BarChart3 className="absolute top-20 left-20 w-8 h-8 text-blue-500 opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }} />
          <TrendingUp className="absolute top-40 right-32 w-10 h-10 text-gold-400 opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
          <Database className="absolute bottom-32 left-1/4 w-6 h-6 text-blue-400 opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }} />
          <BarChart3 className="absolute bottom-20 right-20 w-12 h-12 text-blue-300 opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
            Welcome to My
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-gold-400 animate-pulse">
              Data Analyst
            </span>
            <span className="block">Portfolio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Transforming Raw Data into Actionable Insights
          </p>

          {/* Enter Button */}
          <button
            onClick={onEnter}
            className="group relative px-12 py-4 text-xl font-semibold text-white border-2 border-blue-500 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 animate-fade-in-up glow-on-hover"
            style={{ animationDelay: '1s' }}
          >
            <span className="relative z-10">Click For Who's Prasanna Kumar😍</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntrancePage;