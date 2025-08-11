import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800">
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          background: 'linear-gradient(to right, #D4AF37, #F4E49C)',
          width: `${scrollProgress}%`
        }}
      />
    </div>
  );
};

export default ScrollProgress;