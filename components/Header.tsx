import React from 'react';
import { SettingsIcon, UserIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-[#eaeaea] z-10 pt-12">
      <button>
        <SettingsIcon className="w-7 h-7" />
      </button>
      <h1 className="text-xl font-bold tracking-wider">AutoViral</h1>
      <button>
        <UserIcon className="w-7 h-7" />
      </button>
    </header>
  );
};

export default Header;