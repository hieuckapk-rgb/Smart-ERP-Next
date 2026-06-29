/**
 * @jest-environment jsdom
 */

import { cleanup, render, waitFor } from '@testing-library/react';
import { PWAServiceWorker, SERVICE_WORKER_PATH, canRegisterServiceWorker } from './PWAServiceWorker';

describe('PWAServiceWorker', () => {
  const originalNodeEnv = process.env.NODE_ENV;
  const originalServiceWorker = navigator.serviceWorker;
  const originalReadyState = document.readyState;

  afterEach(() => {
    cleanup();
    Object.defineProperty(process.env, 'NODE_ENV', { configurable: true, value: originalNodeEnv });
    Object.defineProperty(navigator, 'serviceWorker', { configurable: true, value: originalServiceWorker });
    Object.defineProperty(document, 'readyState', { configurable: true, value: originalReadyState });
    jest.restoreAllMocks();
  });

  it('allows service worker registration only in production with browser support', () => {
    expect(canRegisterServiceWorker('production', { register: jest.fn() } as any)).toBe(true);
    expect(canRegisterServiceWorker('development', { register: jest.fn() } as any)).toBe(false);
    expect(canRegisterServiceWorker('production', undefined)).toBe(false);
  });

  it('registers the service worker after the page has loaded in production', async () => {
    const register = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(process.env, 'NODE_ENV', { configurable: true, value: 'production' });
    Object.defineProperty(navigator, 'serviceWorker', { configurable: true, value: { register } });
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'complete' });

    render(<PWAServiceWorker />);

    await waitFor(() => {
      expect(register).toHaveBeenCalledWith(SERVICE_WORKER_PATH, { scope: '/' });
    });
  });

  it('does not register the service worker outside production', () => {
    const register = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(process.env, 'NODE_ENV', { configurable: true, value: 'test' });
    Object.defineProperty(navigator, 'serviceWorker', { configurable: true, value: { register } });
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'complete' });

    render(<PWAServiceWorker />);

    expect(register).not.toHaveBeenCalled();
  });
});
