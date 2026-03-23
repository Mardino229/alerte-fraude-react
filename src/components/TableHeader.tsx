

export default function TableHeader({activeCount}: {activeCount: number}) {
    return (
        <section className="mb-12 relative overflow-hidden rounded-xl bg-surface-container p-8 border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] block mb-2">Statut de Vigilance</span>
                <h3 className="font-headline text-5xl font-extrabold tracking-tighter">
                  <span className="text-primary">{activeCount}</span>
                  <span className="text-on-surface"> alerte(s) active(s)</span>
                </h3>
              </div>
            </div>
          </section>
    )

}
        