import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

interface MatchModalProps {
  matchedProfile: {
    name: string;
    photo: string;
  };
  onClose: () => void;
}

export function MatchModal({ matchedProfile, onClose }: MatchModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-pink-500" fill="currentColor" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">It's a Match!</h2>
          <p className="text-gray-600">You and {matchedProfile.name} liked each other</p>
          
          <div className="relative w-24 h-24 mx-auto">
            <img
              src={matchedProfile.photo}
              alt={matchedProfile.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="space-y-3 pt-4">
            <button className="w-full py-3 px-4 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Send a Message
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Keep Swiping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}