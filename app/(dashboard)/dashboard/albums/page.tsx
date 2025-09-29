import React from 'react';
import { Album } from './[id]/page';
import Link from 'next/link';

const Page = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!response.ok) throw new Error('Failed to fetch albums!');

  const albums: Album[] = await response.json();

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3 capitalize line-clamp-2">
              {album.title}
            </h3>
            <p className="text-sm text-gray-500">Album ID: {album.id}</p>
            <p className="text-sm text-gray-400">User ID: {album.userId}</p>
            <div className="mt-4">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                <Link href={`/dashboard/albums/${album.id}`}>Link View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
