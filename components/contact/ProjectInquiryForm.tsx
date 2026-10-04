'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle } from 'lucide-react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { inquiryOptions } from '@/data/contact';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  need: '',
  description: '',
};

export function ProjectInquiryForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const FIELD_MAX = {
    name: 100,
    company: 200,
    email: 200,
    phone: 30,
    description: 5000,
  };

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = 'Please enter your name.';
    if (!data.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!data.need) next.need = 'Please select what you need.';
    if (!data.description.trim()) {
      next.description = 'Please tell us about your project.';
    }
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        setData(initialData);
      } else {
        const body = await res.json().catch(() => null);
        setServerError(
          body?.error ||
            'We could not send your enquiry at this time. Please try again or contact us directly.'
        );
      }
    } catch {
      setServerError(
        'We could not send your enquiry at this time. Please try again or contact us directly.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
          Thanks for reaching out.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your project information has been captured successfully. We&apos;ll be
          in touch about the next step.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 md:p-8"
      aria-label="Project inquiry form"
    >
      <h3 className="font-heading text-xl font-semibold text-foreground">
        Project Inquiry
      </h3>
      {serverError && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{serverError}</p>
        </div>
      )}
      <div className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">
            Your Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            value={data.name}
            maxLength={FIELD_MAX.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company">Company / Organization</Label>
          <Input
            id="company"
            value={data.company}
            maxLength={FIELD_MAX.company}
            onChange={(e) => setData({ ...data, company: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">
            Email Address <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            maxLength={FIELD_MAX.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            maxLength={FIELD_MAX.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="need">
            What do you need? <span className="text-primary">*</span>
          </Label>
          <Select
            value={data.need}
            onValueChange={(value) => setData({ ...data, need: value })}
          >
            <SelectTrigger
              id="need"
              aria-required="true"
              aria-invalid={!!errors.need}
              aria-describedby={errors.need ? 'need-error' : undefined}
            >
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {inquiryOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.need && (
            <p id="need-error" className="text-sm text-destructive">
              {errors.need}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">
            Tell us about your project <span className="text-primary">*</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Tell us what you're trying to build, improve, or solve..."
            rows={5}
            value={data.description}
            maxLength={FIELD_MAX.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            aria-required="true"
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? 'description-error' : undefined}
          />
          {errors.description && (
            <p id="description-error" className="text-sm text-destructive">
              {errors.description}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={submitting} className="w-full">
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Project Inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
