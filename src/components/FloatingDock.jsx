import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaFileAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FloatingDock = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const dockItems = [
    {
      id: 'github',
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/Bhuvilol',
      color: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    {
      id: 'resume',
      name: 'Resume',
      icon: <FaFileAlt className="w-6 h-6" />,
      url: 'https://drive.google.com/file/d/1D_J0ma1FMdAYH1WXvwQQZb4v0yKLLSSI/view?usp=sharing',
      color: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    {
      id: 'email',
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      url: 'mailto:bhabeshcse@gmail.com',
      color: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    {
      id: 'twitter',
      name: 'X',
      icon: <FaXTwitter className="w-6 h-6" />,
      url: 'https://x.com/0xbhuvi',
      color: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/_machomoron/',
      color: 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
    }
  ];

  const handleItemClick = (url) => {
    // Validate URL to prevent open redirect attacks
    const isValidUrl = (url) => {
      try {
        const urlObj = new URL(url);
        // Allow only specific protocols and domains
        const allowedProtocols = ['https:', 'http:', 'mailto:'];
        const allowedDomains = [
          'github.com',
          'drive.google.com', 
          'x.com',
          'twitter.com',
          'instagram.com',
          'www.instagram.com'
        ];
        
        return allowedProtocols.includes(urlObj.protocol) && 
               (urlObj.protocol === 'mailto:' || 
                allowedDomains.some(domain => urlObj.hostname.includes(domain)));
      } catch {
        return false;
      }
    };

    if (!isValidUrl(url)) {
      console.error('Invalid URL:', url);
      return;
    }

    // Use window.open for all links to prevent XSS
    if (url.startsWith('mailto:')) {
      window.open(url, '_self');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 p-4">
          {dockItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              onMouseEnter={() => {
                setHoveredItem(item.id);
                setIsExpanded(true);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
                setIsExpanded(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg text-gray-800 dark:text-gray-200`}
                onClick={() => handleItemClick(item.url)}
                animate={{
                  scale: hoveredItem === item.id ? 1.2 : 1,
                  y: hoveredItem === item.id ? -10 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.div>
              
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingDock; 