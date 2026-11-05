import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

const heroVideos = [
  {
    src: "/videos/hero/shawarma-spit.mp4",
    label: "THE SHAWARMA",
  },
  {
    src: "/videos/hero/preparing-shawarma.mp4",
    label: "MADE FRESH",
  },
  {
    src: "/videos/hero/chicken-shawarma.mp4",
    label: "CHICKEN SHAWARMA",
  },
  {
    src: "/videos/hero/wrap-preparation.mp4",
    label: "FRESHLY WRAPPED",
  },
  {
    src: "/videos/hero/fresh-ingredients.mp4",
    label: "FRESH INGREDIENTS",
  },
  {
    src: "/videos/hero/finished-food.mp4",
    label: "DAMASCUS · SUDBURY",
  },
]

const VIDEO_DURATION = 5000

function Hero() {
  const [activeVideo, setActiveVideo] = useState(0)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  /*
   * Change hero video automatically
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveVideo((current) => (current + 1) % heroVideos.length)
    }, VIDEO_DURATION)

    return () => window.clearTimeout(timer)
  }, [activeVideo])

  /*
   * Start the active video
   */
  useEffect(() => {
    const video = videoRefs.current[activeVideo]

    if (!video) return

    video.currentTime = 0

    video.play().catch(() => {
      // Browser may prevent autoplay until interaction.
    })
  }, [activeVideo])

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#111111]
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND VIDEOS */}
      {/* ================================================= */}

      <div className="absolute inset-0">

        {heroVideos.map((video, index) => (
          <video
            key={video.src}
            ref={(element) => {
              videoRefs.current[index] = element
            }}
            src={video.src}
            muted
            loop
            playsInline
            preload={index === 0 ? "auto" : "metadata"}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-opacity
              duration-[1200ms]
              ease-in-out

              ${
                activeVideo === index
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }
            `}
          />
        ))}

      </div>

      {/* ================================================= */}
      {/* CINEMATIC OVERLAY */}
      {/* ================================================= */}

      {/* General darkening */}
      <div className="
        absolute
        inset-0
        z-20
        bg-black/30
      " />

      {/* Stronger left side for typography */}
      <div className="
        absolute
        inset-0
        z-20
        bg-gradient-to-r
        from-black/90
        via-black/65
        to-black/10
      " />

      {/* Bottom fade */}
      <div className="
        absolute
        inset-x-0
        bottom-0
        z-20
        h-[35%]
        bg-gradient-to-t
        from-black/75
        to-transparent
      " />

      {/* Top fade */}
      <div className="
        absolute
        inset-x-0
        top-0
        z-20
        h-32
        bg-gradient-to-b
        from-black/50
        to-transparent
      " />

      {/* ================================================= */}
      {/* HERO CONTENT */}
      {/* ================================================= */}

      <div className="
        relative
        z-30
        mx-auto
        w-full
        max-w-7xl
        px-6
        pb-24
        pt-28
        lg:px-8
      ">

        <div className="max-w-5xl">

          {/* ================================================= */}
          {/* VIDEO LABEL */}
          {/* ================================================= */}

          <motion.div
            key={`label-${activeVideo}`}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >

            <span className="
              h-2
              w-2
              rounded-full
              bg-[#31929B]
              shadow-[0_0_16px_rgba(49,146,155,0.9)]
            " />

            <span className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-white/75
              sm:text-xs
            ">
              {heroVideos[activeVideo].label}
            </span>

          </motion.div>

          {/* ================================================= */}
          {/* MAIN BRAND STATEMENT */}
          {/* ================================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.045em]
            "
          >

            {/* Small first line */}

            <span className="
              block
              max-w-3xl
              text-[clamp(1rem,2.1vw,2rem)]
              tracking-[0.08em]
              text-[#F2EEE4]
            ">
              THE ONLY THING BETTER THAN
            </span>

            {/* Main word */}

            <span className="
              mt-3
              block
              text-[clamp(4rem,10vw,9.5rem)]
              text-[#31929B]
              drop-shadow-[0_10px_35px_rgba(0,0,0,0.35)]
            ">
              SHAWARMA
            </span>

            {/* IS MORE */}

            <span className="
              mt-2
              block
              text-[clamp(2.7rem,6vw,6rem)]
              text-[#F2EEE4]
            ">
              IS MORE
            </span>

            {/* Final SHAWARMA */}

            <span className="
              block
              text-[clamp(4rem,10vw,9.5rem)]
              text-[#F2EEE4]
              drop-shadow-[0_10px_35px_rgba(0,0,0,0.35)]
            ">
              SHAWARMA
              <span className="text-[#31929B]">
                .
              </span>
            </span>

          </motion.h1>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <motion.p
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
              mt-7
              max-w-xl
              text-base
              leading-7
              text-white/75
              sm:text-lg
            "
          >
            Authentic Syrian flavours, freshly prepared
            and served with care in Sudbury.
          </motion.p>

          {/* ================================================= */}
          {/* BADGES */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="
              mt-5
              flex
              flex-wrap
              gap-2
            "
          >

            <span className="
              rounded-full
              border
              border-white/20
              bg-black/30
              px-4
              py-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              backdrop-blur-md
            ">
              ✓ 100% Halal
            </span>

            <span className="
              rounded-full
              border
              border-white/20
              bg-black/30
              px-4
              py-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/75
              backdrop-blur-md
            ">
              Freshly Prepared
            </span>

          </motion.div>

          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

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
              delay: 0.5,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >

            {/* ORDER NOW */}

            <a
              href="#order"
              className="
                group
                flex
                h-14
                items-center
                gap-3
                rounded-full
                bg-[#31929B]
                px-7
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#071719]
                shadow-[0_12px_40px_rgba(49,146,155,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#43AEB8]
                hover:shadow-[0_18px_50px_rgba(49,146,155,0.55)]
              "
            >

              <span>
                Order Now
              </span>

              <span className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#071719]
                text-white
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                →
              </span>

            </a>

            {/* VIEW MENU */}

            <a
              href="#menu"
              className="
                flex
                h-14
                items-center
                rounded-full
                border
                border-white/30
                bg-black/20
                px-7
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white
                hover:text-black
              "
            >
              View Menu
            </a>

          </motion.div>

        </div>

      </div>

      {/* ================================================= */}
      {/* VIDEO INDICATORS */}
      {/* ================================================= */}

      <div className="
        absolute
        bottom-8
        left-6
        right-6
        z-40
        flex
        items-end
        justify-between
        lg:left-8
        lg:right-8
      ">

        {/* Scroll indicator */}

        <div className="
          hidden
          flex-col
          items-center
          gap-3
          sm:flex
        ">

          <span className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.35em]
            text-white/40
          ">
            Scroll to explore
          </span>

          <div className="
            h-10
            w-px
            bg-white/30
          " />

        </div>

        {/* Six video indicators */}

        <div className="
          ml-auto
          flex
          items-center
          gap-3
        ">

          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(index)}
              aria-label={`Show video ${index + 1}`}
              className="
                group
                flex
                items-center
                gap-2
              "
            >

              <span className={`
                text-[9px]
                font-bold
                transition-colors
                duration-300

                ${
                  activeVideo === index
                    ? "text-white"
                    : "text-white/35 group-hover:text-white/70"
                }
              `}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={`
                block
                h-[2px]
                rounded-full
                transition-all
                duration-500

                ${
                  activeVideo === index
                    ? "w-12 bg-[#31929B]"
                    : "w-4 bg-white/20"
                }
              `} />

            </button>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Hero