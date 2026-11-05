import { useState } from "react"
import { motion } from "motion/react"
import {
  menuCategories,
  type MenuCategory,
  type MenuItem,
} from "../data/menu"

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("plates")

  const currentCategory =
    menuCategories.find(
      (category) => category.id === activeCategory
    ) ?? menuCategories[0]

  return (
    <section
      id="full-menu"
      className="relative overflow-hidden bg-[#FAFAF8] py-24 sm:py-28 lg:py-36"
    >
      {/* ===================================== */}
      {/* DECORATIVE BACKGROUND */}
      {/* ===================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#087F87]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#31929B]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* ===================================== */}
        {/* HEADER */}
        {/* ===================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#31929B]" />

            <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.35em] text-[#087F87]">
              Fresh from Damascus
            </span>

            <span className="h-2 w-2 rounded-full bg-[#31929B]" />
          </div>

          <h2 className="font-heading text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.055em] text-[#111111] sm:text-6xl lg:text-8xl">
            Our
            <span className="text-[#087F87]">
              {" "}Menu.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-7 text-black/55 sm:text-lg">
            Authentic Syrian flavours, freshly prepared in Sudbury.
            From shawarma and falafel to family meals and traditional
            desserts.
          </p>

        </div>

        {/* ===================================== */}
        {/* CATEGORY NAVIGATION */}
        {/* ===================================== */}

        <div className="mt-14 overflow-x-auto pb-3 scrollbar-hide">
          <div className="mx-auto flex w-max items-center gap-2 rounded-full border border-black/10 bg-white p-2 shadow-[0_8px_35px_rgba(0,0,0,0.06)]">

            {menuCategories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                active={activeCategory === category.id}
                onClick={() =>
                  setActiveCategory(category.id)
                }
              />
            ))}

          </div>
        </div>

        {/* ===================================== */}
        {/* ACTIVE CATEGORY */}
        {/* ===================================== */}

        <motion.div
          key={currentCategory.id}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="mt-14"
        >

          {/* Category heading */}

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#31929B]">
                Damascus selection
              </p>

              <h3 className="mt-2 font-display text-5xl font-black uppercase leading-none tracking-tight text-[#111111] sm:text-6xl">
                {currentCategory.name}
              </h3>

            </div>

            <p className="max-w-xl font-body text-sm leading-6 text-black/50 sm:text-right">
              {currentCategory.description}
            </p>

          </div>

          {/* ===================================== */}
          {/* MENU GRID */}
          {/* ===================================== */}

          {/* MENU GRID */}

