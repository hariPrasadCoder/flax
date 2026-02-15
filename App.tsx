import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { Problem } from './components/Problem';
import { Stats } from './components/Stats';
import { VsAds } from './components/VsAds';
import { Positioning } from './components/Positioning';
import { Process } from './components/Process';
import { Audience } from './components/Audience';
import { Proof } from './components/Proof';
import { Differentiation } from './components/Differentiation';
import { Pricing } from './components/Pricing';
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
        <Featured />
        <Problem />
        <Stats />
        <VsAds />
        <Positioning />
        <Process />
        <Audience />
        <Proof />
        <Differentiation />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
