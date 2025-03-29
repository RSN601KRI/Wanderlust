import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import IntroOverlay from './components/IntroOverlay';
import CategoryPage from './pages/CategoryPage';
import HeroSection from './components/HeroSection';

const listings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Modern Villa with Ocean View',
    location: 'Malibu, California',
    price: 550,
    rating: 4.95,
    dates: 'Mar 15-20'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 320,
    rating: 4.89,
    dates: 'Mar 18-23'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Luxury Beachfront Apartment',
    location: 'Miami Beach, Florida',
    price: 420,
    rating: 4.92,
    dates: 'Apr 1-6'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Downtown Loft',
    location: 'New York City, New York',
    price: 280,
    rating: 4.87,
    dates: 'Mar 25-30'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Rustic Farmhouse',
    location: 'Nashville, Tennessee',
    price: 195,
    rating: 4.96,
    dates: 'Apr 5-10'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Desert Oasis Villa',
    location: 'Scottsdale, Arizona',
    price: 375,
    rating: 4.91,
    dates: 'Apr 8-13'
  },
];

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'register' }>({
    isOpen: false,
    type: 'login'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200">
          {showIntro && <IntroOverlay />}
          <Navbar onAuthClick={(type) => setAuthModal({ isOpen: true, type })} />
          <AuthModal
            isOpen={authModal.isOpen}
            type={authModal.type}
            onClose={() => setAuthModal({ ...authModal, isOpen: false })}
          />
          
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <HeroSection />
                  <div className="pt-8">
                    <Filters />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <h2 className="text-2xl font-bold mb-6">Featured Stays</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {listings.map((listing) => (
                          <ListingCard key={listing.id} {...listing} />
                        ))}
                      </div>
                    </div>
                  </div>
                </main>
              }
            />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;