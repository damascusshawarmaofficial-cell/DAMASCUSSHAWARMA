import { useRef, useState } from "react"
import { motion } from "motion/react"
import bakeryVideo from "../assets/videos/bakery.mp4";
function FoodVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)

  // TEMPORARY DUMMY VIDEO
  // Replace this later with the real Damascus video.

  const toggleVideo = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setPaused(false)
    } else {
      videoRef.current.pause()
      setPaused(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <section
      id="fresh-pick"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-28 lg:py-36"
    >
      {/* ===================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ===================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#087F87]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#31929B]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* ===================================== */}
        {/* INTRO */}
        {/* ===================================== */}

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#31929B]" />

              <span className="font-heading text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#31929B]">
                Fresh Pick
              </span>

            </div>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.82] tracking-tight text-white sm:text-7xl lg:text-9xl">

              Damascus
              <br />

              <span className="text-[#31929B]">
                Sweets
              </span>

            </h2>

          </div>

          <div className="max-w-md md:pb-2">

            <p className="font-body text-base leading-7 text-white/55 sm:text-lg">
              Fresh, sweet and made for the perfect finish.
              A little something special from Damascus.
            </p>

          </div>

        </div>

        {/* ===================================== */}
        {/* VIDEO */}
        {/* ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[2rem] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:rounded-[2.5rem]"
        >

          {/* Video */}

          <video
            ref={videoRef}
            src={bakeryVideo}
            autoPlay
            muted={muted}
            loop
            playsInline
            className="
              aspect-[16/9]
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              hover:scale-[1.025]
            "
          />

          {/* Dark gradient */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/20" />

          {/* ================================= */}
          {/* VIDEO LABEL */}
          {/* ================================= */}

          <div className="absolute left-5 top-5 sm:left-8 sm:top-8">

            <div className="rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-md">

              <span className="font-heading text-[9px] font-extrabold uppercase tracking-[0.25em] text-white">
                Made Fresh
              </span>

            </div>

          </div>

          {/* ================================= */}
          {/* BOTTOM TEXT */}
          {/* ================================= */}

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">

            <div>

              <p className="font-display text-3xl font-black uppercase leading-none text-white sm:text-5xl">
                A little sweet.
              </p>

              <p className="mt-1 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white/65 sm:text-sm">
                A lot of fresh.
              </p>

            </div>

            {/* ================================= */}
            {/* CONTROLS */}
            {/* ================================= */}

            <div className="flex items-center gap-2">

              {/* Play / Pause */}

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
                  hover:scale-110
                "
              >
                {paused ? (
                  <span className="ml-0.5 text-lg">
                    ▶
                  </span>
                ) : (
                  <span className="text-sm tracking-[-2px]">
                    ❚❚
                  </span>
                )}
              </button>

              {/* Mute */}

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
                  border-white/20
                  bg-black/30
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white
                  hover:text-[#087F87]
                "
              >
                {muted ? "🔇" : "🔊"}
              </button>

            </div>

          </div>

        </motion.div>

        {/* ===================================== */}
        {/* BOTTOM STATEMENT */}
        {/* ===================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/35">
            Damascus Shawarma · Sudbury
          </p>

          <p className="font-body text-sm text-white/40">
            Freshly prepared. Made with care.
          </p>

        </div>

      </div>
    </section>
  )
}

export default FoodVideoSection