import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Liam T Car Rental Website',
  description: 'Car Rental Website created with Next.js',
};

import { SearchContextProvider } from './context/search';

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
