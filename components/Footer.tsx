import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <a 
          href="https://ai.johocen.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl font-semibold tracking-wide text-gray-400 hover:text-white transition-colors duration-300"
        >
          aiJohocen
        </a>
      </div>
    </footer>
  );
};

export default Footer;