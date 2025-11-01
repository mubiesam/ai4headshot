import React from 'react';
import { HeadshotStyle } from '../types';
import { TranslationKey } from '../translations';

interface StyleSelectorProps {
  styles: HeadshotStyle[];
  selectedStyleId: string | null;
  onStyleSelect: (style: HeadshotStyle) => void;
  disabled: boolean;
  t: (key: TranslationKey | string) => string;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, selectedStyleId, onStyleSelect, disabled, t }) => {
  const containerClasses = `bg-gray-800 rounded-lg p-6 transition-opacity duration-500 ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`;
  const pointerEventsClass = disabled ? 'pointer-events-none' : '';

  return (
    <div className={containerClasses}>
      <h2 className="text-xl font-semibold text-gray-200 mb-4">{t('styleTitle')}</h2>
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${pointerEventsClass}`}>
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleSelect(style)}
            disabled={disabled}
            className={`p-3 rounded-lg text-center transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 ${
              selectedStyleId === style.id
                ? 'ring-2 ring-indigo-500 bg-gray-700 text-white shadow-md'
                : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
            }`}
          >
            <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${style.thumbnailColor}`}></div>
            {t(style.id as TranslationKey)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
