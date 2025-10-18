import React from 'react';
import { SettingsIcon, UserIcon } from './icons';

/**
 * @component Header
 * @description The main header component for the application. It is displayed at the top of each slide
 * and contains navigation buttons for settings and user profile.
 */
const Header: React.FC = () => {
  return (
    // The header is absolutely positioned to float above the content.
    <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-[#eaeaea] z-10 pt-12">
      {/* Settings Button */}
      <button>
        <SettingsIcon className="w-7 h-7" />
      </button>

      {/* Application Title */}
      <h1 className="text-xl font-bold tracking-wider">AutoViral</h1>

      {/* User Profile Button */}
      <button>
        <UserIcon className="w-7 h-7" />
      </button>
    </header>
  );
};

export default Header;
