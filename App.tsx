import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar }       from './components/Navbar';
import { Hero }         from './components/Hero';
import { Problem }      from './components/Problem';
import { FlaxieIntro }  from './components/FlaxieIntro';
import { HowItWorks }   from './components/HowItWorks';
import { FlaxieAsks }   from './components/FlaxieAsks';
import { WhoItsFor }    from './components/WhoItsFor';
import { CTASection }   from './components/CTASection';
import { Footer }       from './components/Footer';
import StudiosApp from './StudiosApp';

function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <FlaxieIntro />
        <HowItWorks />
        <FlaxieAsks />
        <WhoItsFor />
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
        <Route path="/studios" element={<StudiosApp />} />
        <Route path="*"        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
