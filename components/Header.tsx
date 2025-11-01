import React from 'react';
import { CameraIcon } from './Icons';
import LanguageSelector from './LanguageSelector';
import { Language, TranslationKey } from '../translations';

interface HeaderProps {
  t: (key: TranslationKey) => string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ t, language, onLanguageChange }) => {
  return (
    <header className="w-full max-w-7xl mx-auto text-center">
      <div className="flex justify-center items-center gap-4">
        <CameraIcon className="h-10 w-10 text-indigo-400" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
          {t('appTitle')}
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        {t('appDescription')}
      </p>
      <div className="mt-6 flex justify-center">
        <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
      </div>
    </header>
  );
};

export default Header;