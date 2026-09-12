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
      <body>
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
