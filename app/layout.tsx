import Link from 'next/link';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './globals.css';

export const metadata = {
  title: 'Home',
  description: 'Home, Sweet Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <section className="flex flex-col min-h-screen justify-between">
          <Nav />
          <main className=" text-slate-800  ">
            <div className="grid grid-cols-4 min-h-[76.1vh]">
              <aside className=" col-span-1 bg-slate-700 text-slate-100 flex flex-col items-start p-3 space-y-3 ">
                <Link className="btn btn-sm btn-secondary btn-block  " href="/">
                  Data Fetching
                </Link>
                <Link
                  className="btn btn-sm btn-secondary  btn-block "
                  href="/search-app"
                >
                  Search App
                </Link>
                <Link
                  className="btn btn-sm btn-secondary  btn-block "
                  href="/blog-app"
                >
                  Blog App
                </Link>
              </aside>
              <div className="col-span-3 p-2">{children}</div>
            </div>
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
