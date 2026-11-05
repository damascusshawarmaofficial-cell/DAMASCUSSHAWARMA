
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import videoA from "../assets/videos/a.mp4";
import videoB from "../assets/videos/b.mp4";
import videoC from "../assets/videos/c.mp4";
import videoD from "../assets/videos/d.mp4";

type MediaItem = {
  src: string;
};

const mediaItems: MediaItem[] = [
  { src: videoA },
  { src: videoB },
  { src: videoC },
  { src: videoD },
];

const leftBackgroundImage =
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85";

const rightBackgroundImage =
  "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1600&q=85";

export default function LivingHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeVideo = mediaItems[activeIndex];

  const nextVideo = () => {
    setActiveIndex((current) => (current + 1) % mediaItems.length);
  };

  useEffect(() => {
    const videos = [
      desktopVideoRef.current,
      mobileVideoRef.current,
    ];

    videos.forEach((video) => {
      if (!video) return;

      video.currentTime = 0;

      video.play().catch(() => {
        // Autoplay may be restricted by the browser.
      });
    });
  }, [activeIndex]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#111111] text-white"
    >
      {/* =========================================
          DESKTOP HERO
      ========================================= */}

      <div className="relative hidden min-h-[calc(100svh-78px)] overflow-hidden lg:block">

        {/* LEFT BACKGROUND IMAGE */}

        <div className="absolute inset-0">
          <img
            src={leftBackgroundImage}
            alt=""
            className="absolute inset-y-0 left-0 h-full w-[40%] object-cover"
          />

          <img
            src={rightBackgroundImage}
            alt=""
            className="absolute inset-y-0 right-0 h-full w-[40%] object-cover"
          />

          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black/85 via-black/65 to-black" />

          <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-black/80 via-black/60 to-black" />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* CENTRE VIDEO */}

        <div className="absolute inset-y-0 left-1/2 z-[2] w-[48%] -translate-x-1/2 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.video
              key={`desktop-${activeIndex}`}
              ref={desktopVideoRef}
              src={activeVideo.src}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={nextVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="h-full w-full object-cover object-center"
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* DESKTOP CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-78px)] max-w-[1500px] items-center px-8 py-20 xl:px-16">

          <div className="max-w-[620px]">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-white">
                THE ONLY THING BETTER THAN
              </p>

              <h1 className="font-display text-7xl font-black uppercase leading-[0.84] tracking-[-0.045em] xl:text-[7.5rem]">
                <span className="block text-[#31929B]">
                  SHAWARMA
                </span>

                <span className="mt-2 block">
                  IS MORE
                </span>

                <span className="block">
                  SHAWARMA<span className="text-[#31929B]">.</span>
                </span>
              </h1>
            </motion.div>

            {/* BRAND VALUES */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#31929B] text-lg font-black">
                  ✓
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#31929B]">
                    100% HALAL
                  </p>
                  <p className="mt-0.5 text-xs text-white/65">
                    Always
                  </p>
                </div>
              </div>

              <div className="hidden h-9 w-px bg-white/25 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#31929B]/60 text-lg text-[#31929B]">
                  ✦
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                    AUTHENTIC SYRIAN
                  </p>
                  <p className="mt-0.5 text-xs text-white/65">
                    Flavours &amp; tradition
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-md text-base leading-7 text-white/75"
            >
              Freshly prepared and served with care in Greater Sudbury.
            </motion.p>

            {/* DESKTOP BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#order"
                className="inline-flex items-center justify-center rounded-full bg-[#31929B] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#287D85]"
              >
                ORDER NOW <span className="ml-3">→</span>
              </a>

              <a
                href="#full-menu"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#111111] transition duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                VIEW MENU
              </a>
            </motion.div>

          </div>
        </div>

        {/* DESKTOP VIDEO INDICATORS */}

        <div className="absolute bottom-7 right-8 z-30 flex items-center gap-2 xl:right-12">
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
                  : "w-2 bg-white/45 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================================
          MOBILE HERO
      ========================================= */}

      <div className="relative overflow-hidden px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:hidden">

        {/* Subtle background glow */}

        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#087F87]/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-xl">

          {/* MOBILE HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-white/85 sm:text-xs">
              THE ONLY THING BETTER THAN
            </p>

            <h1 className="font-display text-[clamp(3.4rem,12vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.05em]">
              <span className="block text-[#31929B]">
                SHAWARMA
              </span>

              <span className="mt-1 block">
                IS MORE
              </span>

              <span className="block">
                SHAWARMA<span className="text-[#31929B]">.</span>
              </span>
            </h1>
          </motion.div>

          {/* MOBILE BRAND VALUES */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#31929B] text-base font-black">
                ✓
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#31929B]">
                  100% HALAL
                </p>
                <p className="text-xs text-white/60">Always</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#31929B]/60 text-[#31929B]">
                ✦
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.15em]">
                  AUTHENTIC SYRIAN
                </p>
                <p className="text-xs text-white/60">
                  Flavours &amp; tradition
                </p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-sm text-sm leading-6 text-white/70"
          >
            Freshly prepared and served with care in Greater Sudbury.
          </motion.p>

          {/* MOBILE BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 grid grid-cols-2 gap-3"
          >
            <a
              href="#order"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#31929B] px-3 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#287D85]"
            >
              ORDER NOW <span>→</span>
            </a>

            <a
              href="#full-menu"
              className="flex min-h-12 items-center justify-center rounded-full bg-white px-3 py-3 text-xs font-bold uppercase tracking-wide text-[#111111] transition hover:bg-white/90"
            >
              VIEW MENU
            </a>
          </motion.div>

          {/* MOBILE VIDEO CARD */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-9"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">

              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={`mobile-${activeIndex}`}
                    ref={mobileVideoRef}
                    src={activeVideo.src}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={nextVideo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/90">
                  Fresh from our kitchen
                </div>

                {/* MOBILE VIDEO INDICATORS */}

                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                  {mediaItems.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show video ${index + 1}`}
                      aria-current={activeIndex === index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-7 bg-[#31929B]"
                          : "w-1.5 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
              <span>Our food · Our passion</span>
              <span>Damascus Shawarma</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM TEAL EDGE */}

      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-[#31929B]" />
    </section>
  );
}
