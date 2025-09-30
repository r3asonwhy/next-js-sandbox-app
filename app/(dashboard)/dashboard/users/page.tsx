import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h1 className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
        Dashboard Users
      </h1>

      <ul className="mt-10">
        <li className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
