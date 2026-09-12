import './globals.css';
import PwaRegister from './pwa-register';

export const metadata = {
  title: 'Core Trainer',
  description: 'Simple guided abs and core workouts with picture instructions.',
  manifest: '/manifest.webmanifest',
  themeColor: '#111827',
  appleWebApp: { capable: true, title: 'Core Trainer', statusBarStyle: 'black-translucent' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#111827" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
