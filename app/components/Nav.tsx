import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 bg-slate-800 text-slate-100">
      <h1 className="font-bold text-2xl ">React+Typescript+Next.js</h1>
      <div className="flex items-center justify-center space-x-5">
        <Link className="btn px-6 btn-primary" href="/">
          Home
        </Link>
        <Link className="btn px-6 btn-primary" href="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Nav;
