export default function PageShell({ eyebrow, title, children }) {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        {eyebrow && (
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-brand mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl text-ink mb-6">{title}</h1>
        <div className="text-ink/70 leading-relaxed space-y-4">{children}</div>
      </div>
    </main>
  )
}
