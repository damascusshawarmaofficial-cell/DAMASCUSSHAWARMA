import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import videoA from "../assets/videos/a.mp4"
import videoB from "../assets/videos/b.mp4"
import videoC from "../assets/videos/c.mp4"
import videoD from "../assets/videos/d.mp4"

import image4 from "../assets/4.jpeg"
import image8 from "../assets/8.jpeg"

type MediaItem = {
  src: string
}

const mediaItems: MediaItem[] = [
  {
    src: videoA,
  },
  {
    src: videoB,
  },
  {
    src: videoC,
  },
  {
    src: videoD,
  },
]

function LivingHero() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Sound starts OFF so autoplay is allowed by the browser.
  const [isMuted, setIsMuted] = useState(true)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const activeVideo = mediaItems[activeIndex]

  // =========================================================
  // CHANGE VIDEO
  // =========================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(
        (current) => (current + 1) % mediaItems.length
      )
    }, 5000)

    return () => clearTimeout(timer)
  }, [activeIndex])

  // =========================================================
  // START VIDEO
  // =========================================================

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    /*
     * Keep the current sound state when the video changes.
     *
     * If the user has sound OFF:
     *     new video = muted
     *
     * If the user has sound ON:
     *     new video = sound ON
     */

    video.muted = isMuted
    video.volume = 1

    video.play().catch(() => {
      // Browser may wait for user interaction.
    })
  }, [activeIndex, isMuted])

  // =========================================================
  // SOUND CONTROL
  // =========================================================

  const toggleSound = async () => {
    const video = videoRef.current

    if (!video) return

    try {
      if (isMuted) {
        /*
         * ==============================================
         * TURN SOUND ON
         * ==============================================
         */

        video.muted = false
        video.volume = 1

        /*
         * play() is called after the user's click,
         * so the browser allows audio playback.
         */
        await video.play()

        setIsMuted(false)
      } else {
        /*
         * ==============================================
         * TURN SOUND OFF
         * ==============================================
         */

        video.muted = true

        setIsMuted(true)
      }
    } catch {
      /*
       * If the browser refuses audio for any reason,
       * safely return to muted mode.
       */
      video.muted = true

      setIsMuted(true)
    }
  }

  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-78px)]
        overflow-hidden
        bg-[#111111]
      "
    >

      {/* =====================================================
          LEFT BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">

        <img
          src={image4}
          alt=""
          className="
            absolute
            inset-y-0
            left-0
            h-full
            w-[42%]
            object-cover
          "
        />

        {/* Strong darkening for hero text */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[55%]
            bg-gradient-to-r
            from-black/90
            via-black/75
            to-black/30
          "
        />

        {/* Extra fade toward video */}

        <div
          className="
            absolute
            inset-y-0
            left-[28%]
            w-[30%]
            bg-gradient-to-r
            from-transparent
            via-black/35
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          RIGHT FIXED IMAGE
          8.jpeg
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-[1]
          w-[29%]
          overflow-hidden
        "
      >

        <img
          src={image8}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Darken image slightly */}

        <div
          className="
            absolute
            inset-0
            bg-black/35
          "
        />

        {/* LEFT FADE — blends image into video */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[55%]
            bg-gradient-to-r
            from-[#111111]
            via-[#111111]/65
            to-transparent
          "
        />

        {/* RIGHT EDGE FADE */}

        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[15%]
            bg-gradient-to-l
            from-black/25
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          CENTER VIDEO
      ===================================================== */}

      <div
        className="
          absolute
          inset-y-0
          left-[57%]
          z-[2]
          flex
          w-[48%]
          -translate-x-1/2
          items-center
          justify-center
        "
      >

        <AnimatePresence mode="wait">

          <motion.div
            key={activeVideo.src}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="
              relative
              h-full
              w-full
              overflow-hidden
              bg-black
            "
          >

            {/* VIDEO */}

            <video
              ref={videoRef}
              src={activeVideo.src}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              className="
                h-full
                w-full
                object-cover
              "
            />


            {/* VIDEO SUBTLE DARK OVERLAY */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/10
              "
            />


            {/* =================================================
                LEFT VIDEO FADE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                w-[14%]
                bg-gradient-to-r
                from-black/35
                to-transparent
              "
            />


            {/* =================================================
                RIGHT VIDEO FADE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                w-[14%]
                bg-gradient-to-l
                from-black/35
                to-transparent
              "
            />


            {/* =================================================
                SOUND BUTTON

                ALWAYS VISIBLE
            ================================================= */}

            <button
              type="button"
              onClick={toggleSound}
              aria-label={
                isMuted
                  ? "Turn sound on"
                  : "Turn sound off"
              }
              className="
                absolute
                bottom-6
                right-6
                z-[100]
                flex
                h-14
                w-14
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/75
                text-white
                shadow-2xl
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:border-[#31929B]
                hover:bg-[#31929B]
                active:scale-95
              "
            >

              {isMuted ? (

                /* =================================================
                   MUTED
                ================================================= */

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="m23 9-6 6" />
                  <path d="m17 9 6 6" />
                </svg>

              ) : (

                /* =================================================
                   SOUND ON
                ================================================= */

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>

              )}

            </button>

          </motion.div>

        </AnimatePresence>

      </div>


      {/* =====================================================
          GLOBAL CINEMATIC OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
          bg-gradient-to-r
          from-black/30
          via-transparent
          to-black/15
        "
      />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-78px)]
          max-w-7xl
          items-center
          px-6
          pt-20
          lg:px-8
        "
      >

        <div
          className="
            relative
            max-w-3xl
            lg:-left-28
            xl:-left-36
          "
        >

          {/* =================================================
              MAIN LINE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <p
              className="
                mb-5
                text-sm
                font-black
                uppercase
                tracking-[0.18em]
                text-white
                sm:text-base
              "
            >
              THE ONLY THING BETTER THAN
            </p>


            <h1
              className="
                font-display
                text-[4.2rem]
                font-black
                uppercase
                leading-[0.80]
                tracking-[-0.035em]
                sm:text-[6rem]
                lg:text-[7rem]
                xl:text-[7.5rem]
              "
            >

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


          {/* =================================================
              HALAL + AUTHENTIC
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-5
            "
          >

            {/* HALAL */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#31929B]
                  text-lg
                  font-black
                  text-white
                  shadow-lg
                  shadow-[#31929B]/20
                "
              >
                ✓
              </div>

              <div>

                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-[#31929B]
                  "
                >
                  100% HALAL
                </p>

                <p className="mt-0.5 text-xs text-white/55">
                  Always
                </p>

              </div>

            </div>


            {/* DIVIDER */}

            <div
              className="
                hidden
                h-9
                w-px
                bg-white/20
                sm:block
              "
            />


            {/* AUTHENTIC */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#31929B]/60
                  bg-black/30
                  text-lg
                  text-[#31929B]
                "
              >
                ✦
              </div>

              <div>

                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-white
                  "
                >
                  AUTHENTIC SYRIAN
                </p>

                <p className="mt-0.5 text-xs text-white/55">
                  Flavours & tradition
                </p>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >

            <a
              href="#order"
              className="
                rounded-full
                bg-[#31929B]
                px-8
                py-4
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-[#071416]
                shadow-xl
                shadow-black/20
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#3AAAB4]
              "
            >
              ORDER NOW

              <span className="ml-3">
                →
              </span>

            </a>


            <a
              href="#full-menu"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-[#111111]
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-white/90
              "
            >
              VIEW MENU
            </a>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          VIDEO INDICATORS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-6
          z-[50]
          flex
          items-center
          gap-2
          lg:right-10
        "
      >

        {mediaItems.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show video ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500

              ${
                activeIndex === index
                  ? "w-10 bg-[#31929B]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }
            `}
          />

        ))}

      </div>


      {/* =====================================================
          SOFT BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-[60]
          h-10
          bg-gradient-to-t
          from-[#31929B]/40
          to-transparent
        "
      />

    </section>
  )
}

export default LivingHero