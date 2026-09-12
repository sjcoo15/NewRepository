'use client';
import { useEffect } from 'react';

export default function PwaRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(registration => registration.update())
        .catch(() => {});
    }
  }, []);
  return null;
}
