import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaFileAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FloatingDock = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const dockItems = [
    {
      id: 'github',
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/Bhuvilol',
    },
    {
      id: 'resume',
      name: 'Resume',
      icon: <FaFileAlt className="w-5 h-5" />,
      url: '/resume_ai_ml.pdf',
    },
    {
      id: 'email',
      name: 'Email',
      icon: <FaEnvelope className="w-5 h-5" />,
      url: 'mailto:bhabeshcse@gmail.com',
    },
    {
      id: 'twitter',
      name: 'X',
      icon: <FaXTwitter className="w-5 h-5" />,
      url: 'https://x.com/0xbhuvi',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/_machomoron/',
    }
  ];

  const handleItemClick = (url) => {
    const isValidUrl = (url) => {
      try {
        const urlObj = new URL(url);
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

    if (url.startsWith('/')) {
      window.open(url, '_blank');
      return;
    }

    if (!isValidUrl(url)) {
      console.error('Invalid URL:', url);
      return;
    }

    if (url.startsWith('mailto:')) {
      window.open(url, '_self');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="bg-hacker-surface/90 backdrop-blur-md rounded-lg border border-hacker-border"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          {dockItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                  hoveredItem === item.id 
                    ? 'border-hacker-green/50 text-hacker-green bg-hacker-green/5' 
                    : 'border-transparent text-hacker-muted hover:text-hacker-text'
                }`}
                onClick={() => handleItemClick(item.url)}
                animate={{
                  y: hoveredItem === item.id ? -6 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.div>
              
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-hacker-surface text-hacker-green text-xs font-mono rounded border border-hacker-border whitespace-nowrap"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
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
