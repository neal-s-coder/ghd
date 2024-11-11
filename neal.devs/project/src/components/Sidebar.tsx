import React from 'react';
import { Home, Search, Bell, Mail, Bookmark, User, Settings, MoreHorizontal } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed h-screen w-64 border-r border-gray-100 p-4">
      <div className="flex flex-col h-full">
        <div className="p-2 mb-4">
          <MoreHorizontal className="w-8 h-8 text-blue-500" />
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center space-x-4 p-3 rounded-full w-full hover:bg-gray-100 transition-colors ${
                item.active ? 'font-bold' : ''
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <button className="bg-blue-500 text-white rounded-full py-3 px-8 font-bold mt-4 hover:bg-blue-600 transition-colors">
          Tweet
        </button>
        <div className="mt-auto">
          <button className="flex items-center space-x-3 p-3 rounded-full w-full hover:bg-gray-100 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
              <div className="font-bold">Neal Doe</div>
              <div className="text-gray-500">@nealdoe</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}