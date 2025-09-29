import Link from 'next/link';
import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className="text-3xl">User Profile: {params.id}</h1>
      <Link href="/dashboard/users">Back to Dashboard</Link>
    </div>
  );
};

export default Page;
