import { useRef, useState } from "react"
import { motion } from "motion/react"
import bakeryVideo from "../assets/videos/catering.mp4"

const occasions = [
  "Office lunches",
  "Family gatherings",
  "Birthdays",
  "Celebrations",
  "University events",
  "Corporate events",
]

function CateringSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)

  // Play / Pause
  const togglePlay = () => {
    const video = videoRef.current

    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  // Sound On / Off
  const toggleMute = () => {
    const video = videoRef.current

    if (!video) return

    if (video.muted) {
      video.muted = false

      // Restore volume if it was previously set to zero
      if (video.volume === 0) {
        video.volume = volume > 0 ? volume : 1
        setVolume(video.volume)
      }

      setIsMuted(false)
    } else {
      video.muted = true
      setIsMuted(true)
    }
  }

  // Volume
  const handleVolume = (value: number) => {
    const video = videoRef.current

    if (!video) return

    video.volume = value

    if (value === 0) {
      video.muted = true
      setIsMuted(true)
    } else {
      video.muted = false
      setIsMuted(false)
    }

    setVolume(value)
  }

  // Progress bar
  const handleProgress = (value: number) => {
    const video = videoRef.current

    if (!video || !video.duration) return

    video.currentTime = (value / 100) * video.duration
    setProgress(value)
  }

  // Update progress while video plays
  const handleTimeUpdate = () => {
    const video = videoRef.current

    if (!video || !video.duration) return

    const currentProgress =
      (video.currentTime / video.duration) * 100

    setProgress(currentProgress)
  }

  // Fullscreen
  const toggleFullscreen = () => {
    const video = videoRef.current

    if (!video) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      video.requestFullscreen()
    }
  }

  return (
    <section
      id="catering"
      className="overflow-hidden bg-[#111111] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid overflow-hidden rounded-[2rem] bg-[#1A1A1A] lg:grid-cols-2">

          {/* =====================================================
              VIDEO
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="group relative min-h-[420px] overflow-hidden lg:min-h-[650px]"
          >

            {/* Video */}
            <video
              ref={videoRef}
              src={bakeryVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark gradient over video */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* =================================================
                FLOATING LABEL
            ================================================= */}
            <div className="absolute bottom-28 left-7 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 backdrop-blur-md">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white">
                Damascus Catering
              </span>
            </div>

            {/* =================================================
                VIDEO CONTROLS
            ================================================= */}
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6">

              {/* Progress bar */}
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={(e) =>
                  handleProgress(Number(e.target.value))
                }
                aria-label="Video progress"
                className="
                  mb-4
                  h-1
                  w-full
                  cursor-pointer
                  appearance-none
                  rounded-full
                  bg-white/30
                  accent-[#31929B]
                "
              />

              {/* Controls row */}
              <div className="flex items-center justify-between">

                {/* LEFT CONTROLS */}
                <div className="flex items-center gap-2">

                  {/* Play / Pause */}
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={
                      isPlaying
                        ? "Pause video"
                        : "Play video"
                    }
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      text-white
                      backdrop-blur-md
                      transition
                      duration-200
                      hover:bg-white/25
                      active:scale-95
                    "
                  >
                    {isPlaying ? (
                      <span className="text-sm font-bold">
                        Ⅱ
                      </span>
                    ) : (
                      <span className="ml-0.5 text-sm">
                        ▶
                      </span>
                    )}
                  </button>

                  {/* Mute / Unmute */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={
                      isMuted
                        ? "Turn sound on"
                        : "Mute sound"
                    }
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      text-white
                      backdrop-blur-md
                      transition
                      duration-200
                      hover:bg-white/25
                      active:scale-95
                    "
                  >
                    {isMuted ? "🔇" : "🔊"}
                  </button>

                  {/* Volume Slider */}
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) =>
                      handleVolume(Number(e.target.value))
                    }
                    aria-label="Volume"
                    className="
                      hidden
                      w-20
                      cursor-pointer
                      accent-[#31929B]
                      sm:block
                    "
                  />
                </div>

                {/* FULLSCREEN */}
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Enter fullscreen"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-white
                    backdrop-blur-md
                    transition
                    duration-200
                    hover:bg-white/25
                    active:scale-95
                  "
                >
                  <span className="text-lg">
                    ⛶
                  </span>
                </button>

              </div>
            </div>
          </motion.div>


          {/* =====================================================
              CONTENT
          ====================================================== */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-16">

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >

              {/* Small heading */}
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#31929B]">
                Catering
              </p>

              {/* Main heading */}
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Feed the
                <br />
                <span className="text-[#31929B]">
                  whole crew.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-lg text-base leading-8 text-white/55">
                Bringing people together is better with great food.
                Let Damascus take care of your next gathering with
                delicious Syrian-inspired dishes prepared for sharing.
              </p>

              {/* =================================================
                  OCCASIONS
              ================================================== */}
              <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4">

                {occasions.map((occasion, index) => (
                  <motion.div
                    key={occasion}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="flex items-center gap-3"
                  >

                    {/* Dot */}
                    <span className="h-1.5 w-1.5 rounded-full bg-[#31929B]" />

                    {/* Occasion */}
                    <span className="text-sm text-white/60">
                      {occasion}
                    </span>

                  </motion.div>
                ))}

              </div>

              {/* =================================================
                  CTA
              ================================================== */}
              <div className="mt-10">

                <a
                  href="#contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#31929B]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#287D85]
                  "
                >
                  Request Catering

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CateringSection  