import { z } from 'zod';
import type { defaultLanguage, ui } from '@/i18n/ui';

/**
 * Every string of the contact page, keyed like the French copy: passing
 * `ui[lang].contactPage` fails to compile when a language misses a key.
 */
export type ContactPageCopy = Record<
  keyof (typeof ui)[typeof defaultLanguage]['contactPage'],
  string
>;

/** Strings the message form reads. */
export type ContactFormTranslations = Pick<
  ContactPageCopy,
  | 'firstNameLabel'
  | 'lastNameLabel'
  | 'emailLabel'
  | 'companyLabel'
  | 'messageLabel'
  | 'firstNamePlaceholder'
  | 'lastNamePlaceholder'
  | 'emailPlaceholder'
  | 'companyPlaceholder'
  | 'messagePlaceholder'
  | 'sendButtonLabel'
  | 'toastSuccessMessageSent'
  | 'toastErrorFailedToSend'
  | 'toastErrorUnexpected'
  | 'toastErrorDetails'
>;

const stringFieldSchema = (minLength = 2, maxLength = 50) =>
  z
    .string()
    .nonempty() // Handles 'required' aspect
    .min(minLength) // Min length
    .max(maxLength); // Max length

export const contactFormSchema = z.object({
  firstName: stringFieldSchema(),
  lastName: stringFieldSchema(),
  email: z.email(),
  company: z.string().max(100).optional(),
  message: stringFieldSchema(10, 500),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormApiResponse =
  | {
      status: 'success';
      message: string;
      data?: unknown; // Resend data on success
    }
  | {
      status: 'error';
      message: string;
      // For Zod validation errors
      errors?: Record<string, Array<string> | undefined>;
      // For other errors (Resend, unexpected)
      error?: string;
    };
