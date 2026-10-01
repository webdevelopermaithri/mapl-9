import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import bubblesVideo from '../../assets/shared/bubbles-bg.mp4'

export default function Newsletter() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal relative overflow-hidden bg-mist py-28">
      {/* floating bubbles video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src={bubblesVideo} type="video/mp4" />
      </video>

      {/* ambient floating dots */}
      <span className="absolute left-[12%] top-10 h-3 w-3 animate-float rounded-full bg-brand/20" />
      <span className="absolute right-[18%] top-24 h-4 w-4 animate-float rounded-full bg-brand/15 [animation-delay:1.5s]" />
      <span className="absolute bottom-16 left-[28%] h-2.5 w-2.5 animate-float rounded-full bg-brand/20 [animation-delay:0.8s]" />
      <span className="absolute bottom-10 right-[30%] h-3 w-3 animate-float rounded-full bg-brand/15 [animation-delay:2.2s]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-brand">
          <span className="h-px w-8 bg-brand" />
          STAY IN THE LOOP
          <span className="h-px w-8 bg-brand" />
        </div>
        <h2 className="font-serif text-4xl text-ink sm:text-5xl">
          The Maithri <span className="italic text-brand">Dispatch.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-ink/60">
          One monthly email. New AquaTalks episodes, deep-dive essays, and project updates. No noise, ever.
        </p>

        <Link
          to="/design-your-water-system#contact"
          className="mx-auto mt-9 flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg"
        >
          Subscribe to Dispatch
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-white" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
