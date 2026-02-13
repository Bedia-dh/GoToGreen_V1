'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'gtg_cookie_consent';
const COOKIE_PREFS_KEY = 'gtg_cookie_preferences';

function getCookieConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true';
}

function saveCookiePreferences(prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
  localStorage.setItem(COOKIE_PREFS_KEY, JSON.stringify(prefs));
  window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: prefs }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsented = getCookieConsent();
    if (!hasConsented) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    saveCookiePreferences({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    saveCookiePreferences({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.header}>
        <span className={styles.cookieIcon}>🍪</span>
        <h3>Cookie Preferences</h3>
      </div>

      <p className={styles.description}>
        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
        For details, see our{' '}
        <Link href="/legal/privacy">Privacy Policy</Link>.
      </p>

      <div className={styles.actions}>
        <button className={styles.btnAcceptAll} onClick={handleAcceptAll}>
          Accept All
        </button>
        <button className={styles.btnReject} onClick={handleRejectAll}>
          Reject All
        </button>
      </div>
    </div>
  );
}
