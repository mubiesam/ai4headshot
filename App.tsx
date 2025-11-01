import React, { useState, useCallback } from 'react';
import { HeadshotStyle } from './types';
import { HEADSHOT_STYLES } from './constants';
import { generateHeadshot } from './services/geminiService';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import StyleSelector from './components/StyleSelector';
import ResultDisplay from './components/ResultDisplay';
import { ArrowPathIcon, ArrowDownTrayIcon } from './components/Icons';
import { translations, Language, TranslationKey } from './translations';


interface UploadedFile {
  base64: string;
  mimeType: string;
}

const App: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<HeadshotStyle | null>(null);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: TranslationKey) => {
    return translations[language][key] || key;
  }, [language]);

  const handleImageUpload = useCallback((fileData: UploadedFile) => {
    setUploadedFile(fileData);
    setGeneratedImage(null); // Clear previous result when new image is uploaded
    setError(null);
  }, []);

  const handleStyleSelect = useCallback((style: HeadshotStyle) => {
    setSelectedStyle(style);
    setError(null);
  }, []);

  const handleGenerate = async () => {
    if (!uploadedFile || !selectedStyle) {
      setError(t('errorUploadStyle'));
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    let finalPrompt = selectedStyle.prompt;
    if (customPrompt.trim()) {
      finalPrompt += `\n\nAdditionally, apply the following refinement: ${customPrompt.trim()}`;
    }

    try {
      const resultBase64 = await generateHeadshot(uploadedFile.base64, uploadedFile.mimeType, finalPrompt);
      setGeneratedImage(resultBase64);
    } catch (e) {
      console.error(e);
      setError(t('errorDefault'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUploadedFile(null);
    setSelectedStyle(null);
    setCustomPrompt('');
    setGeneratedImage(null);
    setIsLoading(false);
    setError(null);
  };
  
  const canGenerate = uploadedFile !== null && selectedStyle !== null && !isLoading;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header t={t} language={language} onLanguageChange={setLanguage} />
      <main className="w-full max-w-7xl mx-auto flex-grow flex flex-col lg:flex-row gap-8 mt-8">
        {/* Controls Column */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <ImageUploader t={t} onImageUpload={handleImageUpload} uploadedImage={uploadedFile?.base64 || null} />
          <StyleSelector 
            t={t}
            styles={HEADSHOT_STYLES} 
            selectedStyleId={selectedStyle?.id || null} 
            onStyleSelect={handleStyleSelect}
            disabled={!uploadedFile}
          />
          <div className={`bg-gray-800 rounded-lg p-6 transition-opacity duration-500 ${!uploadedFile ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>
            <h2 className="text-xl font-semibold text-gray-200 mb-4">{t('refineTitle')}</h2>
            <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                disabled={!uploadedFile}
                placeholder={t('refinePlaceholder')}
                className="w-full h-24 bg-gray-700/50 border-2 border-gray-600 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none disabled:cursor-not-allowed"
                aria-label="Custom prompt for headshot refinement"
            />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col gap-4">
             <button
                onClick={handleGenerate}
                disabled={!canGenerate}
                className={`w-full text-lg font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  canGenerate
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? t('generatingButton') : t('generateButton')}
              </button>
              {error && <p className="text-red-400 text-center">{error}</p>}
          </div>

          <div className="flex items-center gap-4">
            <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              <ArrowPathIcon className="h-5 w-5" />
              {t('startOverButton')}
            </button>
            {generatedImage && (
               <a
                href={`data:image/png;base64,${generatedImage}`}
                download="ai_headshot.png"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                {t('downloadButton')}
              </a>
            )}
          </div>
        </div>

        {/* Display Column */}
        <div className="lg:w-2/3">
          <ResultDisplay
            t={t}
            originalImage={uploadedFile?.base64 || null}
            generatedImage={generatedImage}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
