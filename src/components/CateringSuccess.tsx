export default function CateringSuccess() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#111111] px-5 py-12 text-white">
      <section className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#1A1A1A] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#31929B] text-3xl"
        >
          ✓
        </div>

        <p className="mt-7 font-heading text-xs font-bold uppercase tracking-[0.25em] text-[#55B6BE]">
          Catering request received
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
          Thank you
          <span className="block text-[#31929B]">for reaching out.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
          Your event details are on their way to our team. Damascus will be in
          touch soon to talk through your catering plans.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-[#31929B] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#287D85]"
          >
            Back to Damascus <span aria-hidden="true">→</span>
          </a>

          <a
            href="tel:+17052220045"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Call us
          </a>
        </div>

        <p className="mt-9 font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
          Damascus Shawarma · Sudbury
        </p>
      </section>
    </main>
  )
}   