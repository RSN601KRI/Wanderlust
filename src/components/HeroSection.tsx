import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Map, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=2070&q=80"
          alt="Hero background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Explore unique stays and experiences around the world with Wanderlust
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
            >
              <Compass className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Unique Destinations</h3>
              <p className="text-gray-200">Discover hidden gems and extraordinary places to stay</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
            >
              <Map className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Local Experiences</h3>
              <p className="text-gray-200">Immerse yourself in authentic local culture</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
            >
              <Heart className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Curated Stays</h3>
              <p className="text-gray-200">Hand-picked accommodations for unforgettable experiences</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}