import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 mx-auto mb-4 border-4 border-t-transparent rounded-full" style={{borderColor: '#D4AF37', borderTopColor: 'transparent'}}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-serif text-white"
        >
          Quality Building
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-2"
        >
          Budujemy dla Ciebie stronę...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;