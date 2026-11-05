import { motion } from "motion/react"
import { useRef, useState } from "react"
import damascus from "../assets/videos/damasus.mp4"

function StorySection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)

  // =========================================
  // VIDEO CONTROLS
  // =========================================

  const toggleVideo = () => {
    const video = videoRef.current

    if (!video) return

    if (video.paused) {
      if (video.ended) {
        video.currentTime = 0
      }

      void video.play()
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current

    if (!video) return

    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <section
      id="story"
      className="
        overflow-hidden
        bg-[#111111]
        px-6
        py-24
        sm:py-28
        lg:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1400px]">
        {/* ========================================= */}
        {/* MAIN GRID */}
        {/* ========================================= */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-24
          "
        >
          {/* ========================================= */}
          {/* VIDEO */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.8,
            }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            {/* ========================================= */}
            {/* VIDEO FRAME */}
            {/* ========================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                bg-black
                shadow-[0_35px_100px_rgba(0,0,0,0.55)]
                sm:rounded-[3rem]
              "
            >
              {/* Portrait video container */}

              <div className="relative aspect-[4/5] w-full">
                <video
                  ref={videoRef}
                  src={damascus}
                  autoPlay
                  muted={muted}
                  playsInline
                  onPlay={() => setPaused(false)}
                  onEnded={() => {
                    videoRef.current?.pause()
                    setPaused(true)
                  }}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

                {/* ===================================== */}
                {/* DARK GRADIENT */}
                {/* ===================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-black/10
                  "
                />

                {/* ===================================== */}
                {/* TOP LABEL */}
                {/* ===================================== */}

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    sm:left-8
                    sm:top-8
                  "
                >
                  <div
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      px-5
                      py-2.5
                      shadow-lg
                      backdrop-blur-xl
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-white
                      "
                    >
                      Our Story
                    </span>
                  </div>
                </div>

                {/* ===================================== */}
                {/* VIDEO CONTROLS */}
                {/* ===================================== */}

                <div
                  className="
                    absolute
                    bottom-6
                    right-6
                    flex
                    items-center
                    gap-2
                    sm:bottom-8
                    sm:right-8
                  "
                >
                  {/* PLAY / PAUSE */}

                  <button
                    type="button"
                    onClick={toggleVideo}
                    aria-label={paused ? "Play video" : "Pause video"}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#087F87]
                      shadow-xl
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    {paused ? (
                      <span className="ml-0.5 text-base">▶</span>
                    ) : (
                      <span className="text-xs tracking-[-2px]">❚❚</span>
                    )}
                  </button>

                  {/* MUTE */}

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-black/40
                      text-white
                      shadow-xl
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-white
                      hover:text-[#087F87]
                    "
                  >
                    {muted ? "🔇" : "🔊"}
                  </button>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* FLOATING DAMASCUS BADGE */}
            {/* ========================================= */}

            <div
              className="
                absolute
                -bottom-6
                -left-5
                hidden
                rounded-[1.5rem]
                bg-[#31929B]
                px-6
                py-5
                text-white
                shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                sm:block
                lg:-left-8
              "
            >
              <p
                className="
                  text-3xl
                  font-semibold
                  leading-none
                "
              >
                دمشق
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-white/75
                "
              >
                Damascus
              </p>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* STORY CONTENT */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.8,
              delay: 0.1,
            }}
            className="lg:pr-8"
          >
            {/* ========================================= */}
            {/* LABEL */}
            {/* ========================================= */}

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#31929B]" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#31929B]
                "
              >
                Our Story
              </p>
            </div>

            {/* ========================================= */}
            {/* HEADING */}
            {/* ========================================= */}

            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                leading-[1.04]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              From Damascus
              <br />

              <span className="text-[#31929B]">to Sudbury.</span>
            </h2>

            {/* ========================================= */}
            {/* DESCRIPTION */}
            {/* ========================================= */}

            <div
              className="
                mt-8
                max-w-xl
                space-y-5
                text-base
                leading-8
                text-white/55
              "
            >
              <p>
                Damascus Shawarma brings the flavours and traditions of Syrian
                cuisine to the heart of Sudbury.
              </p>

              <p>
                From carefully seasoned shawarma to fresh vegetables, sauces
                and warm pita, every dish is prepared with the flavours we
                grew up with and love to share.
              </p>

              <p>
                Simple ingredients, authentic recipes and food made with care —
                that's what makes Damascus, Damascus.
              </p>
            </div>

            {/* ========================================= */}
            {/* BUTTON */}
            {/* ========================================= */}

            <div className="mt-10">
              <a
                href="/our-story"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/20
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#31929B]
                  hover:bg-[#31929B]
                "
              >
                Discover Our Story

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>

            {/* ========================================= */}
            {/* DETAILS */}
            {/* ========================================= */}

            <div
              className="
                mt-14
                grid
                max-w-xl
                grid-cols-2
                gap-8
                border-t
                border-white/10
                pt-8
              "
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  Authentic
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Syrian flavours
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Made Fresh
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Every day
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StorySection