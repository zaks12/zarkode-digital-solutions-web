import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { inquiryOptions } from '@/data/contact';

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';
const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || 'info@zarkode.com.ng';

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_COMPANY = 200;
const MAX_PHONE = 30;
const MAX_DESCRIPTION = 5000;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validateBody(data: unknown): {
  ok: boolean;
  error?: string;
  parsed?: {
    name: string;
    company: string;
    email: string;
    phone: string;
    need: string;
    description: string;
  };
} {
  if (typeof data !== 'object' || data === null) {
    return { ok: false, error: 'Invalid request body.' };
  }

  const obj = data as Record<string, unknown>;

  const name = typeof obj.name === 'string' ? obj.name.trim() : '';
  const company = typeof obj.company === 'string' ? obj.company.trim() : '';
  const email = typeof obj.email === 'string' ? obj.email.trim() : '';
  const phone = typeof obj.phone === 'string' ? obj.phone.trim() : '';
  const need = typeof obj.need === 'string' ? obj.need.trim() : '';
  const description =
    typeof obj.description === 'string' ? obj.description.trim() : '';

  if (!name) return { ok: false, error: 'Please enter your name.' };
  if (name.length > MAX_NAME)
    return { ok: false, error: 'Name is too long.' };

  if (!email) return { ok: false, error: 'Please enter your email address.' };
  if (email.length > MAX_EMAIL)
    return { ok: false, error: 'Email is too long.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { ok: false, error: 'Please enter a valid email address.' };

  if (company.length > MAX_COMPANY)
    return { ok: false, error: 'Company name is too long.' };

  if (phone.length > MAX_PHONE)
    return { ok: false, error: 'Phone number is too long.' };

  if (!need) return { ok: false, error: 'Please select what you need.' };
  if (!inquiryOptions.includes(need))
    return { ok: false, error: 'Invalid inquiry type.' };

  if (!description)
    return { ok: false, error: 'Please tell us about your project.' };
  if (description.length > MAX_DESCRIPTION)
    return { ok: false, error: 'Project description is too long.' };

  return {
    ok: true,
    parsed: { name, company, email, phone, need, description },
  };
}

function buildEmailHtml(p: {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  description: string;
}): string {
  const rows = [
    { label: 'Name', value: p.name },
    { label: 'Email', value: p.email },
    ...(p.company ? [{ label: 'Company', value: p.company }] : []),
    ...(p.phone ? [{ label: 'Phone', value: p.phone }] : []),
    { label: 'Inquiry Type', value: p.need },
    { label: 'Project Description', value: p.description },
  ];

  const rowsHtml = rows
    .map(
      (r) => `
        <tr>
          <td style="padding:8px 0 2px 0;font-family:monospace;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">${escapeHtml(r.label)}</td>
        </tr>
        <tr>
          <td style="padding:0 0 16px 0;font-size:15px;color:#111827;line-height:1.6;white-space:pre-wrap;">${escapeHtml(r.value)}</td>
        </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9fafb;">
  <div style="max-width:600px;margin:24px auto;padding:32px;background:#ffffff;border-radius:8px;border:1px solid #e5e7eb;">
    <h2 style="margin:0 0 8px 0;font-size:20px;color:#111827;">New Website Enquiry</h2>
    <p style="margin:0 0 24px 0;font-size:14px;color:#6b7280;">This enquiry was submitted through the Zarkode Digital Solutions website.</p>
    <table style="width:100%;border-collapse:collapse;">
      ${rowsHtml}
    </table>
    <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;">
    <p style="margin:0;font-size:12px;color:#9ca3af;">Reply directly to this email to respond to the enquirer at ${escapeHtml(p.email)}.</p>
  </div>
</body>
</html>`;
}

function buildEmailText(p: {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  description: string;
}): string {
  const lines = [
    'New Website Enquiry',
    'This enquiry was submitted through the Zarkode Digital Solutions website.',
    '',
    `Name: ${p.name}`,
    `Email: ${p.email}`,
  ];
  if (p.company) lines.push(`Company: ${p.company}`);
  if (p.phone) lines.push(`Phone: ${p.phone}`);
  lines.push(`Inquiry Type: ${p.need}`);
  lines.push('');
  lines.push(`Project Description:`);
  lines.push(p.description);
  return lines.join('\n');
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const result = validateBody(body);

  if (!result.ok || !result.parsed) {
    return NextResponse.json(
      { error: result.error || 'Validation failed.' },
      { status: 400 }
    );
  }

  const p = result.parsed;

  const subject = `New Website Enquiry — ${p.need} — ${p.name}`;

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: p.email,
      subject,
      html: buildEmailHtml(p),
      text: buildEmailText(p),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          'We could not send your enquiry at this time. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}
