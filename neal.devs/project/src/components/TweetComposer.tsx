import React, { useState } from 'react';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';

export function TweetComposer() {
  const [tweet, setTweet] = useState('');

  return (
    <div className="border-b border-gray-100 p-4">
      <div className="flex space-x-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="What's happening?"
            className="w-full resize-none border-none focus:ring-0 text-xl placeholder-gray-500"
            rows={3}
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4 text-blue-500">
              <button className="hover:bg-blue-50 p-2 rounded-full transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
            </div>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors disabled:opacity-50"
              disabled={!tweet.trim()}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}