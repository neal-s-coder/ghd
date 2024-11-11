import React from 'react';
import { Heart, X, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % profile.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md w-full">
      <div className="relative h-[32rem]">
        <img
          src={profile.photos[currentPhotoIndex]}
          alt={`${profile.name}'s photo`}
          className="w-full h-full object-cover"
        />
        
        {/* Photo Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevPhoto}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPhoto}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Photo Indicators */}
        <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
          {profile.photos.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all ${
                index === currentPhotoIndex ? 'w-6 bg-white' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h2 className="text-white text-2xl font-bold">
            {profile.name}, {profile.age}
          </h2>
          <p className="text-white/90">{profile.occupation}</p>
          <p className="text-white/80 text-sm">{profile.location}</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex gap-2 flex-wrap">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-600">{profile.prompt1.question}</p>
            <p className="mt-1">{profile.prompt1.answer}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-600">{profile.prompt2.question}</p>
            <p className="mt-1">{profile.prompt2.answer}</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <button className="p-4 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition">
            <X className="w-8 h-8" />
          </button>
          <button className="p-4 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
            <MessageCircle className="w-8 h-8" />
          </button>
          <button className="p-4 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition">
            <Heart className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}