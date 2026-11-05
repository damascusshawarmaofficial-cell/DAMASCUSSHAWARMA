import { motion } from "motion/react"

const favorites = [
  {
    name: "Chicken Shawarma Wrap",
    description:
      "Tender chicken shawarma, fresh vegetables, pickles and our signature garlic sauce.",
    price: "$12.99",
    image:"src/1.jpeg"  },
  {
    name: "Chicken Shawarma Plate",
    description:
      "Freshly sliced chicken shawarma served with rice, vegetables and signature sauces.",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Beef Shawarma Wrap",
    description:
      "Seasoned beef shawarma wrapped with fresh vegetables and our favourite sauces.",
    price: "$13.99",
    image:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Falafel Wrap",
    description:
      "Crispy falafel, fresh vegetables, pickles and creamy tahini sauce.",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  },
]

function FeaturedMenu() {
  return (
    <section
      id="menu"
      className="bg-[#FAFAF8] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#31929B]">
              A taste of Damascus
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
              Our favorites.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55">
            Freshly prepared, full of flavour, and made for sharing — or keeping
            all to yourself.
          </p>

        </div>

        {/* Food Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-black/5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-sm font-medium text-white/80">
                  0{index + 1}
                </span>

                {/* Price */}
                <span className="absolute bottom-5 right-5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#111111]">
                  {item.price}
                </span>
              </div>

              {/* Content */}
              <div className="px-1 pt-5">

                <h3 className="text-xl font-semibold text-[#111111]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  {item.description}
                </p>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="#full-menu"
            className="group inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold text-[#111111] transition hover:border-[#31929B] hover:bg-[#31929B] hover:text-white"
          >
            View Full Menu

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default FeaturedMenu