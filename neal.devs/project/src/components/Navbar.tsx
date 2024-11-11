import React from 'react';
import { Home, Heart, MessageCircle, User, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 sm:top-0 sm:bottom-auto">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <button className="flex flex-col items-center text-pink-600">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1 hidden sm:block">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-pink-600 transition">
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1 hidden sm:block">Likes</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-pink-600 transition">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs mt-1 hidden sm:block">Messages</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-pink-600 transition">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1 hidden sm:block">Profile</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-pink-600 transition">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1 hidden sm:block">Settings</span>
        </button>
      </div>
    </nav>
  );
}