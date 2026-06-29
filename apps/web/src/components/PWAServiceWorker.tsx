'use client';

import { useEffect } from 'react';

export const SERVICE_WORKER_PATH = '/sw.js';

export function canRegisterServiceWorker(
  environment = process.env.NODE_ENV,
  serviceWorkerContainer = typeof navigator === 'undefined' ? undefined : navigator.serviceWorker,
) {
  return environment === 'production' && Boolean(serviceWorkerContainer);
}

export function PWAServiceWorker() {
  useEffect(() => {
    if (!canRegisterServiceWorker()) {
      return;
    }

    const registerServiceWorker = () => {
      void navigator.serviceWorker.register(SERVICE_WORKER_PATH, { scope: '/' });
    };

    if (document.readyState === 'complete') {
      registerServiceWorker();
      return;
    }

    window.addEventListener('load', registerServiceWorker, { once: true });

    return () => {
      window.removeEventListener('load', registerServiceWorker);
    };
  }, []);

  return null;
}
