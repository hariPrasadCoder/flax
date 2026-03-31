import React, { useEffect, useRef, useState } from 'react';

const events = [
  {
    time: '9:47 AM',
    status: 'done',
    title: 'Your meeting ends.',
    detail: 'Client Call · Alex, Sam, Nina · 47 minutes',
    color: 'hsl(0,0%,28%)',
    dot: 'hsl(0,0%,78%)',
  },
  {
    time: '9:47 AM',
    status: 'done',
    title: 'Flaxie starts reading.',
    detail: 'Extracting commitments from 1,240 words of notes',
    color: 'hsl(0,0%,28%)',
    dot: 'hsl(0,0%,78%)',
  },
  {
    time: '9:48 AM',
    status: 'active',
    title: 'Three actions drafted.',
    detail: 'Email to Alex · Calendar invite for Sam · Jira ticket for Nina',
    color: 'hsl(0,0%,10%)',
    dot: '#5A53E1',
    highlight: true,
  },
  {
    time: '9:48 AM',
    status: 'waiting',
    title: 'Waiting for you.',
    detail: '3 drafts ready · nothing sent yet · review when you are ready',
    color: 'hsl(0,0%,28%)',
    dot: '#F59E0B',
  },
];

const FeedLine: React.FC<{
  event: typeof events[0];
  index: number;
  visible: boolean;
}> = ({ event, index, visible }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '64px 20px 1fr',
      gap: '0 20px',
      alignItems: 'flex-start',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(12px)',
      transition: `opacity 0.5s ease ${index * 150}ms, transform 0.5s ease ${index * 150}ms`,
      marginBottom: index < events.length - 1 ? '0' : '0',
    }}
  >
    {/* Timestamp */}
    <div
      style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '0.65rem',
        color: 'hsl(0,0%,62%)',
        paddingTop: '2px',
        textAlign: 'right',
        letterSpacing: '0.02em',
      }}
    >
      {event.time}
    </div>

    {/* Dot + line */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: event.dot,
          flexShrink: 0,
          marginTop: '4px',
          boxShadow: event.highlight ? `0 0 12px ${event.dot}80` : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      />
      {index < events.length - 1 && (
        <div
          style={{
            width: '1px',
            height: '52px',
            background: 'hsl(0,0%,88%)',
            marginTop: '4px',
          }}
        />
      )}
    </div>

    {/* Content */}
    <div style={{ paddingBottom: index < events.length - 1 ? '0' : '0' }}>
      <p
        className="font-serif font-bold"
        style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          color: event.color,
          lineHeight: 1.2,
          marginBottom: '4px',
          letterSpacing: '-0.01em',
        }}
      >
        {event.title}
      </p>
      <p
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.7rem',
          color: 'hsl(0,0%,55%)',
          lineHeight: 1.5,
          paddingBottom: index < events.length - 1 ? '2.5rem' : '0',
        }}
      >
        {event.detail}
      </p>
    </div>
  </div>
);

export const TransferSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      style={{
        background: '#ffffff',
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(90,83,225,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'hsl(0,0%,52%)',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            How it works
          </span>
          <h2
            className="font-serif font-black"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'hsl(0,0%,10%)',
            }}
          >
            This is what happens
            <br />
            <span style={{ color: '#5A53E1' }}>after your next meeting.</span>
          </h2>
        </div>

        {/* Activity feed */}
        <div ref={ref}>
          {events.map((event, i) => (
            <FeedLine key={i} event={event} index={i} visible={visible} />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid hsl(0,0%,88%)',
          }}
        >
          <p
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.7rem',
              color: 'hsl(0,0%,52%)',
              lineHeight: 1.8,
            }}
          >
            Works with{' '}
            <span style={{ color: 'hsl(0,0%,15%)' }}>Granola</span>,{' '}
            <span style={{ color: 'hsl(0,0%,15%)' }}>Fireflies</span>,{' '}
            <span style={{ color: 'hsl(0,0%,15%)' }}>Google Meet</span>,
            {' '}or paste any meeting notes manually.
          </p>
        </div>

      </div>
    </section>
  );
};
