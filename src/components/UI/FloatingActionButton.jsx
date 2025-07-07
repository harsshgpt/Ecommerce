import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';

const FloatingActionButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      icon: MessageCircle,
      label: 'Chat Support',
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => console.log('Chat support clicked'),
    },
    {
      icon: Phone,
      label: 'Call Us',
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => console.log('Call us clicked'),
    },
  ];

  return (
    <AnimatePresence>
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="flex flex-col items-end space-y-3">
            {/* Action Buttons */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="flex flex-col space-y-2"
                >
                  {actions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={action.onClick}
                      className={`${action.color} text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2 group`}
                    >
                      <action.icon className="h-5 w-5" />
                      <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {action.label}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={isExpanded ? () => setIsExpanded(false) : scrollToTop}
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
              className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUp className="h-6 w-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;