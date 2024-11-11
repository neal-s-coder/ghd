import React from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface TweetProps {
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  avatar: string;
}

export function Tweet({ username, handle, content, timestamp, likes, retweets, replies, avatar }: TweetProps) {
  return (
    <div className="border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex space-x-3">
        <img src={avatar} alt={username} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold">{username}</h2>
            <span className="text-gray-500">@{handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{timestamp}</span>
          </div>
          <p className="mt-2 text-gray-900">{content}</p>
          <div className="flex justify-between mt-4 max-w-md text-gray-500">
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{replies}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
              <Repeat2 className="w-5 h-5" />
              <span>{retweets}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}