import React from 'react';
import { Search } from 'lucide-react';

export function Trending() {
  const trends = [
    { category: 'Technology', title: '#ReactJS', tweets: '25.5K' },
    { category: 'Sports', title: 'Champions League', tweets: '120.2K' },
    { category: 'Entertainment', title: '#NewMovie', tweets: '45.1K' },
    { category: 'Politics', title: '#Elections2024', tweets: '85.3K' },
  ];

  const suggestions = [
    { name: 'Tech News', handle: 'technews', avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80' },
    { name: 'Web Dev', handle: 'webdev', avatar: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80' },
  ];

  return (
    <div className="w-80 p-4 space-y-4">
      <div className="sticky top-0 bg-white pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Trends for you</h2>
        {trends.map((trend) => (
          <div key={trend.title} className="py-3 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="text-sm text-gray-500">{trend.category}</div>
            <div className="font-bold">{trend.title}</div>
            <div className="text-sm text-gray-500">{trend.tweets} Tweets</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Who to follow</h2>
        {suggestions.map((suggestion) => (
          <div key={suggestion.handle} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <img src={suggestion.avatar} alt={suggestion.name} className="w-12 h-12 rounded-full" />
              <div>
                <div className="font-bold">{suggestion.name}</div>
                <div className="text-gray-500">@{suggestion.handle}</div>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-bold hover:bg-gray-800 transition-colors">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}