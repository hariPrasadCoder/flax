import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Users, Video, Play, Bell, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

// ============ LOGO ============

const FlaxLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8">
    <defs>
      <linearGradient id="gradNav" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#4A42D8'}}/>
        <stop offset="100%" style={{stopColor:'#6B63E8'}}/>
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="90" height="90" rx="20" fill="url(#gradNav)"/>
    <g fill="none" stroke="white" strokeWidth="2.5">
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(0, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(72, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(144, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(216, 50, 50)"/>
      <ellipse cx="50" cy="28" rx="10" ry="16" transform="rotate(288, 50, 50)"/>
    </g>
    <g stroke="white" strokeWidth="1.5" opacity="0.5">
      <line x1="50" y1="50" x2="50" y2="28"/>
      <line x1="50" y1="50" x2="69" y2="37"/>
      <line x1="50" y1="50" x2="62" y2="64"/>
      <line x1="50" y1="50" x2="38" y2="64"/>
      <line x1="50" y1="50" x2="31" y2="37"/>
    </g>
    <circle cx="50" cy="50" r="8" fill="white"/>
    <circle cx="50" cy="50" r="4" fill="url(#gradNav)"/>
  </svg>
);

// ============ COMPONENTS ============

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', showArrow, onClick, disabled }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 px-6 py-3",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-6 py-3"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className} group`}>
      {children}
      {showArrow && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

// ============ NAVBAR ============

const Navbar: React.FC = () => (
  <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4">
    <div className="flex items-center justify-between w-full max-w-6xl py-3 px-4 md:px-6">
      <a href="/" className="flex items-center gap-2">
        <FlaxLogo />
        <span className="text-lg font-semibold text-white">Flax</span>
        <span className="text-xs text-primary font-mono">/events</span>
      </a>
      <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
        ← Back to Flax
      </a>
    </div>
  </nav>
);

// ============ HERO ============

const Hero: React.FC = () => (
  <Section className="pt-28 md:pt-36 pb-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,66,216,0.15),transparent_50%)]" />
    
    <div className="relative text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-mono text-primary mb-6">
        <Video className="w-3.5 h-3.5" />
        Live Workshops
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Learn Distribution
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
          Live.
        </span>
      </h1>
      
      <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
        Free workshops and AMAs with founders who've built real distribution. Ask questions, get answers, level up.
      </p>
      
      <Button showArrow onClick={() => document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' })}>
        See Upcoming Events
      </Button>
    </div>
  </Section>
);

// ============ UPCOMING EVENTS ============

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      status: 'upcoming',
      date: 'Mar 15, 2026',
      time: '11:00 AM GMT',
      title: 'LinkedIn Content That Converts',
      desc: 'How to write posts that drive actual business results, not just vanity metrics.',
      host: 'Hari Prasad',
      spots: 47,
      totalSpots: 100,
    },
    {
      status: 'upcoming',
      date: 'Mar 29, 2026',
      time: '4:00 PM GMT',
      title: 'Founder AMA: Building in Public',
      desc: 'Open Q&A about content strategy, distribution, and growing your audience.',
      host: 'Hari & Sunjana',
      spots: 82,
      totalSpots: 100,
    },
  ];

  return (
    <Section id="upcoming" className="border-t border-white/5">
      <div className="text-center mb-12">
        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Upcoming</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Join us live
        </h2>
      </div>

      {events.length > 0 ? (
        <div className="space-y-6 max-w-3xl mx-auto">
          {events.map((event, i) => (
            <div key={i} className="group p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Date badge */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="inline-block bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
                    <div className="text-primary font-mono text-sm">{event.date.split(',')[0].split(' ')[0]}</div>
                    <div className="text-white text-2xl font-bold">{event.date.split(' ')[1].replace(',', '')}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {event.spots} spots left
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{event.desc}</p>
                  <p className="text-xs text-gray-500">Hosted by {event.host}</p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <Button className="w-full md:w-auto">Register Free</Button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{event.totalSpots - event.spots} registered</span>
                  <span>{event.spots} spots left</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${((event.totalSpots - event.spots) / event.totalSpots) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 max-w-md mx-auto">
          <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-white font-medium mb-2">No upcoming events</h3>
          <p className="text-gray-500 text-sm">Subscribe below to get notified when we schedule the next one.</p>
        </div>
      )}
    </Section>
  );
};

// ============ PAST EVENTS ============

const PastEvents: React.FC = () => {
  const pastEvents = [
    {
      date: 'Feb 2026',
      title: 'From Zero to 10K Followers',
      duration: '52 min',
      views: '1.2K',
    },
    {
      date: 'Jan 2026',
      title: 'Content Frameworks That Scale',
      duration: '48 min',
      views: '890',
    },
    {
      date: 'Dec 2025',
      title: 'The Hook Workshop',
      duration: '55 min',
      views: '2.1K',
    },
  ];

  return (
    <Section className="border-t border-white/5 bg-white/[0.01]">
      <div className="text-center mb-12">
        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Replays</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Missed one? <span className="text-gray-500">Catch up.</span>
        </h2>
        <p className="text-gray-400">Watch recordings of our past workshops.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pastEvents.map((event, i) => (
          <div key={i} className="group cursor-pointer">
            {/* Thumbnail */}
            <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-violet-500/10 border border-white/5 mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                {event.duration}
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mb-1">{event.date} • {event.views} views</div>
            <h3 className="text-white font-medium group-hover:text-primary transition-colors">{event.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

// ============ WHAT TO EXPECT ============

const WhatToExpect: React.FC = () => {
  const features = [
    { icon: Video, title: 'Live & Interactive', desc: 'Real-time workshops with Q&A, not pre-recorded videos.' },
    { icon: Users, title: 'Small Groups', desc: 'Limited spots so everyone gets their questions answered.' },
    { icon: Calendar, title: 'Monthly Schedule', desc: 'New workshops every 2 weeks on different topics.' },
    { icon: Play, title: 'Replays Available', desc: 'Can\'t make it live? Watch the recording after.' },
  ];

  return (
    <Section className="border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">What to Expect</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not another boring
            <span className="text-gray-500"> webinar.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Our events are designed to be actually useful. Show up, learn something specific, ask your questions, leave with action items.
          </p>

          <div className="space-y-3">
            {['Tactical, actionable content', 'Live Q&A with hosts', 'Real examples and case studies', 'Recordings sent after'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <item.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-white font-medium mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// ============ NOTIFY SECTION ============

const NotifySection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section className="border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Bell className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never miss an event
          </h2>
          
          <p className="text-gray-400 mb-8">
            Get notified when we schedule new workshops. No spam, just event announcements.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
              />
              <Button>Notify Me</Button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-400">You're on the list!</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

// ============ FOOTER ============

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-white font-medium">Flax</span>
        <span className="text-gray-600">/</span>
        <span className="text-gray-400">Events</span>
      </div>
      <a href="mailto:contact@joinflax.com" className="text-sm text-gray-500 hover:text-primary transition-colors">
        contact@joinflax.com
      </a>
      <p className="text-xs text-gray-600">© 2026 Flax</p>
    </div>
  </footer>
);

// ============ MAIN APP ============

function EventsApp() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <UpcomingEvents />
        <PastEvents />
        <WhatToExpect />
        <NotifySection />
      </main>
      <Footer />
    </div>
  );
}

export default EventsApp;
