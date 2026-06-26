import { z } from 'zod';

export type ContactFormTranslations = {
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  companyLabel: string;
  messageLabel: string;
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  emailPlaceholder: string;
  companyPlaceholder: string;
  messagePlaceholder: string;
  sendButtonLabel: string;
  toastSuccessMessageSent: string;
  toastErrorFailedToSend: string;
  toastErrorUnexpected: string;
  toastErrorDetails: string;
  toastErrorValidationFailed: string;
  badgeResponseTime: string;
  writeToMeHeader: string;
  letstalkHeader: string;
  socialLinksTitle: string;
  consultingValueProp: string;
  contactName: string;
  linkedInLabel: string;
  professionalNetworkLabel: string;
  githubLabel: string;
  openSourceLabel: string;
};

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