{currentCategory.id === "drinks" ? (

  // DRINKS - TEXT ONLY, NO IMAGES
  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">

    {currentCategory.items.map((item, index) => (
      <motion.article
        key={item.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04, duration: 0.3 }}
        className="flex min-h-[105px] items-center justify-between rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition hover:shadow-md"
      >
        <div>
          <h4 className="font-display text-xl font-black uppercase text-[#111111]">
            {item.name}
          </h4>

          <p className="mt-1 font-body text-sm text-black/50">
            {item.description}
          </p>
        </div>

        <span className="ml-4 whitespace-nowrap font-heading text-sm font-bold text-[#087F87]">
          {item.price.price}
        </span>
      </motion.article>
    ))}

  </div>

) : (

  // ALL OTHER CATEGORIES - KEEP EXISTING DESIGN
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

    {currentCategory.items.map((item, index) => (
      <MenuCard
        key={item.id}
        item={item}
        index={index}
      />
    ))}

  </div>

)}

        </motion.div>

        {/* ===================================== */}
        {/* ORDER CTA */}
        {/* ===================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#087F87] px-7 py-10 text-center shadow-[0_20px_60px_rgba(8,127,135,0.18)] sm:px-12 sm:py-12">

          <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.35em] text-white/65">
            Hungry already?
          </p>

          <h3 className="mt-3 font-display text-5xl font-black uppercase leading-none text-white sm:text-6xl">
            Your table is waiting.
          </h3>

          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-6 text-white/70">
            Order your favourites from Damascus Shawarma
            and enjoy authentic Syrian flavours in Sudbury.
          </p>

          <motion.a
            href="#order"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-heading text-sm font-extrabold uppercase tracking-wide text-[#087F87] shadow-xl"
          >
            Order Now

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087F87] text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
              →
            </span>
          </motion.a>

        </div>

      </div>
    </section>
  )
}

/* ===================================== */
/* CATEGORY BUTTON */
/* ===================================== */

function CategoryButton({
  category,
  active,
  onClick,
}: {
  category: MenuCategory
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        whitespace-nowrap
        rounded-full
        px-4
        py-2.5
        font-heading
        text-[11px]
        font-extrabold
        uppercase
        tracking-wide
        transition-all
        duration-300
        sm:px-5
        ${
          active
            ? "bg-[#087F87] text-white shadow-md"
            : "text-black/55 hover:bg-[#087F87]/8 hover:text-[#087F87]"
        }
      `}
    >
      {category.shortName}
    </button>
  )
}

/* ===================================== */
/* MENU CARD */
/* ===================================== */

function MenuCard({
  item,
  index,
}: {
  item: MenuItem
  index: number
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.035,
        duration: 0.35,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        flex
        h-[360px]
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        border-black/8
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        transition-shadow
        duration-300
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
      "
    >
      <div className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-[#087F87] transition-transform duration-300 group-hover:scale-x-100" />

      {/* Compact image / placeholder area */}
      <div className="relative h-40 shrink-0 overflow-hidden bg-[#087F87]/[0.06]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(8,127,135,0.10),transparent_55%)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#087F87]/15 bg-white/50">
              <span className="h-3 w-3 rounded-full bg-[#087F87]/30" />
            </div>
          </div>
        )}

        {(item.featured || item.vegetarian) && (
          <div className="absolute left-4 top-4 flex items-center gap-2">
            {item.featured && (
              <span className="rounded-full bg-white/90 px-2.5 py-1 font-heading text-[9px] font-extrabold uppercase tracking-wider text-[#087F87] shadow-sm backdrop-blur-sm">
                Signature
              </span>
            )}

            {item.vegetarian && (
              <span className="rounded-full bg-white/90 px-2.5 py-1 font-heading text-[9px] font-extrabold uppercase tracking-wider text-[#087F87] shadow-sm backdrop-blur-sm">
                Vegetarian
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-display text-2xl font-black uppercase leading-[0.95] tracking-tight text-[#111111]">
          {item.name}
        </h4>

        <p className="mt-2 font-body text-sm leading-5 text-black/50">
          {item.description}
        </p>

        <div className="mt-auto flex items-end justify-between border-t border-black/8 pt-3">
          <div>
            {item.serves && (
              <p className="mb-1 font-heading text-[9px] font-extrabold uppercase tracking-wider text-[#087F87]">
                {item.serves}
              </p>
            )}

            <p className="font-heading text-[9px] font-bold uppercase tracking-[0.18em] text-black/35">
              Damascus Shawarma
            </p>
          </div>

          <PriceDisplay price={item.price} />
        </div>
      </div>
    </motion.article>
  )
}
/* ===================================== */
/* PRICE */
/* ===================================== */

function PriceDisplay({
  price,
}: {
  price: MenuItem["price"]
}) {
  if (price.regular || price.large) {
    return (
      <div className="flex items-end gap-3">

        {price.regular && (
          <div className="text-right">

            {price.large && (
              <p className="font-heading text-[8px] font-bold uppercase tracking-wider text-black/35">
                Regular
              </p>
            )}

            <p className="font-heading text-lg font-extrabold text-[#087F87]">
              {price.regular}
            </p>

          </div>
        )}

        {price.large && (
          <div className="text-right">

            <p className="font-heading text-[8px] font-bold uppercase tracking-wider text-black/35">
              Large
            </p>

            <p className="font-heading text-lg font-extrabold text-[#087F87]">
              {price.large}
            </p>

          </div>
        )}

      </div>
    )
  }

  return (
    <p className="font-heading text-xl font-extrabold text-[#087F87]">
      {price.price}
    </p>
  )
}

export default MenuSection