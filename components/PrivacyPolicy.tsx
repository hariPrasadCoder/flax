import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PrivacyPolicy: React.FC = () => (
  <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
    <Navbar />
    <main className="max-w-3xl mx-auto px-6 py-24">

      <div className="mb-12">
        <span className="font-mono text-[11px] text-ink-muted uppercase tracking-widest">Legal</span>
        <h1 className="font-serif font-black text-4xl text-ink mt-3 mb-4">Privacy Policy</h1>
        <p className="font-mono text-[12px] text-ink-muted">Last updated: March 27, 2026</p>
      </div>

      <div className="prose-flax space-y-10 font-sans text-[15px] leading-relaxed text-ink">

        <section>
          <p>
            Flax ("we," "our," or "us") operates <strong>joinflax.com</strong> and the Flax application (the "Service"). This Privacy Policy explains how we collect, use, and protect information when you use our Service, including information obtained through Google APIs and other third-party integrations.
          </p>
          <p className="mt-4">
            By using the Service, you agree to the collection and use of information described in this policy.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">1. Information We Collect</h2>

          <h3 className="font-semibold text-[15px] text-ink mb-2">Account Information</h3>
          <p>
            When you sign in with Google, we receive your name, email address, and profile picture from your Google account. This is used solely to create and manage your Flax account.
          </p>

          <h3 className="font-semibold text-[15px] text-ink mt-6 mb-2">Google Workspace Data</h3>
          <p>
            To deliver core functionality, Flax requests access to the following Google services on your behalf:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-3 text-[15px]">
            <li>
              <strong>Gmail</strong> — We read email threads and draft or send emails to help you follow up on action items that arise from your meetings. We only access emails relevant to tasks Flaxie (our AI assistant) identifies or that you explicitly direct it to handle.
            </li>
            <li>
              <strong>Google Calendar</strong> — We read your calendar to understand your schedule and upcoming meetings, and we create or update calendar events when action items require scheduling.
            </li>
            <li>
              <strong>Google Drive</strong> (including Google Docs, Sheets, and Slides) — We read and write files with your approval to attach relevant documents to follow-ups or to store meeting summaries and notes you choose to save to Drive.
            </li>
          </ul>

          <h3 className="font-semibold text-[15px] text-ink mt-6 mb-2">Third-Party Integration Data</h3>
          <p>
            When you connect optional third-party tools to Flax, we access data from those services only to the extent needed to execute the action items Flaxie identifies. This may include:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Meeting transcripts and notes from <strong>Granola</strong> and <strong>Fireflies.ai</strong></li>
            <li>Pages, databases, and tasks from <strong>Notion</strong></li>
            <li>Issues, projects, and task statuses from <strong>Jira</strong></li>
            <li>Contacts, deals, and activity logs from <strong>HubSpot</strong></li>
          </ul>
          <p className="mt-3">
            You connect these integrations voluntarily and can disconnect them at any time from your account settings.
          </p>

          <h3 className="font-semibold text-[15px] text-ink mt-6 mb-2">Meeting & Usage Data</h3>
          <p>
            We collect meeting transcripts, action items, and notes generated through the Service to power Flaxie's automation features. We also collect standard usage logs (pages visited, features used, error reports) to improve reliability and performance.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Provide, operate, and improve the Service</li>
            <li>Automatically execute action items from your meetings (sending emails, scheduling events, updating tasks, logging CRM activity)</li>
            <li>Authenticate you via Google Sign-In</li>
            <li>Send you product updates and support communications</li>
            <li>Monitor and analyze usage patterns to improve Flaxie's accuracy</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4">
            <strong>We do not use your Google Workspace data or third-party integration data to serve you advertising, and we do not sell this data to any third parties.</strong>
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">3. Google API Services — Limited Use Disclosure</h2>
          <p>
            Flax's use of information received from Google APIs adheres to the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flax underline hover:text-flax-dark"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
          <p className="mt-4">Specifically:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>We only request Google data that is necessary to provide the features you use.</li>
            <li>We do not transfer your Google data to third parties except as necessary to provide the Service (e.g., AI model inference), or as required by law.</li>
            <li>We do not use your Google data for advertising purposes.</li>
            <li>We do not allow humans to read your Gmail, Calendar, or Drive data unless you have given us explicit permission, it is necessary for security purposes, or it is required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">4. Third-Party Integrations</h2>
          <p>
            Flax integrates with a number of third-party platforms to automate your post-meeting workflows. When you connect these services, we access only the data required to complete the specific action items Flaxie identifies. Here is what we access and why:
          </p>

          <div className="mt-6 space-y-6">

            <div className="p-5 bg-white border border-rule rounded-xl">
              <p className="font-semibold text-ink">Granola & Fireflies.ai</p>
              <p className="text-ink-muted mt-2 text-[14px]">
                We read meeting transcripts and AI-generated notes from these platforms so Flaxie can identify action items without requiring you to manually copy notes into Flax. We do not store your full transcript permanently — only the extracted action items and summaries.
              </p>
            </div>

            <div className="p-5 bg-white border border-rule rounded-xl">
              <p className="font-semibold text-ink">Notion</p>
              <p className="text-ink-muted mt-2 text-[14px]">
                We read and write to pages and databases you authorize in order to create tasks, update project trackers, or store meeting summaries. We only access workspaces and pages you explicitly share with Flaxie.
              </p>
            </div>

            <div className="p-5 bg-white border border-rule rounded-xl">
              <p className="font-semibold text-ink">Jira</p>
              <p className="text-ink-muted mt-2 text-[14px]">
                We create, update, and read issues in projects you connect to Flax, so that action items from meetings can be turned into Jira tickets automatically. We access only the projects you authorize.
              </p>
            </div>

            <div className="p-5 bg-white border border-rule rounded-xl">
              <p className="font-semibold text-ink">HubSpot</p>
              <p className="text-ink-muted mt-2 text-[14px]">
                We read and update contacts, deals, and activity logs in your connected HubSpot account so that Flaxie can log meeting outcomes, update deal stages, and create follow-up tasks directly in your CRM.
              </p>
            </div>

          </div>

          <p className="mt-6">
            Each of these integrations is governed by the respective platform's own terms of service and privacy policy. Flax is not responsible for data practices of third-party platforms. You can disconnect any integration at any time from your account settings, which will immediately stop Flax from accessing that platform's data.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">5. Data Sharing</h2>
          <p>We share your data only in these limited circumstances:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Service Providers</strong> — We use trusted third-party vendors (such as AI inference providers and cloud infrastructure) who process data solely on our behalf and under strict confidentiality agreements.</li>
            <li><strong>Integration Platforms</strong> — When you authorize a third-party integration, data is shared with that platform only as needed to carry out the action you requested.</li>
            <li><strong>Legal Requirements</strong> — We may disclose information if required by law or to protect the rights and safety of Flax, our users, or the public.</li>
            <li><strong>Business Transfers</strong> — If Flax is acquired or merges with another company, your data may be transferred as part of that transaction. We will notify you before your data is subject to a different privacy policy.</li>
          </ul>
          <p className="mt-4">We never sell your personal data.</p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">6. Data Retention</h2>
          <p>
            We retain your account data and meeting records for as long as your account is active. If you delete your account, we will permanently delete your data within 30 days, except where retention is required by law.
          </p>
          <p className="mt-4">
            Google access tokens and third-party integration tokens are stored securely and encrypted. You can revoke Flax's access to your Google account at any time from your{' '}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flax underline hover:text-flax-dark"
            >
              Google Account permissions page
            </a>
            , and disconnect other integrations from your Flax account settings.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">7. Data Security</h2>
          <p>
            We implement industry-standard security measures, including encryption in transit (TLS) and at rest, to protect your data. Access to user data is restricted to authorized personnel and service providers who need it to operate the Service.
          </p>
          <p className="mt-4">
            No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">8. Your Rights & Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Correct</strong> inaccurate data</li>
            <li><strong>Delete</strong> your account and associated data</li>
            <li><strong>Revoke</strong> Google permissions at any time via your Google Account settings</li>
            <li><strong>Disconnect</strong> any third-party integration at any time from your account settings</li>
            <li><strong>Export</strong> your meeting data in a portable format upon request</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:contact@joinflax.com" className="text-flax underline hover:text-flax-dark">
              contact@joinflax.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">9. Children's Privacy</h2>
          <p>
            The Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by a prominent notice in the Service. Continued use of the Service after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:
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
