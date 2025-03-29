import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Tent, Palmtree, Mountain, Warehouse } from 'lucide-react';

const filters = [
  { name: 'Houses', icon: Home, path: 'houses' },
  { name: 'Apartments', icon: Building2, path: 'apartments' },
  { name: 'Camping', icon: Tent, path: 'camping' },
  { name: 'Beach', icon: Palmtree, path: 'beach' },
  { name: 'Mountain', icon: Mountain, path: 'mountain' },
  { name: 'Unique stays', icon: Warehouse, path: 'unique' },
];

export default function Filters() {
  return (
    <div className="border-b sticky top-16 bg-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-4 overflow-x-auto">
          {filters.map((filter) => (
            <Link
              key={filter.name}
              to={`/category/${filter.path}`}
              className="flex flex-col items-center min-w-fit gap-2 text-gray-500 hover:text-gray-800 transition-colors duration-200"
            >
              <filter.icon className="h-6 w-6" />
              <span className="text-xs">{filter.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}