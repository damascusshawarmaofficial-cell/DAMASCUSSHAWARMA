import { motion } from "motion/react"

const hours = [
  { day: "Monday", time: "11:00 AM – 11:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 11:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 11:00 PM" },
  { day: "Thursday", time: "11:00 AM – 11:00 PM" },
  { day: "Friday", time: "11:00 AM – 11:00 PM" },
  { day: "Saturday", time: "11:00 AM – 11:00 PM" },
  { day: "Sunday", time: "11:00 AM – 9:00 PM" },
]

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=1210+Lasalle+Blvd+Unit+C+Greater+Sudbury+ON"

function LocationSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111111] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      {/* ===================================== */}
      {/* BACKGROUND */}
      {/* ===================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#087F87]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#31929B]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* ===================================== */}
        {/* HEADING */}
        {/* ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-14"
        >
          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#31929B]" />

            <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#31929B]">
              Visit Damascus
            </p>

          </div>

          <h2 className="mt-5 max-w-4xl font-display text-6xl font-black uppercase leading-[0.82] tracking-tight text-white sm:text-7xl lg:text-9xl">
            Come hungry.
            <br />

            <span className="text-[#31929B]">
              Leave happy.
            </span>
          </h2>

          <p className="mt-7 max-w-xl font-body text-base leading-7 text-white/50 sm:text-lg">
            Find us in Greater Sudbury and come enjoy
            authentic Syrian flavours, freshly prepared for you.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* MAIN CARD */}
        {/* ===================================== */}

        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#1A1A1A] lg:grid-cols-2">

          {/* ================================= */}
          {/* INFORMATION */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="p-7 sm:p-10 lg:p-14"
          >

            {/* ================================= */}
            {/* LOCATION */}
            {/* ================================= */}

            <div>

              <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/30">
                Location
              </p>

              <h3 className="mt-3 font-heading text-2xl font-extrabold text-white sm:text-3xl">
                Damascus Shawarma
              </h3>

              <p className="mt-3 font-body text-base leading-7 text-white/50">
                1210 Lasalle Blvd, Unit C
                <br />
                Greater Sudbury, Ontario
              </p>

              {/* Directions */}

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  font-heading
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-[#31929B]
                  transition-colors
                  hover:text-white
                "
              >
                Get Directions

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

            {/* ================================= */}
            {/* CONTACT */}
            {/* ================================= */}

            <div className="mt-10 border-t border-white/10 pt-8">

              <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/30">
                Contact
              </p>

              <a
                href="tel:+17052220045"
                className="
                  mt-3
                  block
                  font-heading
                  text-2xl
                  font-extrabold
                  text-white
                  transition-colors
                  hover:text-[#31929B]
                "
              >
                (705) 222-0045
              </a>

              <p className="mt-2 font-body text-sm text-white/35">
                Call us directly for pickup and inquiries.
              </p>

            </div>

            {/* ================================= */}
            {/* HALAL BADGE */}
            {/* ================================= */}

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#31929B]/25 bg-[#087F87]/10 px-4 py-2.5">

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#31929B] text-xs font-black text-white">
                ✓
              </span>

              <span className="font-heading text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/80">
                Halal
              </span>

            </div>

            {/* ================================= */}
            {/* HOURS */}
            {/* ================================= */}

            <div className="mt-10 border-t border-white/10 pt-8">

              <div className="flex items-center justify-between">

                <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/30">
                  Opening Hours
                </p>

                <span className="rounded-full bg-[#087F87]/15 px-3 py-1 font-heading text-[9px] font-extrabold uppercase tracking-wider text-[#31929B]">
                  Open Daily
                </span>

              </div>

              <div className="mt-5 space-y-3">

                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      border-b
                      border-white/5
                      pb-3
                      text-sm
                    "
                  >
                    <span className="font-body text-white/45">
                      {item.day}
                    </span>

                    <span className="whitespace-nowrap font-heading text-xs font-bold text-white/80">
                      {item.time}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* ================================= */}
            {/* BUTTONS */}
            {/* ================================= */}

            <div className="mt-10 flex flex-wrap gap-3">

              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#087F87]
                  px-6
                  py-3.5
                  font-heading
                  text-sm
                  font-extrabold
                  text-white
                  shadow-lg
                  shadow-[#087F87]/20
                  transition-colors
                  hover:bg-[#31929B]
                "
              >
                Get Directions

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

              <motion.a
                href="tel:+17052220045"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  px-6
                  py-3.5
                  font-heading
                  text-sm
                  font-extrabold
                  text-white
                  transition-all
                  hover:border-white/30
                  hover:bg-white/5
                "
              >
                Call Us
              </motion.a>

            </div>

          </motion.div>

          {/* ================================= */}
          {/* MAP */}
          {/* ================================= */}

          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              group
              relative
              min-h-[450px]
              overflow-hidden
              bg-[#242424]
              lg:min-h-full
            "
          >

            {/* ================================= */}
            {/* FAKE MAP */}
            {/* ================================= */}

            <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-[1.02]">

              <div className="absolute left-[15%] top-[20%] h-px w-[80%] rotate-12 bg-white/20" />

              <div className="absolute left-[5%] top-[45%] h-px w-[100%] -rotate-6 bg-white/20" />

              <div className="absolute left-[20%] top-[70%] h-px w-[90%] rotate-3 bg-white/20" />

              <div className="absolute left-[35%] top-0 h-full w-px rotate-[25deg] bg-white/15" />

              <div className="absolute left-[65%] top-0 h-full w-px -rotate-[20deg] bg-white/15" />

              <div className="absolute left-[10%] top-[60%] h-px w-[70%] rotate-[18deg] bg-white/10" />

              <div className="absolute left-[75%] top-0 h-full w-px rotate-[10deg] bg-white/10" />

            </div>

            {/* ================================= */}
            {/* LOCATION MARKER */}
            {/* ================================= */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="relative">

                <div className="absolute -inset-5 animate-ping rounded-full bg-[#31929B]/20" />

                <div className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#087F87]
                  shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                ">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                </div>

              </div>

              {/* Label */}

              <div className="
                absolute
                left-1/2
                top-20
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                border
                border-white/10
                bg-black/75
                px-4
                py-2
                font-heading
                text-[10px]
                font-extrabold
                uppercase
                tracking-wider
                text-white
                backdrop-blur-md
              ">
                Damascus Shawarma
              </div>

            </div>

            {/* ================================= */}
            {/* MAP BOTTOM LABEL */}
            {/* ================================= */}

            <div className="
              absolute
              bottom-6
              left-6
              right-6
              flex
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-black/40
              px-5
              py-4
              backdrop-blur-md
            ">

              <div>

                <p className="font-heading text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/40">
                  Greater Sudbury
                </p>

                <p className="mt-1 font-body text-sm text-white/70">
                  1210 Lasalle Blvd, Unit C
                </p>

              </div>

              <span className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#087F87]
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                →
              </span>

            </div>

          </motion.a>

        </div>

      </div>
    </section>
  )
}

export default LocationSection