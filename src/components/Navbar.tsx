import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Compass, UserCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onAuthClick: (type: 'login' | 'register') => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-dark-bg/70 border-b border-gray-200/20 dark:border-gray-800/20 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <Compass className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">Wanderlust</span>
          </Link>

          {/* Search */}
          <div className="hidden sm:flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300/50 dark:border-gray-700/50 rounded-full leading-5 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm text-gray-900 dark:text-dark-text placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200"
                  placeholder="Search destinations"
                />
              </div>
            </div>
          </div>

          {/* Right menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-dark-card/20 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="relative">
              <button
                onClick={() => onAuthClick('login')}
                className="flex items-center gap-2 p-2 rounded-full border border-gray-300/50 dark:border-gray-700/50 hover:shadow-md dark:hover:bg-gray-800/50 transition-all duration-200 backdrop-blur-sm"
              >
                <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <UserCircle className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}