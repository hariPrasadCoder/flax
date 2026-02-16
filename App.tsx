import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { TwoPaths } from './components/TwoPaths';
import { Credibility } from './components/Credibility';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "flax", origin: "https://app.cal.com" });
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

export default App;
