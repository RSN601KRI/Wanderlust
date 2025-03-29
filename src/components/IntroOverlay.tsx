import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function IntroOverlay() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-4"
        >
          <Compass className="h-16 w-16 text-primary" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Wanderlust
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-gray-300 text-xl"
        >
          Your journey to extraordinary places
        </motion.p>
      </div>
    </motion.div>
  );
}