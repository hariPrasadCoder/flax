import React, { useState } from 'react';
import { ArrowRight, Sparkles, FileText, Calendar, Zap, Copy, Check, Download, RefreshCw, ThumbsUp, ThumbsDown, AlertCircle } from 'lucide-react';

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
  <section id={id} className={`py-16 md:py-24 px-6 ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', onClick, disabled }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 px-5 py-2.5",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 px-5 py-2.5"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
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
        <span className="text-xs text-primary font-mono">/tools</span>
      </a>
      <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
        ← Back to Flax
      </a>
    </div>
  </nav>
);

// ============ HERO ============

const Hero: React.FC = () => (
  <Section className="pt-28 md:pt-32 pb-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,66,216,0.15),transparent_50%)]" />
    
    <div className="relative text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-mono text-primary mb-6">
        <Zap className="w-3.5 h-3.5" />
        Free Tools
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Level Up Your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
          LinkedIn Game
        </span>
      </h1>
      
      <p className="text-lg text-gray-400 max-w-xl mx-auto">
        Free tools to help you create better content, faster. No signup required.
      </p>
    </div>
  </Section>
);

// ============ POST GRADER TOOL ============

const PostGrader: React.FC = () => {
  const [post, setPost] = useState('');
  const [analysis, setAnalysis] = useState<null | {
    score: number;
    hook: { score: number; feedback: string };
    length: { score: number; feedback: string };
    readability: { score: number; feedback: string };
    cta: { score: number; feedback: string };
  }>(null);
  const [loading, setLoading] = useState(false);

  const analyzePost = () => {
    if (!post.trim()) return;
    setLoading(true);
    
    // Simulate analysis
    setTimeout(() => {
      const lines = post.split('\n').filter(l => l.trim());
      const firstLine = lines[0] || '';
      const wordCount = post.split(/\s+/).filter(w => w).length;
      const hasQuestion = post.includes('?');
      const hasCTA = /comment|share|follow|like|agree|thoughts/i.test(post);
      
      // Score components
      const hookScore = firstLine.length < 50 && (firstLine.includes('?') || /^[A-Z]/.test(firstLine)) ? 85 : firstLine.length < 80 ? 65 : 45;
      const lengthScore = wordCount >= 50 && wordCount <= 200 ? 90 : wordCount >= 30 && wordCount <= 300 ? 70 : 50;
      const readabilityScore = lines.length >= 3 && post.includes('\n\n') ? 85 : lines.length >= 2 ? 65 : 45;
      const ctaScore = hasCTA ? 90 : hasQuestion ? 70 : 40;
      
      const totalScore = Math.round((hookScore + lengthScore + readabilityScore + ctaScore) / 4);

      setAnalysis({
        score: totalScore,
        hook: { 
          score: hookScore, 
          feedback: hookScore >= 80 ? 'Strong hook! Short and attention-grabbing.' : hookScore >= 60 ? 'Decent hook, but could be punchier.' : 'Hook is too long or weak. Make it shorter and more intriguing.'
        },
        length: { 
          score: lengthScore, 
          feedback: lengthScore >= 80 ? 'Perfect length for engagement.' : lengthScore >= 60 ? 'Good length, but could be optimized.' : 'Consider adjusting length. 50-200 words typically performs best.'
        },
        readability: { 
          score: readabilityScore, 
          feedback: readabilityScore >= 80 ? 'Great formatting with good whitespace.' : readabilityScore >= 60 ? 'Add more line breaks for easier scanning.' : 'Break up your text more. Use short paragraphs.'
        },
        cta: { 
          score: ctaScore, 
          feedback: ctaScore >= 80 ? 'Clear call-to-action included.' : ctaScore >= 60 ? 'Has engagement element but could be stronger.' : 'Add a CTA: ask a question or invite comments.'
        },
      });
      setLoading(false);
    }, 1500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Section id="grader" className="border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">LinkedIn Post Grader</h2>
              <p className="text-sm text-gray-500">Get instant feedback on your post</p>
            </div>
          </div>

          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Paste your LinkedIn post here..."
            className="w-full h-64 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 resize-none text-sm leading-relaxed"
          />
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-gray-500">{post.split(/\s+/).filter(w => w).length} words</span>
            <Button onClick={analyzePost} disabled={!post.trim() || loading}>
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Analyze Post
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        <div>
          {analysis ? (
            <div className="space-y-6">
              {/* Overall Score */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                <div className="text-sm text-gray-500 mb-2">Overall Score</div>
                <div className={`text-6xl font-bold ${getScoreColor(analysis.score)}`}>
                  {analysis.score}
                </div>
                <div className="text-gray-500 text-sm mt-1">out of 100</div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                {[
                  { label: 'Hook', ...analysis.hook },
                  { label: 'Length', ...analysis.length },
                  { label: 'Readability', ...analysis.readability },
                  { label: 'Call-to-Action', ...analysis.cta },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{item.label}</span>
                      <span className={`text-sm font-mono ${getScoreColor(item.score)}`}>{item.score}/100</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                      <div className={`h-full ${getScoreBg(item.score)} rounded-full`} style={{ width: `${item.score}%` }} />
                    </div>
                    <p className="text-xs text-gray-400">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-8 rounded-xl bg-white/[0.01] border border-white/5 border-dashed">
              <div>
                <FileText className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <p className="text-gray-500">Paste your post and click analyze to get feedback</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

// ============ HOOK GENERATOR TOOL ============

const HookGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [hooks, setHooks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);

  const hookTemplates = [
    (t: string) => `Most founders get ${t} completely wrong.\n\nHere's what actually works:`,
    (t: string) => `I spent 3 years failing at ${t}.\n\nThen everything changed.`,
    (t: string) => `The truth about ${t} that nobody talks about:`,
    (t: string) => `"${t.charAt(0).toUpperCase() + t.slice(1)} doesn't matter."\n\nThat's what I believed. I was wrong.`,
    (t: string) => `Stop trying to ${t}.\n\nDo this instead:`,
    (t: string) => `The #1 mistake founders make with ${t}?`,
    (t: string) => `Unpopular opinion: ${t} is easier than everyone thinks.\n\nHere's why:`,
    (t: string) => `I asked 50 founders about ${t}.\n\nTheir answers surprised me:`,
  ];

  const generateHooks = () => {
    if (!topic.trim()) return;
    setLoading(true);
    
    setTimeout(() => {
      const shuffled = [...hookTemplates].sort(() => Math.random() - 0.5);
      setHooks(shuffled.slice(0, 5).map(template => template(topic.toLowerCase())));
      setLoading(false);
    }, 1000);
  };

  const copyHook = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Section id="hooks" className="border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Hook Generator</h2>
            <p className="text-sm text-gray-500">Generate scroll-stopping hooks for any topic</p>
          </div>
        </div>

        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., fundraising, content, hiring)"
            className="flex-1 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
            onKeyDown={(e) => e.key === 'Enter' && generateHooks()}
          />
          <Button onClick={generateHooks} disabled={!topic.trim() || loading}>
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Generate'}
          </Button>
        </div>

        {hooks.length > 0 && (
          <div className="space-y-3">
            {hooks.map((hook, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
                <p className="text-white whitespace-pre-line text-sm mb-3">{hook}</p>
                <button
                  onClick={() => copyHook(i, hook)}
                  className="text-xs text-gray-500 hover:text-primary flex items-center gap-1.5 transition-colors"
                >
                  {copied === i ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-green-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy hook
                    </>
                  )}
                </button>
              </div>
            ))}
            
            <button
              onClick={generateHooks}
              className="w-full py-3 rounded-xl border border-white/5 border-dashed text-gray-500 hover:text-white hover:border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Generate more
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

// ============ CONTENT CALENDAR ============

const ContentCalendar: React.FC = () => {
  const templates = [
    { name: 'Founder Weekly', desc: '5 posts per week for founder-led content', posts: 5 },
    { name: 'Growth Sprint', desc: 'Daily posting for 30 days', posts: 30 },
    { name: 'Minimal', desc: '3 posts per week, low effort', posts: 3 },
  ];

  return (
    <Section id="calendar" className="border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Content Calendar Templates</h2>
            <p className="text-sm text-gray-500">Download ready-to-use content calendars</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div key={template.name} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-300 group">
              <h3 className="text-white font-medium mb-1">{template.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{template.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{template.posts} posts/cycle</span>
                <a 
                  href={`mailto:contact@joinflax.com?subject=Content Calendar Request: ${template.name}&body=Hi! I'd like to download the ${template.name} content calendar template.`}
                  className="text-primary text-sm hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  Get Template
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Templates sent via email. We're building a direct download feature.
        </p>
      </div>
    </Section>
  );
};

// ============ BEST TIME TO POST ============

const BestTimeToPost: React.FC = () => {
  const [timezone, setTimezone] = useState('GMT');
  
  const times = [
    { day: 'Tuesday', time: '8:00 AM', engagement: 'Highest' },
    { day: 'Wednesday', time: '12:00 PM', engagement: 'High' },
    { day: 'Thursday', time: '8:00 AM', engagement: 'High' },
    { day: 'Monday', time: '10:00 AM', engagement: 'Good' },
    { day: 'Friday', time: '9:00 AM', engagement: 'Good' },
  ];

  return (
    <Section id="timing" className="border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Best Times to Post</h2>
            <p className="text-sm text-gray-500">Optimal posting times for B2B LinkedIn</p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-400">Based on B2B audience data</span>
            <select 
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white focus:outline-none"
            >
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
            </select>
          </div>

          <div className="space-y-3">
            {times.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                <div>
                  <span className="text-white font-medium">{item.day}</span>
                  <span className="text-gray-500 ml-2">{item.time} {timezone}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.engagement === 'Highest' ? 'bg-green-500/10 text-green-400' :
                  item.engagement === 'High' ? 'bg-primary/10 text-primary' :
                  'bg-white/5 text-gray-400'
                }`}>
                  {item.engagement}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-white mb-1">Pro tip</p>
                <p className="text-gray-400">These are general guidelines. Your optimal times depend on your specific audience. Test and track your own data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// ============ CTA ============

const CTA: React.FC = () => (
  <Section className="border-t border-white/5">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Want hands-on help with your content?
      </h2>
      <p className="text-gray-400 mb-6">
        These tools are just the start. Book a call to discuss how we can help you build real distribution.
      </p>
      <a 
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
      >
        Learn About Our Services
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </Section>
);

// ============ FOOTER ============

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-white font-medium">Flax</span>
        <span className="text-gray-600">/</span>
        <span className="text-gray-400">Tools</span>
      </div>
      <a href="mailto:contact@joinflax.com" className="text-sm text-gray-500 hover:text-primary transition-colors">
        contact@joinflax.com
      </a>
      <p className="text-xs text-gray-600">© 2026 Flax</p>
    </div>
  </footer>
);

// ============ MAIN APP ============

function ToolsApp() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PostGrader />
        <HookGenerator />
        <ContentCalendar />
        <BestTimeToPost />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default ToolsApp;
