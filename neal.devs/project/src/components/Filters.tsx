import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FiltersProps {
  onClose: () => void;
}

export function Filters({ onClose }: FiltersProps) {
  const [ageRange, setAgeRange] = useState([25, 35]);
  const [distance, setDistance] = useState(25);
  const [interests, setInterests] = useState<string[]>([]);

  const availableInterests = [
    'Art', 'Music', 'Sports', 'Travel', 'Food', 'Movies',
    'Reading', 'Gaming', 'Fitness', 'Photography', 'Dancing',
    'Cooking', 'Nature', 'Tech', 'Fashion', 'Pets'
  ];

  const toggleInterest = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center p-4 z-50">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl max-w-lg w-full p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age Range: {ageRange[0]} - {ageRange[1]}
            </label>
            <div className="flex gap-4">
              <input
                type="range"
                min="18"
                max="50"
                value={ageRange[0]}
                onChange={(e) => setAgeRange([+e.target.value, ageRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="18"
                max="50"
                value={ageRange[1]}
                onChange={(e) => setAgeRange([ageRange[0], +e.target.value])}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Distance: {distance} miles
            </label>
            <input
              type="range"
              min="5"
              max="100"
              value={distance}
              onChange={(e) => setDistance(+e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interests
            </label>
            <div className="flex flex-wrap gap-2">
              {availableInterests.map(interest => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    interests.includes(interest)
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
          >
            Apply Filters
          </button>
          <button
            onClick={() => {
              setAgeRange([25, 35]);
              setDistance(25);
              setInterests([]);
            }}
            className="py-3 px-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}