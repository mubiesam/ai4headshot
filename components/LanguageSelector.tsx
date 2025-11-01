import React from 'react';
import { Language } from '../translations';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
    return (
        <div className="relative">
            <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-gray-700 text-white border border-gray-600 rounded-md py-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                aria-label="Select language"
            >
                {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    );
};

export default LanguageSelector;
