// js/accounts/config.js
import { createAuthClient } from 'https://esm.sh/better-auth/client';

const getBaseURL = () => {
    const local = localStorage.getItem('wormhole-auth-url');
    if (local) return local;

    if (window.__AUTH_URL__) return window.__AUTH_URL__;

    const hostname = window.location.hostname;
    if (hostname.endsWith('w0rmh0le-web.vercel.app') || hostname === 'w0rmh0le-web.vercel.app') {
        return 'https://auth.w0rmh0le-web.vercel.app';
    }
    return 'https://auth.samidy.com';
};

export const AUTH_BASE_URL = getBaseURL();

export const authClient = createAuthClient({
    baseURL: AUTH_BASE_URL,
});

export { authClient as auth };
