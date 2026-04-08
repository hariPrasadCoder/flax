import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const SecurityPage: React.FC = () => (
  <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
    <Navbar forceLight />
    <main className="max-w-3xl mx-auto px-6 py-24">

      <div className="mb-12">
        <span className="font-mono text-[11px] text-ink-muted uppercase tracking-widest">Trust & Safety</span>
        <h1 className="font-serif font-black text-4xl text-ink mt-3 mb-4">Security</h1>
        <p className="font-mono text-[12px] text-ink-muted">Last updated: April 8, 2026</p>
      </div>

      <div className="prose-flax space-y-10 font-sans text-[15px] leading-relaxed text-ink">

        <section>
          <p>
            Flax is built for teams that share sensitive work: meeting transcripts, email threads, project data, and CRM records. We take that responsibility seriously. This page explains the security measures that protect your data.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Infrastructure & Hosting</h2>
          <p>
            Flax runs on <strong>AWS ECS Fargate</strong>, a managed container platform operated by Amazon Web Services. All traffic to Flax is served over <strong>HTTPS</strong>, enforced at the Application Load Balancer level using TLS certificates managed by AWS Certificate Manager. HTTP connections are automatically redirected to HTTPS.
          </p>
          <p className="mt-4">
            All production secrets (API keys, database credentials, and third-party tokens) are stored in <strong>AWS Secrets Manager</strong> and injected into containers at runtime. Secrets are never hardcoded in source code or environment files.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Authentication</h2>
          <p>
            Flax uses <strong>Supabase Auth</strong> for user authentication, supporting Google OAuth and Apple OAuth. Flax never stores your password. Authentication is delegated entirely to your identity provider.
          </p>
          <p className="mt-4">
            Sessions are managed via <strong>JWT tokens</strong> signed with HMAC-SHA256 and validated on every API request. OAuth flows use short-lived <strong>nonce tokens</strong> (5-minute TTL) to prevent tokens from being exposed in browser URLs or logs.
          </p>
          <p className="mt-4">
            OAuth access tokens for connected integrations (Google, Slack, Notion, Jira, HubSpot) are stored in your account and <strong>never returned in API responses</strong> or exposed to other users.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Database & Access Controls</h2>
          <p>
            Your data is stored in <strong>Supabase</strong>, a managed PostgreSQL database. Every table in the database has <strong>Row-Level Security (RLS)</strong> policies enforced. Your data is isolated at the database level so that no query can accidentally return another user's records.
          </p>
          <p className="mt-4">
            Internal access to user data is strictly limited to what is required to operate the service. No Flax team member reads your meeting content or emails unless you have explicitly asked for support and granted access.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Human Approval, Always</h2>
          <p>
            Flax never sends an email, creates a calendar event, posts a Slack message, or updates any third-party system <strong>without your explicit approval</strong>. The AI drafts actions; you decide what gets executed. This is a core design principle, not just a setting.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">AI Processing & Model Training</h2>
          <p>
            Flax uses two AI providers to process meeting transcripts and generate action items:
          </p>

          <div className="mt-6 space-y-4">
            <div className="p-5 bg-white border border-rule rounded-xl">
              <p className="font-semibold text-ink">Google Gemini API</p>
              <p className="text-ink-muted mt-2 text-[14px]">
                Flax uses Google's paid Gemini API. Under Google's terms for paid API services, Google does not use your prompts or responses to train or improve its models. Your data is processed under Google's{' '}
                <a
                  href="https://cloud.google.com/terms/data-processing-addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-flax underline hover:text-flax-dark"
                >
                  Data Processing Addendum
                </a>
                .
              </p>
            </div>

            <div className="p-5 bg-white border border-rule rounded-xl">
              <p className="font-semibold text-ink">Anthropic Claude API</p>
              <p className="text-ink-muted mt-2 text-[14px]">
                Anthropic does not train its models on data submitted through the commercial Claude API. This applies by default with no opt-out required. Your inputs and outputs are not used for model improvement. See{' '}
                <a
                  href="https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-flax underline hover:text-flax-dark"
                >
                  Anthropic's data policy
                </a>
                .
              </p>
            </div>
          </div>

          <p className="mt-6">
            <strong>Neither AI provider trains on your data.</strong> Your meeting content is used solely to generate a response and is not retained by these providers for model training purposes.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Third-Party Integrations</h2>
          <p>
            Connections to Google Workspace, Slack, Notion, Jira, and HubSpot are established via <strong>OAuth 2.0</strong>. You authorize exactly what Flax can access and nothing more. Tokens are stored securely, scoped to your account, and never shared with other users.
          </p>
          <p className="mt-4">
            You can revoke any integration at any time from your account settings. Revoking access immediately stops Flax from reading or writing to that service.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Webhooks & API Keys</h2>
          <p>
            For integrations that push data into Flax (such as Granola or custom webhook sources), each connection uses a <strong>per-user API key</strong> with the prefix <code className="font-mono text-[13px] bg-surface px-1.5 py-0.5 rounded">flx_</code>. Keys are <strong>hashed with SHA-256</strong> before being stored. The raw key is shown only once at creation and cannot be retrieved afterward.
          </p>
          <p className="mt-4">
            Webhooks from Fireflies and Stripe are validated using <strong>HMAC-SHA256 signatures</strong> to ensure requests are genuine and have not been tampered with.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Network Security</h2>
          <p>
            The Flax API only accepts requests from <strong>app.joinflax.com</strong>. Cross-origin requests from other domains are blocked at the API level. Agent trigger endpoints are rate-limited per user to prevent abuse.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Monitoring & Error Tracking</h2>
          <p>
            Flax uses <strong>Sentry</strong> for real-time error tracking and <strong>LangFuse</strong> for AI pipeline observability. These tools help us detect and resolve issues quickly. Error reports are scoped to technical diagnostics and do not include the content of your meeting transcripts.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Data Retention</h2>
          <p>
            Your account data and meeting records are retained for as long as your account is active. Agent reasoning logs are cleaned up after 30 days. If you delete your account, your data is permanently removed within 30 days, except where retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-2xl text-ink mb-4">Questions or Concerns</h2>
          <p>
            If you have a security question, want to report a vulnerability, or need more information for your security review, please reach out directly:
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
