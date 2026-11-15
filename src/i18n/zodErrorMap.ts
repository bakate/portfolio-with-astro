import { z } from 'zod';
import { ui, type LanguageCode, defaultLanguage } from './ui';

// Helper to get translations safely, falling back to default language or a generic message
function getErrorMessage(
  lang: LanguageCode,
  key: keyof (typeof ui)[LanguageCode]['zodErrors'],
  params?: Record<string, string | number>
): string {
  let message: string =
    ui[lang]?.zodErrors?.[key] || ui[defaultLanguage]?.zodErrors?.[key] || ''; // Initialize with empty string if key not found

  if (!message) {
    // Check if message is still empty after primary lookups
    // Fallback for truly missing keys, though ideally all keys used should exist
    switch (key) {
      case 'invalid_type_received_undefined':
        message = 'This field is required.';
        break;
      case 'invalid_string_email':
        message = 'Invalid email.';
        break;
      case 'too_small_string_minimum':
        message = 'Too short.';
        break;
      case 'too_big_string_maximum':
        message = 'Too long.';
        break;
      default:
        message = 'Invalid input.';
    }
  }

  if (params) {
    Object.keys(params).forEach((paramKey) => {
      const val = params[paramKey];
      message = message.replace(`{${paramKey}}`, String(val));

      // Simple pluralization handling for "(s:paramName)" or deprecated global "(s)"
      if (typeof val === 'number' || !isNaN(Number(val))) {
        const num = Number(val);
        const suffix = num <= 1 ? '' : 's';

        // Parameter-scoped marker replacement
        message = message.replace(
          new RegExp(`\\(s:${paramKey}\\)`, 'g'),
          suffix
        );

        // Deprecated global marker replacement
        if (message.includes('(s)')) {
          message = message.replace(/\(s\)/g, suffix);
        }
      }
    });
  }

  // handle elision in French (ex: "Le email" -> "L'email", "la adresse" -> "l'adresse")
  if (lang === 'fr') {
    message = message.replace(/\b([Ll])[ea] ([aeiouyéèêàâîïôû])/gi, "$1'$2");
  }

  return message;
}

// ...getErrorMessage inchangée...

const customErrorMap =
  (lang: LanguageCode): z.core.$ZodErrorMap =>
  (issue) => {
    switch (issue.code) {
      case 'invalid_type':
        if (issue.received === 'undefined') {
          return getErrorMessage(lang, 'invalid_type_received_undefined');
        }
        return getErrorMessage(lang, 'invalid_type', {
          received: String(issue.received),
        });

      case 'invalid_format':
        if (issue.format === 'email') {
          return getErrorMessage(lang, 'invalid_string_email');
        }
        if (issue.format === 'url') {
          return getErrorMessage(lang, 'invalid_string_url');
        }
        if (issue.format === 'uuid') {
          return getErrorMessage(lang, 'invalid_string_uuid');
        }
        return undefined;

      case 'too_small': {
        const path = issue.path ?? [];
        const fieldPath =
          path.length > 0 ? String(path[path.length - 1]) : 'champ';
        const fieldNameKey =
          fieldPath !== 'champ'
            ? (`${fieldPath}Label` as keyof (typeof ui)[LanguageCode]['contactPage'])
            : undefined;
        let rawFieldName = fieldPath;

        if (fieldNameKey) {
          rawFieldName =
            ui[lang]?.contactPage?.[fieldNameKey] ||
            ui[defaultLanguage]?.contactPage?.[fieldNameKey] ||
            fieldPath;
        }
        const fieldName = String(rawFieldName).toLowerCase();

        if (issue.type === 'string') {
          if (issue.minimum === 1 && issue.exact === false) {
            return getErrorMessage(lang, 'required_field_custom', {
              fieldName,
            });
          }
          return getErrorMessage(lang, 'too_small_string_minimum', {
            minimum: String(issue.minimum),
            fieldName,
          });
        }
        return undefined;
      }

      case 'too_big':
        if (issue.type === 'string') {
          return getErrorMessage(lang, 'too_big_string_maximum', {
            maximum: String(issue.maximum),
          });
        }
        return undefined;

      default:
        return undefined;
    }
  };

export const setGlobalZodErrorMap = (lang: LanguageCode) => {
  z.setErrorMap(customErrorMap(lang));
};
