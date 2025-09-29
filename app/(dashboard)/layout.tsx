import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg p-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex space-x-6">
            <Link
              href="/dashboard/albums"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Albums
            </Link>
            <Link
              href="/dashboard/users"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Users
            </Link>
            <Link
              href="/dashboard/analytics"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Analytics
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;
