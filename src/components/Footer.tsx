import React from 'react';
import { Globe, Copyright } from 'lucide-react';

const footerLinks = [
  { text: 'Privacy', href: '#' },
  { text: 'Terms', href: '#' },
  { text: 'Support', href: '#' },
  { text: 'About', href: '#' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-100/50 dark:bg-dark-bg/50 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Copyright className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">2024 Wanderlust, Inc.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {footerLinks.map(link => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <button className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
              <Globe className="h-4 w-4 mr-2" />
              English (US)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}