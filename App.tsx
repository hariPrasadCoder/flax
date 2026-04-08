import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar }           from './components/Navbar';
import { Hero }             from './components/Hero';
import { TransferSection }  from './components/TransferSection';
import { OutcomesSection }  from './components/OutcomesSection';
import { ApprovalSection }  from './components/ApprovalSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { LearnsSection }    from './components/LearnsSection';
import { WorksWith }        from './components/WorksWith';
import { WhoItsFor }        from './components/WhoItsFor';
import { TrustSection }     from './components/TrustSection';
import { GoogleDataSection } from './components/GoogleDataSection';
import { CTASection }       from './components/CTASection';
import { Footer }           from './components/Footer';
import StudiosApp from './StudiosApp';
import BookApp from './BookApp';
import AssistantApp from './AssistantApp';
import CompareApp from './CompareApp';
import { PrivacyPolicy }    from './components/PrivacyPolicy';
import { TermsOfService }   from './components/TermsOfService';

function useCalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = (a: any, ar: any) => a.q.push(ar);
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; }
        if (ar[0] === L) { const api: any = function () { p(api, arguments); }; const ns = ar[1]; api.q = api.q || []; if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ['initNamespace', ns]); } else p(cal, ar); return; } p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');
    const w = window as any;
    w.Cal('init', 'strategy-call', { origin: 'https://app.cal.com' });
    w.Cal.ns['strategy-call']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
  }, []);
}

function HomePage() {
  useCalEmbed();
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TransferSection />
        <OutcomesSection />
        <ApprovalSection />
        <CapabilitiesSection />
        <WorksWith />
        <LearnsSection />
        <WhoItsFor />
        <TrustSection />
        <GoogleDataSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/studios"   element={<StudiosApp />} />
        <Route path="/ea"        element={<AssistantApp />} />
        <Route path="/assistant" element={<Navigate to="/ea" replace />} />
        <Route path="/book"    element={<BookApp />} />
        <Route path="/compare"  element={<CompareApp />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms"   element={<TermsOfService />} />
        <Route path="*"        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
