import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Lidia Hu',
  description: 'Stories by Lidia',
  keywords: ['Story', 'Writing', 'Book'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className='flex items-center justify-between h-16 w-screen max-w-[800px] mx-auto px-3'>
          <Link href='/'>
            <h1 className='2xl font-bold transition-colors hover:accent'>Lidia</h1>
          </Link>

          <nav className='flex items-center justify-around h-full w-fit'>
            <Link
              href='/stories'
              className='px-3 font-bold uppercase text-xs transition-colors text-accent hover:accent'
            >stories</Link>

            <Link
              href='/poems'
              className='px-3 font-bold uppercase text-xs transition-colors text-accent hover:accent'
            >poems</Link>

            <Link
              href='/bio'
              className='px-3 font-bold uppercase text-xs transition-colors text-accent hover:accent'
            >bio</Link>
          </nav>
        </header>

        <main className='flex flex-col w-screen max-w-[800px] mx-auto px-3'>
          {children}
        </main>

        <footer className='flex items-center justify-between w-screen max-w-[800px] mx-auto px-3 pb-3 pt-5'>
          <span>
          </span>

          <p>@ 2024 Lidia Hu - all rights reserved</p>
        </footer>
      </body>
    </html >
  );
}
