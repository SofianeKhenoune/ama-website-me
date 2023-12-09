import { lusitana } from '@/app/ui/fonts';
import type { Metadata } from 'next';
import './globals.css';
import SideNav from './ui/sidenav';

export const metadata: Metadata = {
  title: "Association des Musulmans d'Aubervilliers ",
  description:
    "Site de l'Association des Musulmans d'Aubervilliers, venez découvrir nos activités",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <head>
        <link
          rel='shortcut icon'
          href='/images/favicon.png'
          type='image/x-icon'
        />
      </head>
      <body className={`${lusitana.className} bg-primary`}>
        {' '}
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
          <div className='w-full flex-none md:w-64'>
            <SideNav />
          </div>
          <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
