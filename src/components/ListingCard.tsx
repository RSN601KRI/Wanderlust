import React from 'react';
import { Star } from 'lucide-react';

interface ListingCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  dates: string;
}

export default function ListingCard({ image, title, location, price, rating, dates }: ListingCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square w-full relative overflow-hidden rounded-xl">
        <img
          className="object-cover h-full w-full group-hover:scale-105 transition"
          src={image}
          alt={title}
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{location}</h3>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-sm text-gray-500">{dates}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="mt-2">
          <span className="font-semibold">${price}</span> night
        </p>
      </div>
    </div>
  );
}