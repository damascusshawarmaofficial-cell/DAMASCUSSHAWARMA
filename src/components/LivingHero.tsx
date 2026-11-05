
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import videoA from "../assets/videos/a.mp4";
import videoB from "../assets/videos/b.mp4";
import videoC from "../assets/videos/c.mp4";
import videoD from "../assets/videos/d.mp4";

import image4 from "../assets/4.jpeg";
import image8 from "../assets/8.jpeg";

type MediaItem = {
  src: string;
};

const mediaItems: MediaItem[] = [
  { src: videoA },
  { src: videoB },
  { src: videoC },
  { src: videoD },
];

function LivingHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeVideo = mediaItems[activeIndex];

  // Automatically change videos every 5 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(
        (current) => (current + 1) % mediaItems.length
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Start the active video.
  useEffect(() => {
    const videos = [
      desktopVideoRef.current,
      mobileVideoRef.current,
    ];

    videos.forEach((video) => {
      if (!video) return;

      video.muted = true;
      video.volume = 0;
      video.currentTime = 0;

      video.play().catch(() => {
        // Autoplay may be restricted by the browser.
      });
    });
  }, [activeIndex]);

  const videoIndicators = (
    <div className="flex items-center gap-2">
      {mediaItems.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setActiveIndex(index)}
          aria-label={`Show video ${index + 1}`}
          aria-current={activeIndex === index}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            activeIndex === index
              ? "w-10 bg-[#31929B]"
              : "w-2 bg-white/40 hover:bg-white/80"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#111111] text-white"
    >

      {/* =====================================================
          DESKTOP HERO
      ===================================================== */}

      <div className="relative hidden min-h-[calc(100svh-78px)] overflow-hidden lg:block">

        {/* LEFT BACKGROUND IMAGE */}

        <div className="absolute inset-0">

          <img
            src={image4}
            alt=""
            className="absolute inset-y-0 left-0 h-full w-[42%] object-cover"
          />

          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/90 via-black/75 to-black/30" />

          <div className="absolute inset-y-0 left-[28%] w-[30%] bg-gradient-to-r from-transparent via-black/35 to-transparent" />

        </div>

        {/* RIGHT BACKGROUND IMAGE */}

        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[29%] overflow-hidden">

          <img
            src={image8}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#111111] via-[#111111]/65 to-transparent" />

          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black/25 to-transparent" />

        </div>

        {/* CENTRE VIDEO */}

        <div className="absolute inset-y-0 left-[57%] z-[2] flex w-[48%] -translate-x-1/2 items-center justify-center">

          <AnimatePresence mode="wait">

            <motion.div
              key={`desktop-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative h-full w-full overflow-hidden bg-black"
            >

              <video
                ref={desktopVideoRef}
                src={activeVideo.src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              <div className="pointer-events-none absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-black/35 to-transparent" />

              <div className="pointer-events-none absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-black/35 to-transparent" />

            </motion.div>

          </AnimatePresence>

        </div>

        {/* DESKTOP CINEMATIC OVERLAY */}

        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-black/30 via-transparent to-black/15" />

        {/* DESKTOP CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-78px)] max-w-7xl items-center px-6 pt-20 lg:px-8">

          <div className="relative max-w-3xl lg:-left-28 xl:-left-36">

            {/* MAIN HEADLINE */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-white sm:text-base">
                THE ONLY THING BETTER THAN
              </p>

              <h1 className="font-display text-[4.2rem] font-black uppercase leading-[0.80] tracking-[-0.035em] sm:text-[6rem] lg:text-[7rem] xl:text-[7.5rem]">

                <span className="text-[#31929B]">
                  SHAWARMA
                </span>

                <br />

                <span className="text-white">
                  IS MORE
                </span>

                <br />

                <span className="text-white">
                  SHAWARMA
                </span>

                <span className="text-[#31929B]">
                  .
                </span>

              </h1>

            </motion.div>

            {/* HALAL + AUTHENTIC */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mt-7 flex flex-wrap items-center gap-5"
            >

              {/* HALAL */}

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#31929B] text-lg font-black text-white shadow-lg shadow-[#31929B]/20">
                  ✓
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#31929B]">
                    100% HALAL
                  </p>

                  <p className="mt-0.5 text-xs text-white/55">
                    Always
                  </p>
                </div>

              </div>

              <div className="hidden h-9 w-px bg-white/20 sm:block" />

              {/* AUTHENTIC */}

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#31929B]/60 bg-black/30 text-lg text-[#31929B]">
                  ✦
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
                    AUTHENTIC SYRIAN
                  </p>

                  <p className="mt-0.5 text-xs text-white/55">
                    Flavours &amp; tradition
                  </p>
                </div>

              </div>

            </motion.div>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >

              <a
                href="#order"
                className="rounded-full bg-[#31929B] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#071416] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#3AAAB4]"
              >
                ORDER NOW
                <span className="ml-3">
                  →
                </span>
              </a>

              <a
                href="#full-menu"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#111111] transition duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                VIEW MENU
              </a>

            </motion.div>

          </div>

        </div>

        {/* DESKTOP VIDEO INDICATORS */}

        <div className="absolute bottom-8 right-6 z-[50] lg:right-10">
          {videoIndicators}
        </div>

        {/* BOTTOM TRANSITION */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[60] h-10 bg-gradient-to-t from-[#31929B]/40 to-transparent" />

      </div>

      {/* =====================================================
          MOBILE HERO
      ===================================================== */}

<div className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:hidden">
        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-[#31929B]/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-xl">

          {/* MOBILE HEADLINE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/90 sm:text-xs">
              THE ONLY THING BETTER THAN
            </p>

            <h1 className="font-display text-[clamp(3.2rem,11.5vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.045em]">

              <span className="block text-[#31929B]">
                SHAWARMA
              </span>

              <span className="mt-1 block text-white">
                IS MORE
              </span>

              <span className="block text-white">
                SHAWARMA<span className="text-[#31929B]">.</span>
              </span>

            </h1>

          </motion.div>

          {/* MOBILE BRAND VALUES */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4"
          >

            <div className="flex items-center gap-2.5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#31929B] text-lg font-black">
                ✓
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#31929B]">
                  100% HALAL
                </p>

                <p className="mt-0.5 text-xs text-white/60">
                  Always
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2.5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#31929B]/60 text-lg text-[#31929B]">
                ✦
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-white">
                  AUTHENTIC SYRIAN
                </p>

                <p className="mt-0.5 text-xs text-white/60">
                  Flavours &amp; tradition
                </p>
              </div>

            </div>

          </motion.div>

          {/* MOBILE DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-6 max-w-sm text-sm leading-6 text-white/70"
          >
            Freshly prepared and served with care in Greater Sudbury.
          </motion.p>

          {/* MOBILE BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mt-7 grid grid-cols-2 gap-3"
          >

            <a
              href="#order"
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#31929B] px-3 py-3 text-xs font-bold uppercase tracking-wide text-[#071416] transition hover:bg-[#3AAAB4]"
            >
              ORDER NOW <span>→</span>
            </a>

            <a
              href="#full-menu"
              className="flex min-h-14 items-center justify-center rounded-full bg-white px-3 py-3 text-xs font-bold uppercase tracking-wide text-[#111111] transition hover:bg-white/90"
            >
              VIEW MENU
            </a>

          </motion.div>

          {/* MOBILE VIDEO */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-9"
          >

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">

<div className="relative aspect-[5/4] w-full overflow-hidden sm:aspect-[16/10]">
                <AnimatePresence mode="wait">

                  <motion.video
                    key={`mobile-${activeIndex}`}
                    ref={mobileVideoRef}
                    src={activeVideo.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center 35%" }}                  />

                </AnimatePresence>

                {/* VIDEO OVERLAY */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* VIDEO CAPTION */}

                <div className="absolute bottom-5 left-5 z-10">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                    DAMASCUS SHAWARMA
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Fresh from our kitchen.
                  </p>
                </div>

                {/* MOBILE VIDEO INDICATORS */}

                <div className="absolute bottom-6 right-5 z-20">
                  {videoIndicators}
                </div>

              </div>

            </div>

            {/* VIDEO FOOTER */}

            <div className="mt-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
              <span>Our food · Our passion</span>
              <span>Since the beginning</span>
            </div>

          </motion.div>

        </div>

      </div>

      {/* BOTTOM TEAL EDGE */}

      <div className="absolute bottom-0 left-0 right-0 z-[60] h-1 bg-[#31929B]" />

    </section>
  );
}

export default LivingHero;
