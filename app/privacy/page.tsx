
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Zarkode Digital Solutions Ltd. collects, uses, stores, and protects personal information through its website and services.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Zarkode Digital Solutions',
    description:
      'Learn how Zarkode Digital Solutions Ltd. handles personal information shared through its website and services.',
  },
};

const sections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Zarkode Digital Solutions Ltd. (“Zarkode”, “we”, “our”, or “us”) is a Nigerian technology company based in Abuja. We respect your privacy and are committed to handling personal information responsibly.',
      'This Privacy Policy explains how information may be collected, used, stored, and shared when you visit zarkode.com.ng, contact us, or engage with our services.',
    ],
  },
  {
    title: '2. Information We May Collect',
    paragraphs: [
      'Information you provide: When you contact us or submit our website contact form, you may provide your name, email address, phone number, company or organization name, project details, and any other information you choose to include in your message.',
      'Communication records: We may retain correspondence and related information needed to respond to enquiries, prepare quotations, provide services, and maintain appropriate business records.',
      'Technical information: When you access our website, technical information such as your IP address, browser type, device information, and pages requested may be processed by our hosting, security, or other website infrastructure providers, depending on their configurations.',
      'We aim to collect information that is relevant and reasonably necessary for the purposes described in this policy.',
    ],
  },
  {
    title: '3. How We Use Information',
    paragraphs: [
      'We may use information to respond to enquiries, discuss potential projects, prepare proposals and quotations, deliver requested services, communicate with clients, maintain website security, troubleshoot technical issues, and meet applicable legal or contractual obligations.',
      'We may also use relevant business correspondence to manage our relationship with you and maintain records of work requested or completed.',
      'We do not intend to use personal information for purposes incompatible with the reason it was collected without an appropriate legal basis or notice where required.',
    ],
  },
  {
    title: '4. Contact Forms and Email Communications',
    paragraphs: [
      'Information submitted through our contact form may be processed by our website infrastructure and email delivery provider so that your message can reach us. We use email to respond to enquiries and communicate about relevant business matters.',
      'Please do not submit passwords, payment card details, sensitive personal information, or confidential material through a general website enquiry form unless we have specifically provided a suitable and secure method for doing so.',
    ],
  },
  {
    title: '5. Cookies and Similar Technologies',
    paragraphs: [
      'Our website or its infrastructure providers may use essential technical mechanisms to support security, performance, and reliable operation. If analytics, advertising, or other optional tracking technologies are introduced, we will address any applicable notice and consent requirements.',
      'You can manage cookies through your browser settings. Disabling certain cookies or technical features may affect how some websites function.',
    ],
  },
  {
    title: '6. When We Share Information',
    paragraphs: [
      'We do not sell personal information to third parties. We may share information with service providers that help us operate our website, deliver communications, maintain security, or provide services you have requested.',
      'Information may also be disclosed where reasonably necessary to fulfil a contractual obligation, comply with applicable law, respond to lawful requests, protect rights and safety, or address fraud and security concerns.',
      'Where appropriate, we take reasonable steps to ensure that service providers handle information in a manner consistent with their role and applicable data protection requirements.',
    ],
  },
  {
    title: '7. Data Storage and International Transfers',
    paragraphs: [
      'Information may be stored or processed by us or our service providers in Nigeria or other countries, depending on the systems used to operate our website and provide services.',
      'Where personal information is transferred across borders, we will take steps required by applicable data protection law to ensure that the transfer has an appropriate legal basis and safeguards where necessary.',
    ],
  },
  {
    title: '8. Data Retention',
    paragraphs: [
      'We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, managing client relationships, maintaining business records, resolving disputes, and meeting legal obligations.',
      'Retention periods depend on the nature of the information, the context in which it was provided, and any applicable legal requirements.',
    ],
  },
  {
    title: '9. Data Security',
    paragraphs: [
      'We take reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.',
      'No method of internet transmission or electronic storage is completely secure. We therefore cannot guarantee absolute security, but we work to protect information appropriate to the circumstances.',
    ],
  },
  {
    title: '10. Your Privacy Rights',
    paragraphs: [
      'Depending on applicable law and your circumstances, you may have rights to request access to personal information we hold about you, request correction of inaccurate information, request deletion, object to or restrict certain processing, withdraw consent where processing relies on consent, or raise a complaint with a relevant data protection authority.',
      'To make a privacy request, contact us using the details below. We may need to verify your identity and clarify your request before responding. Some requests may be subject to legal exceptions or other applicable requirements.',
    ],
  },
  {
    title: '11. Third-Party Websites and Services',
    paragraphs: [
      'Our website may contain links to third-party websites, platforms, or services. Those third parties operate under their own privacy policies and practices. We are not responsible for their independent privacy practices, so we encourage you to review their policies before providing personal information.',
    ],
  },
  {
    title: '12. Children’s Privacy',
    paragraphs: [
      'Our website and services are intended for businesses, organizations, and individuals able to use them lawfully. We do not knowingly seek to collect personal information from children in circumstances where parental consent or another legal basis is required. If you believe a child has provided personal information to us inappropriately, please contact us so we can assess the matter.',
    ],
  },
  {
    title: '13. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy to reflect changes in our practices, technology, services, or legal obligations. The updated version will be published on this page with a revised “Last updated” date where appropriate.',
    ],
  },
  {
    title: '14. Contact Us',
    paragraphs: [
      'For questions about this Privacy Policy or to make a privacy-related request, contact Zarkode Digital Solutions Ltd. using the details below.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />

      <Container className="py-16 md:py-24">
        <article className="mx-auto max-w-4xl">
          <p className="mb-10 text-sm text-muted-foreground">
            Last updated: October 10, 2026
          </p>

          <p className="mb-10 leading-8 text-muted-foreground">
            This policy describes how we handle personal information when you
            visit our website, contact us, or use our services. The details of
            any particular service may also be governed by a separate agreement
            or notice.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-xl font-semibold tracking-tight">
                  {section.title}
                </h2>

                <div className="space-y-4 leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.title === '14. Contact Us' && (
                  <div className="mt-5 space-y-2 leading-7">
                    <p>
                      <strong>Company:</strong> Zarkode Digital Solutions Ltd.
                    </p>
                    <p>
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:info@zarkode.com.ng"
                        className="text-primary underline underline-offset-4"
                      >
                        info@zarkode.com.ng
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a
                        href="tel:+2348106589619"
                        className="text-primary underline underline-offset-4"
                      >
                        0810 658 9619
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a
                        href="https://zarkode.com.ng"
                        className="text-primary underline underline-offset-4"
                      >
                        zarkode.com.ng
                      </a>
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      </Container>
    </>
  );
}
