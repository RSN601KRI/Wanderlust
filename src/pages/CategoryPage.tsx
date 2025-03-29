import React from 'react';
import { useParams } from 'react-router-dom';
import ListingCard from '../components/ListingCard';

const categoryListings = {
  houses: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Villa with Ocean View',
      location: 'Malibu, California',
      price: 550,
      rating: 4.95,
      dates: 'Mar 15-20'
    },
    // Add more houses...
  ],
  apartments: [
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Downtown Apartment',
      location: 'New York, NY',
      price: 320,
      rating: 4.89,
      dates: 'Mar 18-23'
    },
    // Add more apartments...
  ],
  camping: [
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Glamping Experience',
      location: 'Yellowstone, WY',
      price: 150,
      rating: 4.92,
      dates: 'Apr 1-6'
    },
    // Add more camping spots...
  ],
  beach: [
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Beachfront Paradise',
      location: 'Miami Beach, FL',
      price: 420,
      rating: 4.87,
      dates: 'Mar 25-30'
    },
    // Add more beach properties...
  ],
  mountain: [
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mountain Retreat',
      location: 'Aspen, CO',
      price: 375,
      rating: 4.96,
      dates: 'Apr 5-10'
    },
    // Add more mountain properties...
  ],
  unique: [
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Treehouse Adventure',
      location: 'Portland, OR',
      price: 250,
      rating: 4.91,
      dates: 'Apr 8-13'
    },
    // Add more unique stays...
  ],
};

export default function CategoryPage() {
  const { category } = useParams<{ category: keyof typeof categoryListings }>();
  const listings = category ? categoryListings[category] : [];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">
          {category?.replace('-', ' ')} Stays
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </div>
  );
}