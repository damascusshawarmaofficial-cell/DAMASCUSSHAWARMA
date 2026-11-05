import { motion } from "motion/react"
import strawberryCupPhoto from "../assets/sb.jpeg"
import strawberryCupVideo from "../assets/sb.mp4"

function StrawberryCupSection() {
  return (
    <section
      id="strawberry-cups"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.16),transparent_42%),linear-gradient(135deg,#31929B_0%,#087F87_55%,#05666D_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Strawberry photo and video */}
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3 p-3 sm:gap-4 sm:p-4 lg:min-h-[560px]">
              <div className="group relative min-h-[320px] overflow-hidden rounded-[1.4rem] bg-[#F1F1EE] sm:min-h-[420px] lg:min-h-0">
                <img
                  src={strawberryCupPhoto}
                  alt="Fresh strawberry cup topped with chocolate"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                  Made fresh
                </span>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[1.4rem] bg-[#222222] sm:min-h-[420px] lg:min-h-0">
                <video
                  src={strawberryCupVideo}
                  autoPlay
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  onEnded={(event) => event.currentTarget.pause()}
                  aria-label="Video of a freshly prepared strawberry cup"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Strawberry cup details */}
            <div className="flex flex-col justify-center px-7 pb-9 pt-5 sm:px-10 sm:pb-11 lg:px-12 lg:py-14">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#087F87]" />
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-[#087F87] sm:text-xs">
                  A little sweet. A lot of fresh.
                </p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
                Strawberry
                <span className="mt-2 block text-[#087F87]">cups.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                Fresh strawberries, delicious flavours, and rich chocolate,
                made fresh just for you. Pre-order your cup and enjoy a sweet
                Damascus treat.
              </p>

              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#087F87]/20 bg-[#087F87]/[0.06] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#087F87]" />
                <span className="font-heading text-[9px] font-bold uppercase tracking-[0.18em] text-black/65 sm:text-[10px]">
                  Pre-order · Made fresh
                </span>
              </div>

            <a
  href="tel:+17052220045"
  className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#087F87] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087F87]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#076D74] hover:shadow-xl"
>
  Call to pre-order
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

<p className="mt-4 text-xs text-black/45">
  Call us to place your order.
</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StrawberryCupSection