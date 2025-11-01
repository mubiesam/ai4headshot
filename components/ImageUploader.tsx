import React, { useRef, useState, useCallback, DragEvent } from 'react';
import { PhotoIcon } from './Icons';
import { TranslationKey } from '../translations';

interface ImageUploaderProps {
  onImageUpload: (fileData: { base64: string, mimeType: string }) => void;
  uploadedImage: string | null;
  t: (key: TranslationKey) => string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, uploadedImage, t }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFileChange = useCallback((file: File | null) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file (PNG, JPG, etc.).');
      return;
    }

    if (file.size > 4 * 1024 * 1024) { // 4MB limit
        setError('Image size should be less than 4MB.');
        return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        onImageUpload({ base64: reader.result, mimeType: file.type });
      }
    };
    reader.onerror = () => {
      setError('Failed to read the file.');
    };
    reader.readAsDataURL(file);
  }, [onImageUpload]);

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if(e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">{t('uploadTitle')}</h2>
      <div 
        className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-300 ${isDragging ? 'border-indigo-500 bg-gray-700/50' : 'border-gray-600 hover:border-indigo-500'}`}
        onClick={() => fileInputRef.current?.click()}
        onDragEnter={onDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
        />
        {uploadedImage ? (
           <img src={uploadedImage} alt="Uploaded selfie" className="mx-auto h-32 w-32 object-cover rounded-lg shadow-md" />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <PhotoIcon className="h-12 w-12 mb-2" />
            <p className="font-semibold">{t('uploadPrompt')}</p>
            <p className="text-sm">{t('uploadConstraints')}</p>
          </div>
        )}
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default ImageUploader;
