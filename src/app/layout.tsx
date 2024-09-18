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
        <header className='w-screen bg-white flex items-center justify-between px-8 h-16'>
          <Link href='/'>
            <h1 className='2xl font-bold transition-colors hover:accent'>Lidia</h1>
          </Link>

          <nav className='flex items-center justify-around h-full w-fit'>
            <Link
              href='/stories'
              className='font-bold uppercase text-xs transition-colors text-accent hover:accent'
            >stories</Link>
          </nav>
        </header>

        <main className='w-screen flex flex-col'>
          {children}
        </main>
      </body>
    </html>
  );
}
