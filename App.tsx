import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getCalApi } from "@calcom/embed-react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { TwoPaths } from './components/TwoPaths';
import { Credibility } from './components/Credibility';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Book page - redirects to Cal.com
function BookPage() {
  useEffect(() => {
    window.location.href = 'https://cal.com/joinflax/strategy-call';
  }, []);
  
  return (
    <div className="bg-background min-h-screen flex items-center justify-center text-white">
      <p className="text-xl">Redirecting to booking...</p>
    </div>
  );
}

// Main landing page
function HomePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "strategy-call", origin: "https://app.cal.com" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Problem />
        <TwoPaths />
        <Credibility />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
