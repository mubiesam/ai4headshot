import React from 'react';
import { SparklesIcon, PhotoIcon } from './Icons';
import LoadingSpinner from './LoadingSpinner';
import { TranslationKey } from '../translations';

interface ResultDisplayProps {
  originalImage: string | null;
  generatedImage: string | null;
  isLoading: boolean;
  t: (key: TranslationKey) => string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ originalImage, generatedImage, isLoading, t }) => {
  
  const Placeholder = () => (
    <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
      <PhotoIcon className="w-24 h-24 mb-4" />
      <h3 className="text-2xl font-semibold">{t('awaitingMessage')}</h3>
      <p className="text-gray-400">{t('awaitingSubMessage')}</p>
    </div>
  );

  return (
    <div className="bg-gray-800/50 rounded-lg w-full h-full min-h-[400px] lg:min-h-0 flex items-center justify-center p-4 relative aspect-square">
      {isLoading && (
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center rounded-lg backdrop-blur-sm">
          <LoadingSpinner />
          <p className="text-lg text-gray-300 mt-4">Generating your headshot...</p>
          <p className="text-sm text-gray-400">This can take a moment.</p>
        </div>
      )}
      
      {!originalImage && !generatedImage && <Placeholder />}

      {generatedImage ? (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex items-center justify-center text-green-400 bg-green-900/50 px-3 py-1 rounded-full text-sm mb-3">
                <SparklesIcon className="w-4 h-4 mr-2" />
                <span>{t('generationComplete')}</span>
            </div>
            <img 
                src={`data:image/png;base64,${generatedImage}`} 
                alt="Generated Headshot" 
                className="rounded-lg shadow-2xl object-contain max-w-full max-h-full"
            />
        </div>
      ) : originalImage && (
        <div className="w-full h-full flex flex-col items-center">
             <div className="flex items-center justify-center text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full text-sm mb-3">
                <span>{t('originalImage')}</span>
            </div>
            <img 
                src={originalImage} 
                alt="Original Selfie" 
                className="rounded-lg shadow-lg object-contain max-w-full max-h-full"
            />
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
