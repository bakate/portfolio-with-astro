import { z } from 'zod';
import { ui, type LanguageCode, defaultLanguage } from './ui';

type ZodErrorKey = keyof (typeof ui)[typeof defaultLanguage]['zodErrors'];
type ContactKey = keyof (typeof ui)[typeof defaultLanguage]['contactPage'];

/** Translated message for `key`, with `{param}` and `(s:param)` filled in. */
function getErrorMessage(
  lang: LanguageCode,
  key: ZodErrorKey,
  params: Record<string, string | number> = {}
): string {
  let message: string =
    ui[lang].zodErrors[key] ?? ui[defaultLanguage].zodErrors[key];

  for (const [name, value] of Object.entries(params)) {
    message = message.replaceAll(`{${name}}`, String(value));
    if (typeof value === 'number') {
      message = message.replaceAll(`(s:${name})`, value <= 1 ? '' : 's');
    }
  }

  // French elision: "Le email" -> "L'email".
  if (lang === 'fr') {
    message = message.replace(/\b([Ll])[ea] ([aeiouyéèêàâîïôû])/gi, "$1'$2");
  }

  return message;
}

/** The field's visible label, lower-cased to sit inside a sentence. */
function fieldNameOf(lang: LanguageCode, path: ReadonlyArray<PropertyKey>) {
  const field = String(path.at(-1) ?? '');
  const key = `${field}Label` as ContactKey;
  const label: string =
    ui[lang].contactPage[key] ?? ui[defaultLanguage].contactPage[key] ?? field;
  return label.toLowerCase();
}

/**
 * Zod 4 issue shapes: `origin` (not `type`), `input` (not `received`). An
 * unhandled issue returns undefined and falls back to Zod's own English text.
 */
const customErrorMap =
  (lang: LanguageCode): z.core.$ZodErrorMap =>
  (issue) => {
    switch (issue.code) {
      case 'invalid_type':
        return issue.input === undefined
          ? getErrorMessage(lang, 'invalid_type_received_undefined')
          : getErrorMessage(lang, 'invalid_type');

      case 'invalid_format': {
        const keyByFormat: Partial<Record<string, ZodErrorKey>> = {
          email: 'invalid_string_email',
          url: 'invalid_string_url',
          uuid: 'invalid_string_uuid',
        };
        const key = keyByFormat[issue.format];
        return key && getErrorMessage(lang, key);
      }

      case 'too_small': {
        if (issue.origin !== 'string') return undefined;
        const fieldName = fieldNameOf(lang, issue.path ?? []);
        const minimum = Number(issue.minimum);
        return minimum <= 1
          ? getErrorMessage(lang, 'required_field_custom', { fieldName })
          : getErrorMessage(lang, 'too_small_string_minimum', {
              fieldName,
              minimum,
            });
      }

      case 'too_big':
        return issue.origin === 'string'
          ? getErrorMessage(lang, 'too_big_string_maximum', {
              maximum: Number(issue.maximum),
            })
          : undefined;

      default:
        return undefined;
    }
  };

export const setGlobalZodErrorMap = (lang: LanguageCode) => {
  z.config({ customError: customErrorMap(lang) });
};
