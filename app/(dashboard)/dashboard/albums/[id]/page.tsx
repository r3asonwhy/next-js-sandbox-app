import Link from 'next/link';
import React from 'react';

export type Album = {
  userId: number;
  id: number;
  title: string;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`);
  if (!response.ok) throw new Error(`Item with ID ${params.id} is not found!`);

  const album: Album = await response.json();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Album Detail: {params.id}
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-sm font-medium text-gray-600">Album ID:</span>
            <span className="text-gray-900">{album.id}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-sm font-medium text-gray-600">Title:</span>
            <span className="text-gray-900 capitalize">{album.title}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-sm font-medium text-gray-600">User ID:</span>
            <span className="text-gray-900">{album.userId}</span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/dashboard/albums"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
