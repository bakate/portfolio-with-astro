import { z, ZodParsedType } from 'zod';
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
        message = message.replace(new RegExp(`\\(s:${paramKey}\\)`, 'g'), suffix);
        
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

const customErrorMap =
  (lang: LanguageCode): z.ZodErrorMap =>
  (issue, ctx) => {
    let message: string;

    switch (issue.code) {
      case z.ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = getErrorMessage(lang, 'invalid_type_received_undefined');
        } else {
          message = getErrorMessage(lang, 'invalid_type', {
            received: String(issue.received),
          });
        }
        break;
      case z.ZodIssueCode.invalid_string:
        if (issue.validation === 'email') {
          message = getErrorMessage(lang, 'invalid_string_email');
        } else if (issue.validation === 'url') {
          message = getErrorMessage(lang, 'invalid_string_url');
        } else if (issue.validation === 'uuid') {
          message = getErrorMessage(lang, 'invalid_string_uuid');
        } else {
          // Generic invalid string if no specific validation message is found
          message = ctx.defaultError;
        }
        break;
      case z.ZodIssueCode.too_small: {
        const fieldPath = issue.path.length > 0 ? String(issue.path[issue.path.length - 1]) : 'champ';
        const fieldNameKey = fieldPath !== 'champ' ? `${fieldPath}Label` as keyof (typeof ui)[LanguageCode]['contactPage'] : undefined;
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
            // `.nonempty()` or `.min(1)` translates to a "required" error
            message = getErrorMessage(lang, 'required_field_custom', {
              fieldName,
            });
          } else {
            message = getErrorMessage(lang, 'too_small_string_minimum', {
              minimum: String(issue.minimum),
              fieldName,
            });
          }
        } else {
          message = ctx.defaultError;
        }
        break;
      }
      case z.ZodIssueCode.too_big:
        if (issue.type === 'string') {
          message = getErrorMessage(lang, 'too_big_string_maximum', {
            maximum: String(issue.maximum),
          });
        } else {
          // Handle other types if necessary
          message = ctx.defaultError;
        }
        break;
      default:
        // For any other issue code, fallback to Zod's default error message
        message = ctx.defaultError;
    }

    return { message };
  };

export const setGlobalZodErrorMap = (lang: LanguageCode) => {
  z.setErrorMap(customErrorMap(lang));
};
