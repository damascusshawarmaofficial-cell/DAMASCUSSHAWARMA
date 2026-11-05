import { motion } from "motion/react"
import garlicImage from "../assets/food/Menu/garlic.png";
function SignatureSection() {
  return (
    <section className="relative overflow-hidden bg-[#F3F8F8] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#31929B]">
            The Signature
          </p> */}

          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-8xl">
            Garlic Sauce.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/50">
            Creamy, fresh and full of flavour. The perfect finishing touch
            for a great shawarma.
          </p>
        </motion.div>

        {/* Main visual */}
        <div className="relative mt-16">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden rounded-[2rem] sm:rounded-[3rem]"
          >
            <img
  src={garlicImage}
  alt="Creamy sauce served with fresh food"
  className="h-full w-full object-cover"
/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Image text */}
            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Made for shawarma
              </p>

              <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                One more spoonful.
              </p>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -bottom-8 right-4 hidden rounded-2xl bg-[#31929B] px-7 py-6 text-white shadow-2xl sm:block lg:right-12"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">
              Signature
            </p>

            <p className="mt-1 text-xl font-semibold">
              Damascus Garlic
            </p>
          </motion.div>

        </div>

        {/* Bottom features */}
        {/* <div className="mx-auto mt-20 grid max-w-4xl gap-8 border-t border-black/10 pt-10 sm:grid-cols-3">

          <Feature
            number="01"
            title="Creamy"
            text="Smooth and rich."
          />

          <Feature
            number="02"
            title="Fresh"
            text="Prepared with care."
          />

          <Feature
            number="03"
            title="Full of flavour"
            text="Made for shawarma."
          />

        </div> */}
      </div>
    </section>
  )
}

type FeatureProps = {
  number: string
  title: string
  text: string
}

function Feature({ number, title, text }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      <span className="text-xs font-semibold text-[#31929B]">
        {number}
      </span>

      <div>
        <h3 className="font-semibold text-[#111111]">
          {title}
        </h3>

        <p className="mt-1 text-sm text-black/45">
          {text}
        </p>
      </div>
    </motion.div>
  )
}

export default SignatureSection