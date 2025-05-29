import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'font-awesome/css/font-awesome.min.css';
// import { Providers } from './providers';
import { Toaster } from 'sonner';
// import Navbar from '@/components/Navbar';
import Footer from '@/components/shared/Footer/footer';
import Navbar from '@/components/sections/Navbar/NavbarV2';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Dealer site',
  description: 'Dealership sites',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        <title>Dealership site</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Toaster position="top-right" />
        {/* <Providers> */}
        <Navbar />
        {children}
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
