// 'use client';
import PostScreen from '@/app/components/PostScreen';
import { getAllUsers } from '@/app/lib/getAllUsers';

import getOneUser from '@/app/lib/getOneUser';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
// export const dynamicParams = false;

type Params = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const user: user = await getOneUser(params.id);
  return {
    title: `${user.name}`,
    description: `${user.name} is a User`,
  };
};

async function GetOneUser({ params }: Params) {
  // const OneUser: Promise<user> = getOneUser(params.id);
  const user: user = await getOneUser(params.id);
  if (!user.name) {
    return notFound();
  }
  return (
    <div>
      <Link href="/users" className="btn ">
        Back
      </Link>
      <div className="space-y-1 mt-2 mb-2 bg-slate-100 p-3 rounded-md max-w-2xl mx-auto shadow-xl border border-slate-200">
        <h1 className="font-bold text-3xl">
          {user.id}. {user.name}
        </h1>
        <p>Full Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>

        <p>Company: {user.company.name}</p>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <PostScreen id={params.id} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const userArr: user[] = await getAllUsers();
  return userArr.map((val) => ({ id: val.id.toString() }));
}

export default GetOneUser;
