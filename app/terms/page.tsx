
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the terms governing the use of Zarkode Digital Solutions Ltd. website, digital services, and client engagements.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Zarkode Digital Solutions',
    description:
      'Terms governing the use of Zarkode Digital Solutions Ltd. website and digital services.',
  },
};

const sections = [
  {
    title: '1. Introduction',
    paragraphs: [
      'Welcome to Zarkode Digital Solutions Ltd. (“Zarkode”, “we”, “our”, or “us”). We are a Nigerian technology company providing website development, software and digital product development, branding, domain registration, web hosting, IT consulting, digital marketing, and related technology services.',
      'These Terms of Service govern your use of our website and provide general terms for engaging with our services. Separate proposals, quotations, contracts, or service agreements may contain additional terms for a particular project.',
    ],
  },
  {
    title: '2. Use of Our Website',
    paragraphs: [
      'You agree to use this website lawfully and responsibly. You must not use it to distribute malicious software, attempt unauthorized access, interfere with its operation, or engage in fraudulent or unlawful activity.',
      'Website content is provided for general information about Zarkode and our services. We may update, change, or remove website content at any time.',
    ],
  },
  {
    title: '3. Services and Project Scope',
    paragraphs: [
      'The services available from Zarkode depend on the requirements of each client and the scope we agree to undertake. A project’s deliverables, timeline, price, revisions, and other requirements should be confirmed in an accepted quotation, proposal, contract, or written agreement.',
      'Requests outside the agreed scope may require additional fees, revised timelines, or a separate agreement. We will communicate material changes for agreement before proceeding with additional work.',
    ],
  },
  {
    title: '4. Quotations, Fees, and Payments',
    paragraphs: [
      'Prices, payment schedules, deposits, and applicable charges will be communicated in the relevant quotation or agreement. Unless otherwise agreed in writing, clients are responsible for making payments according to the agreed schedule.',
      'Work may be paused when a required payment is overdue, subject to the applicable agreement and law. Any refunds, cancellations, or changes to payment arrangements will be handled according to the agreed project terms and applicable law.',
      'Third-party costs, including domain renewals, hosting, software licences, advertising spend, and external services, may be charged separately where applicable and disclosed in the relevant agreement.',
    ],
  },
  {
    title: '5. Client Responsibilities',
    paragraphs: [
      'Clients are responsible for providing accurate information, required content, materials, feedback, approvals, and access credentials needed for their projects. Clients must ensure they have the necessary rights and permissions to use materials they supply.',
      'Delays in providing content, approvals, or access may affect delivery dates. Clients are responsible for reviewing deliverables and reporting issues within any review period agreed for the project.',
    ],
  },
  {
    title: '6. Intellectual Property',
    paragraphs: [
      'Each party retains ownership of intellectual property it owned before a project began. Third-party software, fonts, images, plugins, and other licensed materials remain subject to their respective licence terms.',
      'Ownership or usage rights for custom work created for a client, including websites, designs, software, and other deliverables, will be determined by the applicable project agreement and any outstanding payment obligations.',
      'Unless otherwise agreed, Zarkode may request permission to identify completed work in its portfolio or marketing materials. We will not treat confidential client information as public portfolio material without appropriate permission.',
    ],
  },
  {
    title: '7. Domains, Hosting, and Third-Party Services',
    paragraphs: [
      'Domain registration, hosting, email, payment systems, APIs, advertising platforms, and other third-party services may be provided or supported by independent providers. Their availability, pricing, policies, and performance may be outside our control.',
      'Clients should maintain accurate account information, protect their credentials, and renew domains, hosting, licences, and other subscriptions when required by the relevant agreement. We will explain any renewal or ongoing support arrangements agreed for a project.',
    ],
  },
  {
    title: '8. Maintenance and Support',
    paragraphs: [
      'Ongoing maintenance, updates, security monitoring, technical support, and content changes are included only where specified in a project agreement or separate support plan.',
      'Unless expressly agreed, completing a project does not automatically include unlimited future updates, new features, or ongoing maintenance.',
    ],
  },
  {
    title: '9. Confidentiality and Data Protection',
    paragraphs: [
      'Both parties should take reasonable steps to protect confidential information shared during a project and use it only for legitimate purposes connected with their relationship, subject to applicable law and any separate confidentiality agreement.',
      'Our handling of personal information submitted through this website is described in our Privacy Policy.',
    ],
  },
  {
    title: '10. Warranties and Availability',
    paragraphs: [
      'We aim to deliver services with reasonable care and skill in accordance with the agreed project scope. Specific warranties, testing requirements, acceptance criteria, and support commitments should be stated in the applicable agreement.',
      'We do not guarantee uninterrupted website availability, specific search-engine rankings, a particular level of sales or business results, or the continuous availability of third-party platforms. Nothing in these terms excludes rights or protections that cannot lawfully be excluded.',
    ],
  },
  {
    title: '11. Limitation of Liability',
    paragraphs: [
      'To the extent permitted by applicable law, neither party will be liable to the other for indirect or consequential losses arising from an engagement, except where such liability cannot lawfully be excluded.',
      'Any further limitation of liability should be set out in the relevant project agreement. Nothing in these terms excludes or limits liability where doing so would be unlawful.',
    ],
  },
  {
    title: '12. Suspension and Termination',
    paragraphs: [
      'Either party may seek to end a project or service in accordance with the applicable agreement. If no separate termination terms have been agreed, the parties should communicate in writing to resolve outstanding work, payments, access, and the handover of completed deliverables.',
      'We may suspend access to a service where reasonably necessary to address security risks, unlawful activity, or a material breach of applicable terms, subject to any obligations imposed by law or contract.',
    ],
  },
  {
    title: '13. Changes to These Terms',
    paragraphs: [
      'We may update these Terms of Service from time to time. Updated terms will be published on this page with a revised effective date where appropriate. Changes to an existing client contract will be governed by that contract and applicable law.',
    ],
  },
  {
    title: '14. Governing Law',
    paragraphs: [
      'These terms are intended to be interpreted in accordance with the laws of the Federal Republic of Nigeria, subject to any mandatory legal requirements that apply to a particular matter.',
    ],
  },
  {
    title: '15. Contact Us',
    paragraphs: [
      'If you have questions about these Terms of Service or would like to discuss a project, contact Zarkode Digital Solutions Ltd. using the details below.',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />

      <Container className="py-16 md:py-24">
        <article className="mx-auto max-w-4xl">
          <p className="mb-10 text-sm text-muted-foreground">
            Last updated: October 10, 2026
          </p>

          <p className="mb-10 leading-8 text-muted-foreground">
            These terms explain the general conditions for using our website
            and working with Zarkode Digital Solutions Ltd. Please read them
            carefully. Project-specific agreements may provide additional
            details for individual engagements.
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

                {section.title === '15. Contact Us' && (
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
