import React from 'react';

export const Hero: React.FC = () => (
  <section
    className="dot-grid"
    style={{
      minHeight: '100vh',
      backgroundColor: 'hsl(0,0%,10%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Primary glow — large central orb */}
    <div
      className="glow-drift"
      style={{
        position: 'absolute',
        top: '-5%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1100px',
        height: '1100px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90,83,225,0.22) 0%, rgba(90,83,225,0.06) 45%, transparent 68%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />

    {/* Secondary glow — off-axis, adds depth */}
    <div
      style={{
        position: 'absolute',
        top: '30%',
        right: '-8%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90,83,225,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'glow-drift 16s ease-in-out infinite reverse',
      }}
    />

    {/* Decoration lines — thin horizontal accents scattered across hero */}
    {([
      { top: '22%', left: '7%',  width: 72,  opacity: 0.09 },
      { top: '38%', right: '9%', width: 52,  opacity: 0.07 },
      { top: '58%', left: '4%',  width: 96,  opacity: 0.06 },
      { top: '70%', right: '6%', width: 64,  opacity: 0.08 },
      { top: '82%', left: '14%', width: 40,  opacity: 0.05 },
    ] as Array<{top:string;left?:string;right?:string;width:number;opacity:number}>).map((l, i) => (
      <div key={i} style={{
        position: 'absolute',
        top: l.top,
        left: l.left,
        right: l.right,
        width: l.width,
        height: '1px',
        background: `rgba(255,255,255,${l.opacity})`,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
    ))}

    {/* Main content */}
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 2rem 2rem',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '900px',
      }}
    >
      {/* Label */}
      <div className="inline-flex items-center gap-2 mb-10 opacity-0-start animate-fade-in">
        <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
        <span
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Early Access
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-serif font-black opacity-0-start animate-fade-in-up delay-100"
        style={{
          fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#fff',
          whiteSpace: 'nowrap',
        }}
      >
        Your meeting ends.
        <br />
        <span style={{ color: '#5A53E1' }}>Flaxie takes over.</span>
      </h1>

      {/* Sub */}
      <p
        className="opacity-0-start animate-fade-in-up delay-200"
        style={{
          marginTop: '2rem',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 'clamp(0.7rem, 1.3vw, 0.85rem)',
          color: 'rgba(255,255,255,0.38)',
          letterSpacing: '0.02em',
          lineHeight: 2,
          maxWidth: '400px',
          hyphens: 'none',
          wordBreak: 'keep-all',
        }}
      >
        Meet Flaxie, your AI personal assistant.
        <br />
        The work gets done. You did not have to ask.
      </p>

      {/* CTAs */}
      <div
        className="opacity-0-start animate-fade-in-up delay-300"
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <button
          className="btn btn-primary"
          data-tally-open="GxLXyQ"
          data-tally-layout="modal"
          data-tally-width="400"
          data-tally-form-events-forwarding="1"
        >
          Get Early Access
        </button>
        <button
          className="btn"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'rgba(255,255,255,0.5)',
            padding: '0.65rem 1.5rem',
            fontSize: '0.875rem',
            transition: 'border-color 0.15s, color 0.15s',
          }}
          data-cal-link="joinflax/strategy-call"
          data-cal-namespace="strategy-call"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = 'rgba(255,255,255,0.4)';
            el.style.color = 'rgba(255,255,255,0.85)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = 'rgba(255,255,255,0.18)';
            el.style.color = 'rgba(255,255,255,0.5)';
          }}
        >
          Book a demo
        </button>
      </div>
    </div>

    {/* Supported by Antler */}
    <div
      className="opacity-0-start animate-fade-in delay-500"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <span
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.6rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
        }}
      >
        Supported by
      </span>
      <img
        src="/Antler_logo.svg"
        alt="Antler"
        style={{
          height: '22px',
          width: 'auto',
          filter: 'brightness(0) invert(1)',
          opacity: 0.25,
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.55')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.25')}
      />
    </div>
  </section>
);
