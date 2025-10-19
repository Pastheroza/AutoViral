import React from 'react';
import { SettingsIcon, UserIcon, XIcon } from './icons';

interface HeaderProps {
  /** A boolean to determine if a slide's content is expanded. */
  isSlideExpanded: boolean;
  /** Callback for when the user icon is clicked. */
  onUserClick: () => void;
  /** Callback for when the close icon is clicked (in expanded view). */
  onCloseClick: () => void;
  /** Callback for when the search icon is clicked. */
  onSearchClick?: () => void;
}

/**
 * @component Header
 * @description The main header with settings, title, search, and user buttons in one line
 */
const Header: React.FC<HeaderProps> = ({ isSlideExpanded, onUserClick, onCloseClick, onSearchClick }) => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-[#eaeaea] z-20 pt-16 pb-6">
      {/* Left side - Settings */}
      <div className="flex items-center">
        <button className="bg-[#1a1a1a] p-2 rounded-full transition-colors hover:bg-neutral-700 active:bg-neutral-600">
          <SettingsIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Center - Title */}
      <h1 className="text-xl font-bold tracking-wider transition-opacity duration-300" style={{ opacity: isSlideExpanded ? 0 : 1 }}>
        AutoViral
      </h1>

      {/* Right side - Search and User/Close buttons */}
      <div className="flex items-center space-x-2">
        {/* Search button */}
        <button
          onClick={onSearchClick}
          className="bg-[#1a1a1a] p-2 rounded-full transition-colors hover:bg-neutral-700 active:bg-neutral-600"
        >
          <span className="w-6 h-6 flex items-center justify-center text-lg">🔍</span>
        </button>
        
        {/* User or Close button */}
        <button
          onClick={isSlideExpanded ? onCloseClick : onUserClick}
          className="bg-[#1a1a1a] p-2 rounded-full transition-all duration-300 hover:bg-neutral-700 active:bg-neutral-600"
        >
          {isSlideExpanded ? <XIcon className="w-6 h-6" /> : <UserIcon className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;