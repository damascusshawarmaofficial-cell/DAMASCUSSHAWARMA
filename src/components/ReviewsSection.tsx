import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

type Review = {
  quote: string
  name: string
  size: "small" | "medium" | "large"
}

const reviews: Review[] = [
  {
    quote:
      "Best shawarma in town and I’ve tried them all. The garlic sauce is amazing. Chicken and beef taste fantastic and isn’t dry like Osmows. Super friendly people working there as well. Service is great. I go there once a week and am never disappointed.",
    name: "Kevin Robillard",
    size: "medium",
  },
  {
    quote:
      "This is a wonderful family-owned and operated restaurant that truly feels like a local gem.\n\nEverything on the menu is 100% homemade, and you can really taste the difference in the quality and flavour of the food. Every meal I’ve had there has been absolutely delicious.\n\nThe portions are also very generous, so you definitely leave satisfied. The staff are always friendly and welcoming, which makes the experience even better.\n\nIt’s one of those places I genuinely love going to, and I’m always happy to support a great local, family-run business.",
    name: "Naomi M",
    size: "small",
  },
  {
    quote:
      "This place didn’t just feed me, it emotionally supported me through two pregnancies. Forget cravings... I had a full-blown, long-term relationship with their chicken shawarma wrap on fries, absolutely drenched in garlic sauce! Every bite had me wanting more.\n\nI’m convinced the kitchen staff knew my order before I even walked in and were quietly rooting for me the whole time. The food? Unreal. The portions? Generous. The garlic sauce? Honestly, life-changing.\n\nI recommend this place to everyone and I mean everyone. I’ve basically turned into an unpaid brand ambassador, convincing friends from out of town to drive hours just to eat here with me. Not a single person has complained. They all leave full, happy, and slightly obsessed... just like me.\n\nThank you to all the staff for pouring their love into every meal they make! You guys are awesome!",
    name: "Alisha Oakes",
    size: "small",
  },
  {
    quote:
      "I called ahead and placed my order, the employee took his time with me to get my order straight as I was ordering a few meals for me and some co-workers. When I walked in i was treated with a friendly greeting. I let them know I was there to pick up and they were great. They were extremely friendly and inviting!!\n\nThe worst part of this whole experience was having to drive back to work smelling that wonderful food. 😜😊\n\nThe food was worth that mouth watering drive , it was a consensus!!! We all absolutely loved it!!! The portions were more than fair for the money!\n\nWill definitely be back!\nThis is a Sudbury Gem!!!",
    name: "Nicole Fawson",
    size: "small",
  },
  {
    quote:
      "Always great service and great food. Never small on portions. Keep being awesome!",
    name: "Stacey Llewellyn",
    size: "large",
  },
  {
    quote:
      "This is my new obsession! Food is amazing!! Definitely recommend you stopping in here!! Homemade pickled turnips are one of my favorite topping! The service is always happy and friendly....will definitely keep returning",
    name: "Stephanie Brunette",
    size: "medium",
  },
  {
    quote:
      "Very hard working friendly family. They have the best shawarma in Sudbury. Very reasonably priced with large portions.",
    name: "Scot Mckinnon",
    size: "large",
  },
]

function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const review = reviews[activeIndex]

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)

      setActiveIndex((current) => {
        return (current + 1) % reviews.length
      })
    }, 9000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setDirection(-1)

    setActiveIndex((current) => {
      return (current - 1 + reviews.length) % reviews.length
    })
  }

  const goToNext = () => {
    setDirection(1)

    setActiveIndex((current) => {
      return (current + 1) % reviews.length
    })
  }

  const getTextClass = () => {
    if (review.size === "large") {
      return "text-xl leading-[1.6] sm:text-2xl sm:leading-[1.65] lg:text-[25px]"
    }

    if (review.size === "small") {
      return "text-[15px] leading-[1.55] sm:text-base sm:leading-[1.6] lg:text-[18px]"
    }

    return "text-lg leading-[1.65] sm:text-xl sm:leading-[1.7] lg:text-[21px]"
  }

  return (
    <section className="relative overflow-hidden bg-[#F7F7F3] px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31929B]/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#31929B]"
          >
            Sudbury loves Damascus
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 font-heading text-4xl font-semibold tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-6xl"
          >
            What people are saying.
          </motion.h2>

          {/* Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex justify-center gap-1 text-[#31929B]"
            aria-label="5 star rating"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-lg">
                ★
              </span>
            ))}
          </motion.div>
        </div>

        {/* Review area */}
        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
          {/* Constant-height card */}
          <div className="relative h-[600px] overflow-hidden rounded-[2rem] border border-black/[0.07] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)] sm:h-[640px] lg:h-[660px]">
            {/* Teal top line */}
            <div className="absolute left-0 top-0 h-1 w-full bg-[#31929B]" />

            <div className="h-full px-7 py-10 sm:px-12 sm:py-12 lg:px-20 lg:py-14">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 25 : -25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -25 : 25,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-full flex-col"
                >
                  {/* Quote mark */}
                  <div className="font-serif text-6xl leading-none text-[#31929B]/20 sm:text-7xl">
                    “
                  </div>

                  {/* Review text */}
                  <div className="mt-4 flex-1">
                    <blockquote
                      className={`whitespace-pre-line font-body font-medium tracking-[-0.015em] text-[#202020] ${getTextClass()}`}
                    >
                      {review.quote}
                    </blockquote>
                  </div>

                  {/* Reviewer */}
                  <div className="mt-6 flex shrink-0 items-end justify-between border-t border-black/[0.08] pt-6">
                    <div>
                      <p className="font-heading text-base font-bold text-[#111111] sm:text-lg">
                        {review.name}
                      </p>

                      <div className="mt-2 flex gap-1 text-[#31929B]">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-black/25 sm:block">
                      Customer review
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between px-2 sm:px-4">
            {/* Counter */}
            <div className="flex items-center gap-3">
              <span className="font-heading text-sm font-bold text-[#111111]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="text-sm text-black/20">/</span>

              <span className="text-sm font-medium text-black/30">
                {String(reviews.length).padStart(2, "0")}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous review"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] transition-all duration-300 hover:border-[#31929B] hover:bg-[#31929B] hover:text-white"
              >
                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5">
                  ←
                </span>
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next review"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] transition-all duration-300 hover:border-[#31929B] hover:bg-[#31929B] hover:text-white"
              >
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-1.5">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show review ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-9 bg-[#31929B]"
                    : "w-2 bg-black/10 hover:bg-black/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom link */}
        <div className="mt-14 text-center">
          <p className="text-sm font-medium text-black/30">
            Loved by our Sudbury community
          </p>

          <a
            href="https://maps.app.goo.gl/BFYyaPo6j26VUXgM7"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#111111] transition-colors duration-300 hover:text-[#31929B]"
          >
            See all Google reviews
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection