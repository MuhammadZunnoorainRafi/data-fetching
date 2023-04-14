import { Inter } from 'next/font/google';

import Link from 'next/link';
import { getAllUsers } from '../lib/getAllUsers';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const user: user[] = await getAllUsers();
  // const user = await userAll;

  return (
    <div>
      <h1 className="font-bold text-3xl tracking-wider underline underline-offset-4 mb-2">
        Data Fetching
      </h1>

      {user.map((val) => {
        return (
          <div key={val.id} className=" space-y-1">
            <Link
              href={`/users/${val.id}`}
              className="font-semibold hover:text-blue-700 text-slate-800"
            >
              {val.id}. {val.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function generateStaticParams() {
  const userArr: user[] = await getAllUsers();
  return userArr.map((val) => ({ id: val.id.toString() }));
}
