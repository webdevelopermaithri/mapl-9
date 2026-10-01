import { useEffect, useRef, useState } from 'react'

// Content for the five process stages. Colors double as the accent for the
// number badge and the active-state border/glow for that stage.
const stages = [
  {
    n: '01',
    title: 'Capture',
    copy: 'Humid air is drawn through specialised filter media — ambient humidity from just 30% RH upward is all that is needed.',
    color: '#2454c6',
  },
  {
    n: '02',
    title: 'Condense',
    copy: 'Proprietary heat-exchange core condenses the captured vapour into pure H\u2082O under precisely controlled conditions.',
    color: '#0f8f95',
  },
  {
    n: '03',
    title: 'Purify',
    copy: 'Advanced multi-stage filtration ensuring pristine water quality.',
    color: '#1a3a91',
  },
  {
    n: '04',
    title: 'Mineralise',
    copy: 'Re-mineralisation with essential minerals, developed in collaboration with CSIR-IICT \u2014 tuned per deployment and palate.',
    color: '#e08a3c',
  },
  {
    n: '05',
    title: 'Monitor',
    copy: 'IoT telemetry streams real-time quality, yield and energy data to our cloud control plane.',
    color: '#0f8f95',
  },
]

const ROTATE_MS = 2800

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    startAutoRotate()
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function startAutoRotate() {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % stages.length)
    }, ROTATE_MS)
  }

  function handleSelect(i) {
    setActive(i)
    startAutoRotate()
  }

  return (
    <section className="bg-haze pt-16 pb-10 lg:pt-20 lg:pb-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-6 bg-brand" /> How It Works
        </p>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-ink lg:text-5xl">
          Five stages, <em className="italic text-brand">one continuous flow.</em>
        </h2>
        <p className="mt-5 max-w-xl text-ink/60">
          From ambient air to pure drinking water.
        </p>

        <style>{`
          .process-flow-wrap {
            width: 100%;
            margin-top: 3rem;
            overflow-x: auto;
          }
          .process-flow {
            display: flex;
            align-items: stretch;
            width: 100%;
            min-width: 920px;
          }
          .stage-wrapper {
            display: flex;
            align-items: stretch;
            flex: 1;
          }
          .stage {
            position: relative;
            flex: 1;
            min-height: 150px;
            padding: 22px 34px 22px 26px;
            border: 1px solid #d9e1ec;
            background: #ffffff;
            clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 7% 50%);
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: background 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          }
          .stage:first-child { clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%); padding-left: 20px; }
          .stage:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(36, 84, 198, 0.12); }
          .stage.active {
            background: #f3f7ff;
            border-color: var(--stage-accent, #2454c6);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(36, 84, 198, 0.18);
          }
          .stage-number {
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #edf2fb;
            color: var(--stage-accent, #2454c6);
            border: 1px solid #cbd7ed;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 10px;
            flex-shrink: 0;
            transition: background 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
          }
          .stage.active .stage-number {
            background: var(--stage-accent, #2454c6);
            color: #ffffff;
            border-color: var(--stage-accent, #2454c6);
            transform: scale(1.1);
            box-shadow: 0 0 0 5px rgba(36, 84, 198, 0.12);
          }
          .stage-title {
            font-family: 'Georgia', 'Times New Roman', serif;
            font-size: 20px;
            font-weight: 600;
            color: #24344d;
            margin: 0 0 6px;
          }
          .stage-copy {
            font-size: 13.5px;
            line-height: 1.5;
            color: #5b6b83;
            margin: 0;
          }
          .connector {
            position: relative;
            width: 26px;
            flex-shrink: 0;
            height: 3px;
            align-self: center;
            background: #d6dfeb;
            overflow: hidden;
          }
          .connector::after {
            content: '';
            position: absolute;
            top: 0;
            left: -20px;
            width: 20px;
            height: 3px;
            background: var(--stage-accent, #2454c6);
            animation: moveLine 2s linear infinite;
          }
          .connector::before {
            content: '';
            position: absolute;
            right: 0;
            top: -4px;
            border-left: 8px solid #d6dfeb;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
          @keyframes moveLine {
            from { transform: translateX(0); }
            to { transform: translateX(46px); }
          }
          @media (max-width: 900px) {
            .stage { min-height: 130px; padding: 18px 28px 18px 22px; }
            .stage-title { font-size: 18px; }
            .stage-copy { font-size: 13px; }
          }
          @media (prefers-reduced-motion: reduce) {
            .connector::after { animation: none; }
            .stage { transition: none; }
          }
        `}</style>

        <div className="process-flow-wrap">
          <div className="process-flow">
            {stages.map((stage, i) => (
              <div className="stage-wrapper" key={stage.n}>
                <div
                  className={`stage animate-fade-up ${i === active ? 'active' : ''}`}
                  style={{ '--stage-accent': stage.color, animationDelay: `${i * 0.08}s` }}
                  onClick={() => handleSelect(i)}
                >
                  <div className="stage-number">{stage.n}</div>
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-copy">{stage.copy}</p>
                </div>
                {i !== stages.length - 1 && <div className="connector" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
