  import { motion } from "motion/react"

  function Footer() {
    return (
      <footer className="relative overflow-hidden bg-[#111111] text-white">

        {/* =========================================================
            SUBTLE BACKGROUND GLOW
        ========================================================= */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#31929B]/[0.05] blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#087F87]/[0.04] blur-[120px]" />


        <div className="relative mx-auto max-w-[1400px] px-5 pb-10 sm:px-8 lg:px-12">

          {/* =========================================================
              PREMIUM FOOTER STATEMENT
          ========================================================= */}

          <div className="border-b border-white/[0.08] pb-14 pt-8 sm:pb-16 sm:pt-10">

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >

              {/* Eyebrow */}

              <div className="mb-5 flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#31929B]" />

                <p className="font-heading text-[8px] font-bold uppercase tracking-[0.38em] text-[#31929B]">
                  Damascus Shawarma
                </p>

              </div>


              {/* Main Statement */}

              <h2
                className="
                  font-display
                  text-[2.7rem]
                  font-black
                  uppercase
                  leading-[0.84]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[3.4rem]
                  md:text-[4rem]
                  lg:text-[4.6rem]
                "
              >

                <span>
                  The only thing
                </span>

                <br />

                <span>
                  better than{" "}
                </span>

                <span className="text-[#31929B]">
                  shawarma
                </span>

                <br />

                <span>
                  is more{" "}
                </span>

                <span className="text-[#31929B]">
                  shawarma.
                </span>

              </h2>


              {/* Small finishing line */}

              <div className="mt-6 flex items-center gap-3">

                <div className="h-px w-7 bg-[#31929B]/60" />

                <p className="font-heading text-[8px] font-bold uppercase tracking-[0.32em] text-white/35">
                  See you at the table
                </p>

              </div>

            </motion.div>

          </div>


          {/* =========================================================
              INFORMATION GRID
          ========================================================= */}

          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">


            {/* =====================================================
                BRAND
            ===================================================== */}

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">

                  <img
                    src="/logo.jpg"
                    alt="Damascus Shawarma"
                    className="h-full w-full object-cover"
                  />

                </div>


                <div>

                  <p className="font-heading text-sm font-extrabold tracking-[0.16em]">
                    DAMASCUS
                  </p>

                  <p className="mt-0.5 font-heading text-[9px] font-bold uppercase tracking-[0.28em] text-white/35">
                    Shawarma
                  </p>

                </div>

              </div>


              <p className="mt-6 max-w-xs font-body text-sm leading-6 text-white/45">
                Authentic Syrian flavours, freshly prepared
                in Greater Sudbury.
              </p>


              {/* Halal */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
  <div className="inline-flex items-center gap-2 rounded-full border border-[#31929B]/30 bg-[#087F87]/10 px-3 py-2">
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#31929B] text-[10px] font-black text-white">
      ✓
    </span>
    <span className="font-heading text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/75">
      Halal
    </span>
  </div>

  <div className="inline-flex items-center gap-2 rounded-full border border-[#31929B]/30 bg-[#087F87]/10 px-3 py-2">
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#31929B] text-[8px] font-black text-white">
      HMA
    </span>
    <span className="font-heading text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/75">
      Certified
    </span>
  </div>
</div>

            </div>


            {/* =====================================================
                EXPLORE
            ===================================================== */}

            <div>

              <p className="mb-6 font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/30">
                Explore
              </p>


              <div className="flex flex-col items-start gap-3.5">

                <FooterLink href="#home">
                  Home
                </FooterLink>

                <FooterLink href="#full-menu">
                  Menu
                </FooterLink>

                <FooterLink href="#story">
                  Our Story
                </FooterLink>

                <FooterLink href="#catering">
                  Catering
                </FooterLink>

                <FooterLink href="#order">
                  Order Now
                </FooterLink>

              </div>

            </div>


            {/* =====================================================
                VISIT US
            ===================================================== */}

<div id="visit-us">
              <p className="mb-6 font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/30">
                Visit Us
              </p>


              <a
                href="https://www.google.com/maps/search/?api=1&query=1210+Lasalle+Blvd+Unit+C+Greater+Sudbury+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="group block font-body text-sm leading-6 text-white/55 transition-colors duration-300 hover:text-white"
              >

                <span className="block">
                  1210 Lasalle Blvd,
                </span>

                <span className="block">
                  Unit C
                </span>

                <span className="block">
                  Greater Sudbury, ON
                </span>


                <span className="mt-5 inline-flex items-center gap-2 font-heading text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#31929B]">

                  Get Directions

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </span>

              </a>

            </div>


            {/* =====================================================
                HOURS
            ===================================================== */}

            <div>

              <p className="mb-6 font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/30">
                Hours
              </p>


              <div className="space-y-4 font-body text-sm">

                <div className="flex items-start justify-between gap-5 border-b border-white/[0.07] pb-3">

                  <span className="text-white/45">
                    Monday – Saturday
                  </span>

                  <span className="whitespace-nowrap font-heading font-bold text-white">
                    11 AM – 11 PM
                  </span>

                </div>


                <div className="flex items-start justify-between gap-5">

                  <span className="text-white/45">
                    Sunday
                  </span>

                  <span className="whitespace-nowrap font-heading font-bold text-white">
                    11 AM – 9 PM
                  </span>

                </div>

              </div>


              {/* Phone */}

              <a
                href="tel:+17052220045"
                className="mt-7 inline-flex items-center gap-3 font-heading text-sm font-extrabold text-[#31929B] transition-colors duration-300 hover:text-white"
              >

                <span className="text-base">
                  ☎
                </span>

                (705) 222-0045

              </a>

            </div>

          </div>


          {/* =========================================================
              ORDER ONLINE
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-[1.5rem]
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              transition-colors
              duration-500
              hover:border-[#31929B]/20
              sm:p-7
            "
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">


              {/* Text */}

              <div>

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#31929B]" />

                  <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/35">
                    Order Online
                  </p>

                </div>


                <p className="mt-2 font-body text-sm text-white/40">
                  Get your Damascus favourites delivered or ready for pickup.
                </p>

              </div>


              {/* Platforms */}

              <div className="flex flex-wrap gap-2">

                <PlatformLink
                  href="https://www.skipthedishes.com/damascus-restaurant"
                  name="Skip"
                />

                <PlatformLink
                  href="https://www.doordash.com/en-CA/store/damascus-restaurant-greater-sudbury-22978705/12697231/"
                  name="DoorDash"
                />

                <PlatformLink
                  href="https://www.ubereats.com/ca/store/damascus-shawarma"
                  name="Uber Eats"
                />

              </div>

            </div>

          </motion.div>


          {/* =========================================================
              BOTTOM BAR
          ========================================================= */}

          <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">


            {/* Copyright */}

            <p className="font-body text-xs text-white/25">
              © {new Date().getFullYear()} Damascus Shawarma.
              All rights reserved.
            </p>


            {/* Social */}

            {/* Social */}

{/* Social */}

<div className="flex items-center gap-3">
  <a
    href="https://www.instagram.com/damascus.shawarma1/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Damascus Shawarma on Instagram"
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E4405F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F77737]"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  </a>

  <a
    href="https://www.facebook.com/damascusrestaurant2018"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Damascus Shawarma on Facebook"
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#1877F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#4593FF]"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2H10V21h3.4Z" />
    </svg>
  </a>
</div>

          </div>

        </div>

      </footer>
    )
  }


  /* =============================================================
    FOOTER NAVIGATION LINK
  ============================================================= */

  function FooterLink({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) {
    return (
      <a
        href={href}
        className="
          group
          flex
          items-center
          gap-2
          font-body
          text-sm
          text-white/50
          transition-all
          duration-300
          hover:translate-x-1
          hover:text-white
        "
      >

        <span>
          {children}
        </span>


        <span
          className="
            -translate-x-1
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          →
        </span>

      </a>
    )
  }


  /* =============================================================
    ORDERING PLATFORM BUTTON
  ============================================================= */

  function PlatformLink({
    href,
    name,
  }: {
    href: string
    name: string
  }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-full
          border
          border-white/[0.09]
          bg-white/[0.035]
          px-5
          py-2.5
          font-heading
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.08em]
          text-white/55
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-[#31929B]/50
          hover:bg-[#087F87]
          hover:text-white
        "
      >
        {name}
      </a>
    )
  }


  export default Footer