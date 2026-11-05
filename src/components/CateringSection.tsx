import { useRef, useState } from "react"
import { motion } from "motion/react"
import bakeryVideo from "../assets/videos/catering.mp4"
import foodTruckImage from "../assets/ft.jpeg"

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

  const togglePlay = () => {
  const video = videoRef.current

  if (!video) return

  if (video.paused) {
    if (video.ended) {
      video.currentTime = 0
    }

    void video.play()
    setIsPlaying(true)
  } else {
    video.pause()
    setIsPlaying(false)
  }
}

  const toggleMute = () => {
    const video = videoRef.current

    if (!video) return

    if (video.muted) {
      video.muted = false

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

  const handleProgress = (value: number) => {
    const video = videoRef.current

    if (!video || !video.duration) return

    video.currentTime = (value / 100) * video.duration
    setProgress(value)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current

    if (!video || !video.duration) return

    setProgress((video.currentTime / video.duration) * 100)
  }

  const toggleFullscreen = () => {
    const video = videoRef.current

    if (!video) return

    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void video.requestFullscreen()
    }
  }

  return (
    <section
      id="catering"
      className="overflow-hidden bg-[#111111] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#1A1A1A] md:grid-cols-2">
          {/* 1. Catering video */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[420px] overflow-hidden sm:min-h-[500px] md:aspect-square md:min-h-0"
          >
            <video
  ref={videoRef}
  src={bakeryVideo}
  autoPlay
  muted
  playsInline
  preload="metadata"
  onTimeUpdate={handleTimeUpdate}
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
 onEnded={() => {
  const video = videoRef.current
  if (!video) return

  video.pause()
  video.currentTime = 0
  setIsPlaying(false)
}}
  className="absolute inset-0 h-full w-full object-cover"
/>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-28 left-6 rounded-full border border-white/20 bg-black/35 px-5 py-2.5 backdrop-blur-md sm:left-8">
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white sm:text-xs">
                Damascus Catering
              </span>
            </div>

            {/* Video controls */}
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:px-7 sm:pb-7">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={(event) =>
                  handleProgress(Number(event.target.value))
                }
                aria-label="Video progress"
                className="mb-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30 accent-[#31929B]"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 active:scale-95"
                  >
                    {isPlaying ? (
                      <span className="text-sm font-bold">Ⅱ</span>
                    ) : (
                      <span className="ml-0.5 text-sm">▶</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Turn sound on" : "Mute sound"}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 active:scale-95"
                  >
                    {isMuted ? "🔇" : "🔊"}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(event) =>
                      handleVolume(Number(event.target.value))
                    }
                    aria-label="Volume"
                    className="hidden w-20 cursor-pointer accent-[#31929B] sm:block"
                  />
                </div>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Toggle fullscreen"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 active:scale-95"
                >
                  <span className="text-lg">⛶</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* 2. Catering content */}
          <div className="flex min-h-[500px] flex-col justify-center px-7 py-12 sm:px-10 sm:py-14 lg:px-14 md:aspect-square md:min-h-0 md:py-10">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
            >
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-[#31929B] sm:text-xs">
                Catering
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Feed the
                <br />
                <span className="text-[#31929B]">whole crew.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:mt-7 sm:text-base sm:leading-8">
                Bringing people together is better with great food. Let
                Damascus take care of your next gathering with delicious
                Syrian-inspired dishes prepared for sharing.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-8 sm:gap-x-6 sm:gap-y-4">
                {occasions.map((occasion, index) => (
                  <motion.div
                    key={occasion}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#31929B]" />
                    <span className="text-xs text-white/60 sm:text-sm">
                      {occasion}
                    </span>
                  </motion.div>
                ))}
              </div>

              <a
  href="mailto:damascus.restaurant1@gmail.com?subject=Catering%20Request"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#31929B] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#287D85] sm:mt-9 sm:px-7"
              >
                Request Catering
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* 3. Food truck content */}
          <div className="flex min-h-[420px] flex-col justify-center bg-[#1A1A1A] px-7 py-12 sm:px-10 sm:py-14 lg:px-14 md:aspect-square md:min-h-0 md:py-10">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
            >
             <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-[#31929B] sm:text-xs">
  Damascus food truck
</p>

<h3 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
  Savoury favourites.
  <br />
  <span className="text-[#31929B]">Sweet treats.</span>
</h3>

<p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
  Come hungry and enjoy your Damascus food truck favourites, along with
  delicious specialty sweets from Sweets on the Go!
</p>

<p className="mt-4 text-sm leading-6 text-white/45 sm:text-base">
  From savoury bites to sweet treats, there’s something for everyone.
  <span aria-hidden="true"> 🍔🍟🍫🍓</span>
</p>

<a
  href="mailto:damascus.restaurant1@gmail.com?subject=Catering%20Request"
  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#31929B] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#287D85] sm:mt-9 sm:px-7"
>
  Plan your event
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
            </motion.div>
          </div>

          {/* 4. Food truck photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[420px] overflow-hidden sm:min-h-[500px] md:aspect-square md:min-h-0"
          >
            <img
              src={foodTruckImage}
              alt="Damascus Shawarma food truck"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                Fresh from Damascus
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                Wherever you gather.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CateringSection
