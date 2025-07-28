import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LinkPreview = ({ 
  children, 
  url, 
  image, 
  className = "", 
  previewClassName = "" 
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  useEffect(() => {
    if (showPreview && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      let x = mousePosition.x + 16;
      let y = mousePosition.y + 16;
      
      if (x + 320 > windowWidth) {
        x = mousePosition.x - 336; 
      }
      
      if (y + 200 > windowHeight) {
        y = mousePosition.y - 216; 
      }
      
      x = Math.max(16, x);
      y = Math.max(16, y);
      
      setPreviewPosition({ x, y });
    }
  }, [showPreview, mousePosition]);

  return (
    <>
      <span
        ref={linkRef}
        className={`relative inline-block ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        {children}
      </span>

      <AnimatePresence>
        {showPreview && image && (
          <motion.div
            className={`fixed z-50 pointer-events-none ${previewClassName}`}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ 
              duration: 0.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            style={{
              left: `${previewPosition.x}px`,
              top: `${previewPosition.y}px`,
              maxWidth: '320px',
              maxHeight: '200px',
            }}
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-2xl p-3 backdrop-blur-sm">
              <img
                src={image}
                alt="Preview"
                className="w-full h-auto rounded-lg object-cover"
                style={{
                  maxWidth: '300px',
                  maxHeight: '180px',
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LinkPreview; 