import React from 'react';
import { SettingsIcon, UserIcon, XIcon } from './icons';

interface HeaderProps {
  /** A boolean to determine if a slide's content is expanded. */
  isSlideExpanded: boolean;
  /** Callback for when the user icon is clicked. */
  onUserClick: () => void;
  /** Callback for when the close icon is clicked (in expanded view). */
  onCloseClick: () => void;
}

/**
 * @component Header
 * @description The main header, now state-aware. It shows the user icon by default
 * and switches to a close icon when content is expanded.
 */
const Header: React.FC<HeaderProps> = ({ isSlideExpanded, onUserClick, onCloseClick }) => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-[#eaeaea] z-20 pt-12">
      <button className="bg-[#1a1a1a] p-2 rounded-full transition-colors hover:bg-neutral-700 active:bg-neutral-600">
        <SettingsIcon className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-bold tracking-wider transition-opacity duration-300" style={{ opacity: isSlideExpanded ? 0 : 1 }}>
        AutoViral
      </h1>

      {/* Conditionally render User or Close icon based on expanded state */}
      <button
        onClick={isSlideExpanded ? onCloseClick : onUserClick}
        className="bg-[#1a1a1a] p-2 rounded-full transition-all duration-300 hover:bg-neutral-700 active:bg-neutral-600"
      >
        {isSlideExpanded ? <XIcon className="w-6 h-6" /> : <UserIcon className="w-6 h-6" />}
      </button>
    </header>
  );
};

export default Header;