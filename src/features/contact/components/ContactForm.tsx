import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  type ContactFormValues,
  type ContactFormTranslations,
  contactFormSchema,
  type ContactFormApiResponse,
} from '../type';
import { setGlobalZodErrorMap } from '@/i18n/zodErrorMap';
import type { LanguageCode } from '@/i18n/ui';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormProps {
  lang: LanguageCode;
  formTranslations: ContactFormTranslations;
  onSubmitSuccess?: () => void; // Optional callback for successful submission
}

export function ContactForm({
  lang,
  formTranslations,
  onSubmitSuccess,
}: ContactFormProps) {
  useEffect(() => {
    setGlobalZodErrorMap(lang);
  }, [lang]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    // A field is checked when the visitor leaves it, then live while they
    // correct it.
    mode: 'onTouched',
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, lang }),
      });

      const result: ContactFormApiResponse = await response.json();

      if (result.status === 'success') {
        console.log('Form submitted successfully:', result);
        toast.success(
          result.message || formTranslations.toastSuccessMessageSent
        );
        form.reset();
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else if (result.status === 'error') {
        console.error('Form submission error:', result);
        // Attempt to display server-side validation errors if available
        let errorMessage =
          result.message || formTranslations.toastErrorFailedToSend;
        if (result.errors) {
          // Example: Concatenate all error messages (you might want a more sophisticated display)
          const errorMessages = Object.values(result.errors).flat().join('\n');
          errorMessage += `\n\n${formTranslations.toastErrorDetails}\n${errorMessages}`;
        }
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error(formTranslations.toastErrorUnexpected);
    }
  }

  return (
    <Form {...form}>
      {/* noValidate: the browser's own bubbles speak the browser's language;
          the translated Zod messages below each field replace them. */}
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-start">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formTranslations.firstNameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formTranslations.firstNamePlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formTranslations.lastNameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formTranslations.lastNamePlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.emailLabel}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={formTranslations.emailPlaceholder}
                  className="focus-visible:ring-primary/30 transition-shadow duration-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.companyLabel}</FormLabel>
              <FormControl>
                <Input
                  placeholder={formTranslations.companyPlaceholder}
                  className="focus-visible:ring-primary/30 transition-shadow duration-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.messageLabel}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={formTranslations.messagePlaceholder}
                  rows={5}
                  className="focus-visible:ring-primary/30 transition-shadow duration-300 min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          // Keeps focus in the current field during the click: leaving it
          // would show its error, push this button down mid-click and lose
          // the submission. The submission then checks every field.
          onMouseDown={(event) => event.preventDefault()}
          className="w-full h-12 text-lg font-semibold group"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="size-5 animate-spin" />
              {formTranslations.sendButtonLabel}...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {formTranslations.sendButtonLabel}
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
}
