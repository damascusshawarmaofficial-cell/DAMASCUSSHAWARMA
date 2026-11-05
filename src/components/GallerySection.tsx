import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

import image1 from "../assets/1.jpeg"
import image2 from "../assets/2.jpeg"
import image3 from "../assets/3.jpeg"
import image4 from "../assets/4.jpeg"
import image5 from "../assets/5.jpeg"
import image6 from "../assets/6.jpeg"
import image7 from "../assets/7.jpeg"
import image8 from "../assets/8.jpeg"

type GalleryImageData = {
  src: string
  alt: string
}

const galleryImages: GalleryImageData[] = [
  {
    src: image1,
    alt: "Damascus Shawarma",
  },
  {
    src: image2,
    alt: "Damascus Shawarma food",
  },
  {
    src: image3,
    alt: "Damascus Shawarma restaurant",
  },
  {
    src: image4,
    alt: "Damascus Shawarma interior",
  },
  {
    src: image5,
    alt: "Damascus Shawarma staff",
  },
  {
    src: image6,
    alt: "Damascus Shawarma customers",
  },
  {
    src: image7,
    alt: "Damascus Shawarma",
  },
  {
    src: image8,
    alt: "Damascus Shawarma",
  },
]

function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
    document.body.style.overflow = ""
  }

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return 0

      return (current + 1) % galleryImages.length
    })
  }

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return galleryImages.length - 1

      return (
        (current - 1 + galleryImages.length) %
        galleryImages.length
      )
    })
  }

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (event.key === "Escape") {
        closeLightbox()
      }

      if (event.key === "ArrowRight") {
        showNext()
      }

      if (event.key === "ArrowLeft") {
        showPrevious()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex])

  // Restore scrolling if component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <>
      <section
        id="gallery"
        className="bg-[#FAFAF8] px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* =====================================================
              HEADER
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#31929B]">
                A look inside
              </p>

              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
                Taste the moment.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/45">
              A little glimpse of the food, flavours and moments that make
              Damascus special.
            </p>
          </motion.div>


          {/* =====================================================
              EDITORIAL GALLERY
          ===================================================== */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

            {/* =================================================
                IMAGE 1 — LARGE
            ================================================= */}
            <GalleryImage
              image={galleryImages[3]}
              index={3}
              onOpen={openLightbox}
              className="
                col-span-2
                row-span-2
                min-h-[420px]
                sm:min-h-[520px]
                lg:min-h-[620px]
              "
            />

            {/* =================================================
                IMAGE 2
            ================================================= */}
            <GalleryImage
              image={galleryImages[1]}
              index={1}
              onOpen={openLightbox}
              className="
                min-h-[210px]
                sm:min-h-[250px]
                lg:min-h-[300px]
              "
            />

            {/* =================================================
                IMAGE 3
            ================================================= */}
            <GalleryImage
              image={galleryImages[0]}
              index={0}
              onOpen={openLightbox}
              className="
                min-h-[210px]
                sm:min-h-[250px]
                lg:min-h-[300px]
              "
            />

            {/* =================================================
                IMAGE 4 — WIDE
            ================================================= */}
            <GalleryImage
              image={galleryImages[2]}
              index={2}
              onOpen={openLightbox}
              className="
                col-span-2
                min-h-[250px]
                sm:min-h-[300px]
                lg:min-h-[320px]
              "
            />

            {/* =================================================
                IMAGE 5
            ================================================= */}
            <GalleryImage
              image={galleryImages[4]}
              index={4}
              onOpen={openLightbox}
              className="
                min-h-[230px]
                sm:min-h-[280px]
                lg:min-h-[320px]
              "
            />

            {/* =================================================
                IMAGE 6
            ================================================= */}
            <GalleryImage
              image={galleryImages[5]}
              index={5}
              onOpen={openLightbox}
              className="
                min-h-[230px]
                sm:min-h-[280px]
                lg:min-h-[320px]
              "
            />

            {/* =================================================
                IMAGE 7
            ================================================= */}
            <GalleryImage
              image={galleryImages[6]}
              index={6}
              onOpen={openLightbox}
              className="
                col-span-2
                min-h-[280px]
                sm:min-h-[320px]
                lg:min-h-[360px]
              "
            />
          </div>


          {/* =====================================================
              CTA
          ===================================================== */}
          <div className="mt-14 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:border-[#31929B] hover:bg-[#31929B] hover:text-white"
            >
              Follow Damascus

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0b0b0b]/95 p-4 backdrop-blur-md sm:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox()
              }
            }}
          >

            {/* =================================================
                CLOSE
            ================================================= */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#111111] sm:right-8 sm:top-8"
            >
              ×
            </button>


            {/* =================================================
                COUNTER
            ================================================= */}
            <div className="absolute left-5 top-6 z-20 sm:left-8 sm:top-8">
              <p className="text-xs font-bold tracking-[0.2em] text-white/50">
                <span className="text-white">
                  {String(selectedIndex + 1).padStart(2, "0")}
                </span>

                <span className="mx-2 text-white/20">
                  /
                </span>

                {String(galleryImages.length).padStart(2, "0")}
              </p>
            </div>


            {/* =================================================
                IMAGE
            ================================================= */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-full w-full items-center justify-center"
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-h-[82vh] max-w-[90vw] rounded-[1rem] object-contain shadow-2xl sm:max-w-[85vw] sm:rounded-[1.5rem]"
              />
            </motion.div>


            {/* =================================================
                PREVIOUS
            ================================================= */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#111111] sm:left-8"
            >
              ←
            </button>


            {/* =================================================
                NEXT
            ================================================= */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#111111] sm:right-8"
            >
              →
            </button>


            {/* =================================================
                BOTTOM LABEL
            ================================================= */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Damascus Shawarma
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


/* =============================================================
   GALLERY IMAGE
============================================================= */

type GalleryImageProps = {
  image: GalleryImageData
  index: number
  onOpen: (index: number) => void
  className?: string
}

function GalleryImage({
  image,
  index,
  onOpen,
  className = "",
}: GalleryImageProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.05,
      }}
      className={`group relative overflow-hidden rounded-[1.5rem] bg-black/5 text-left ${className}`}
    >

      {/* Image */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Dark hover */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

      {/* Number */}
      <div className="absolute left-5 top-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="text-[10px] font-bold tracking-[0.2em] text-white drop-shadow-lg">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Open button */}
      <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#111111] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-lg">
          ↗
        </span>
      </div>

    </motion.button>
  )
}

export default GallerySection