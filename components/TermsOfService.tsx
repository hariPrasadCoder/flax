import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const TermsOfService: React.FC = () => (
  <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
    <Navbar />
    <main className="max-w-3xl mx-auto px-6 py-24">

      <div className="mb-12">
        <span className="font-mono text-[11px] text-ink-muted uppercase tracking-widest">Legal</span>
        <h1 className="font-serif font-black text-4xl text-ink mt-3 mb-4">Terms of Service</h1>
        <p className="font-mono text-[12px] text-ink-muted">Last updated: March 27, 2026</p>
      </div>

      <div className="prose-flax space-y-10 font-sans text-[15px] leading-relaxed text-ink">

        <section>
          <p>
            Welcome to Flax. These Terms of Service ("Terms") govern your access to and use of the Flax application and website at <strong>joinflax.com</strong> (the "Service"), operated by Flax ("we," "our," or "us").
          </p>
          <p className="mt-4">
            By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">1. Description of the Service</h2>
          <p>
            Flax is a meeting action automation platform powered by an AI assistant called Flaxie. The Service connects to your Google account (Gmail, Google Calendar, and Google Drive) and optionally to third-party platforms including Granola, Fireflies.ai, Notion, Jira, and HubSpot — to automatically capture action items from your meetings and execute follow-up tasks on your behalf, such as sending emails, scheduling events, creating tasks, and updating records in your connected tools.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use the Service. By using the Service, you represent that you meet this requirement. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">3. Account Registration & Google Sign-In</h2>
          <p>
            You must sign in with a valid Google account to use Flax. By signing in, you authorize Flax to access your Google account data as described in our{' '}
            <a href="/privacy" className="text-flax underline hover:text-flax-dark">
              Privacy Policy
            </a>
            . You are responsible for maintaining the security of your account and for all activities that occur under your account.
          </p>
          <p className="mt-4">
            You may revoke Flax's access to your Google account at any time from your{' '}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flax underline hover:text-flax-dark"
            >
              Google Account permissions page
            </a>
            . Revoking access will disable Service functionality that depends on Google integrations.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">4. Google Integrations & Permissions</h2>
          <p>
            To provide its core features, Flax requests the following Google API permissions:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-3">
            <li>
              <strong>Gmail</strong> — To read relevant email threads and to compose or send follow-up emails as directed by Flaxie or by you.
            </li>
            <li>
              <strong>Google Calendar</strong> — To read your schedule and to create, update, or delete calendar events for action items that require scheduling.
            </li>
            <li>
              <strong>Google Drive</strong> (including Google Docs, Sheets, and Slides) — To read and write files with your approval when you direct Flaxie to attach, retrieve, or save documents related to your meetings.
            </li>
          </ul>
          <p className="mt-4">
            You grant these permissions voluntarily and can withdraw them at any time. You remain responsible for any actions taken by Flaxie on your behalf using these permissions. We recommend reviewing automated actions before they are sent when in doubt.
          </p>
          <p className="mt-4">
            Our use of Google API data is governed by the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flax underline hover:text-flax-dark"
            >
              Google API Services User Data Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">5. Third-Party Integrations</h2>
          <p>
            Flax optionally integrates with third-party platforms to extend its automation capabilities. By connecting these integrations, you authorize Flax to access and act on your behalf within those platforms, limited to the actions Flaxie identifies or that you explicitly request:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Granola & Fireflies.ai</strong> — Reading meeting transcripts and notes to extract action items</li>
            <li><strong>Notion</strong> — Creating and updating pages, tasks, and database entries</li>
            <li><strong>Jira</strong> — Creating and updating issues and project tasks</li>
            <li><strong>HubSpot</strong> — Logging activity, updating contacts, and managing deals in your CRM</li>
          </ul>
          <p className="mt-4">
            Each third-party integration is subject to its own terms of service and privacy policy. Flax is not responsible for the practices of third-party platforms. You can disconnect any integration at any time from your account settings. Disconnecting stops Flax from accessing that platform's data going forward.
          </p>
          <p className="mt-4">
            You are responsible for ensuring you have the right to authorize Flax to access your accounts on these third-party platforms.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">6. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Send spam, unsolicited messages, or bulk emails through the Gmail integration</li>
            <li>Access, tamper with, or use non-public areas of the Service or our systems</li>
            <li>Attempt to reverse-engineer, decompile, or extract source code from the Service</li>
            <li>Use the Service to harass, threaten, or harm any person</li>
            <li>Circumvent any security or authentication measures</li>
            <li>Use the Service in a way that could damage, disable, or impair our infrastructure</li>
          </ul>
          <p className="mt-4">
            We reserve the right to suspend or terminate accounts that violate these terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">7. Your Content & Data</h2>
          <p>
            You retain ownership of all content you create or share through the Service, including meeting notes, action items, and documents. By using the Service, you grant Flax a limited license to process your content solely to provide and improve the Service.
          </p>
          <p className="mt-4">
            You are responsible for ensuring that content you share through Flax — and actions Flaxie takes on your behalf — comply with applicable laws and do not infringe on the rights of others.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">8. AI-Generated Actions</h2>
          <p>
            Flaxie is an AI assistant and may occasionally make errors, misinterpret action items, or take actions that do not match your intent. You acknowledge that:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>AI-generated outputs (emails, events, documents) should be reviewed before relying on them for important decisions.</li>
            <li>You are ultimately responsible for actions executed through your account, including those taken automatically by Flaxie.</li>
            <li>Flax is not liable for errors resulting from AI interpretation of your meetings or instructions.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">9. Privacy</h2>
          <p>
            Your use of the Service is subject to our{' '}
            <a href="/privacy" className="text-flax underline hover:text-flax-dark">
              Privacy Policy
            </a>
            , which is incorporated into these Terms by reference. Please review it to understand our data practices.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">10. Termination</h2>
          <p>
            You may stop using the Service at any time. You may delete your account by contacting us at{' '}
            <a href="mailto:contact@joinflax.com" className="text-flax underline hover:text-flax-dark">
              contact@joinflax.com
            </a>
            . Upon deletion, we will remove your data within 30 days in accordance with our Privacy Policy.
          </p>
          <p className="mt-4">
            We reserve the right to suspend or terminate your access to the Service at our discretion, with or without notice, if we believe you have violated these Terms or if we discontinue the Service.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">11. Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLAX DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="mt-4">
            We do not warrant that the Service will be uninterrupted, error-free, or that any defects will be corrected.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">12. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLAX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, REVENUE, OR PROFITS, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p className="mt-4">
            OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes via email or through the Service at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Delaware.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">15. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <div className="mt-4 p-5 bg-white border border-rule rounded-xl">
            <p className="font-semibold text-ink">Flax</p>
            <p className="text-ink-muted mt-1">
              Email:{' '}
              <a href="mailto:contact@joinflax.com" className="text-flax underline hover:text-flax-dark">
                contact@joinflax.com
              </a>
            </p>
            <p className="text-ink-muted">Website: joinflax.com</p>
          </div>
        </section>

      </div>
    </main>
    <Footer />
  </div>
);
