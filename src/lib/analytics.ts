import { PUBLIC_UMAMI_WEBSITE_ID } from 'astro:env/client';

/** Umami Cloud website ID, or undefined when analytics is off for this build. */
export const umamiWebsiteId = PUBLIC_UMAMI_WEBSITE_ID;

/**
 * Names of the events sent to Umami. They are the keys of the dashboards:
 * renaming one splits its history in two.
 */
export const analyticsEvents = {
  bookCall: 'book-call',
  downloadCv: 'download-cv',
  contactFormSent: 'contact-form-sent',
} as const;

type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string>) => void;
    };
  }
}

/** Sends an event from code. Does nothing when the Umami script is not loaded. */
export function trackEvent(
  event: AnalyticsEvent,
  data?: Record<string, string>
) {
  window.umami?.track(event, data);
}
