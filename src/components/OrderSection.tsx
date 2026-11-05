import { motion } from "motion/react"

const orderingOptions = [
  {
    name: "Skip",
    logo: "/skip.svg",
    fallback: "SKIP",
    label: "Delivery & Pickup",
    description: "Order your Damascus favourites through Skip.",
    href: "https://www.skipthedishes.com/damascus-restaurant",
    accent: "#F4C542",
  },
  {
    name: "DoorDash",
    logo: "/doordash.webp",
    fallback: "DOORDASH",
    label: "Delivery & Pickup",
    description: "Get Damascus delivered through DoorDash.",
    href: "https://www.doordash.com/en-CA/store/damascus-restaurant-greater-sudbury-22978705/12697231/",
    accent: "#FF3008",
  },
  {
    name: "Uber Eats",
    logo: "/ubereats.webp",
    fallback: "UBER EATS",
    label: "Delivery & Pickup",
    description: "Order Damascus through Uber Eats.",
    href: "https://www.ubereats.com/ca/store/damascus-shawarma/SLmGUWQeXwCecmcqXnjoJg?diningMode=DELIVERY&surfaceName=",
    accent: "#111111",
  },
]

function OrderSection() {
  return (
    <section
      id="order"
      className="
        relative
        overflow-hidden
        bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.10),transparent_30%),linear-gradient(135deg,#075F65_0%,#087F87_55%,#076B72_100%)]
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-36
      "
    >

      {/* ===================================== */}
      {/* BACKGROUND LIGHT */}
      {/* ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-black/10
          blur-[130px]
        "
      />

      {/* ===================================== */}
      {/* DECORATIVE CIRCLES */}
      {/* ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[15%]
          h-40
          w-40
          rounded-full
          border
          border-white/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[18%]
          h-24
          w-24
          rounded-full
          border
          border-white/5
        "
      />

      {/* ===================================== */}
      {/* CONTENT */}
      {/* ===================================== */}

      <div className="relative mx-auto max-w-[1400px]">

        {/* ===================================== */}
        {/* HEADING */}
        {/* ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.65,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="mb-6 flex items-center justify-center gap-3">

            <span className="h-2 w-2 rounded-full bg-white" />

            <span
              className="
                font-heading
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.35em]
                text-white/70
              "
            >
              Hungry?
            </span>

            <span className="h-2 w-2 rounded-full bg-white" />

          </div>

          <h2
            className="
              font-display
              text-6xl
              font-black
              uppercase
              leading-[0.8]
              tracking-tight
              text-white
              sm:text-8xl
              lg:text-[9rem]
            "
          >
            Order
            <br />

            <span className="text-white/45">
              Your Way.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              font-body
              text-base
              leading-7
              text-white/65
              sm:text-lg
            "
          >
            Pick your favourite way to enjoy Damascus.
            Order online for delivery or pickup, or call
            us directly.
          </p>

        </motion.div>

        {/* ===================================== */}
        {/* PLATFORM CARDS */}
        {/* ===================================== */}

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {orderingOptions.map((option, index) => (
            <OrderCard
              key={option.name}
              option={option}
              index={index}
            />
          ))}

        </div>

        {/* ===================================== */}
        {/* DIRECT CALL */}
        {/* ===================================== */}

        <motion.a
          href="tel:+17052220045"
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.2,
            duration: 0.5,
          }}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.99,
          }}
          className="
            group
            mt-5
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[1.75rem]
            border
            border-white/20
            bg-white/10
            p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-white/[0.16]
            sm:flex-row
            sm:p-7
          "
        >

          {/* LEFT */}

          <div className="flex items-center gap-5">

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#087F87]
                shadow-lg
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.07 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>
            </div>

            <div>

              <p
                className="
                  font-heading
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.28em]
                  text-white/45
                "
              >
                Prefer to order directly?
              </p>

              <h3
                className="
                  mt-1
                  font-heading
                  text-xl
                  font-extrabold
                  text-white
                  sm:text-2xl
                "
              >
                Call Damascus
              </h3>

              <p
                className="
                  mt-1
                  font-body
                  text-sm
                  text-white/45
                "
              >
                (705) 222-0045
              </p>

            </div>

          </div>

          {/* ARROW */}

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#087F87]
              transition-all
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </div>

        </motion.a>

        {/* ===================================== */}
        {/* BOTTOM BRAND */}
        {/* ===================================== */}

        <div className="mt-10 text-center">

          <p
            className="
              font-heading
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.35em]
              text-white/30
            "
          >
            Damascus Shawarma · Greater Sudbury
          </p>

        </div>

      </div>
    </section>
  )
}


/* ===================================== */
/* ORDER CARD */
/* ===================================== */

function OrderCard({
  option,
  index,
}: {
  option: (typeof orderingOptions)[number]
  index: number
}) {
  return (
    <motion.a
      href={option.href}
      target="_blank"
      rel="noopener noreferrer"
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
        delay: index * 0.1,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[1.75rem]
        border
        border-black/5
        bg-white
        p-7
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]
        sm:p-8
      "
    >

      {/* ================================= */}
      {/* PLATFORM ACCENT */}
      {/* ================================= */}

      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{
          backgroundColor: option.accent,
        }}
      />

      {/* ================================= */}
      {/* CARD CONTENT */}
      {/* ================================= */}

      <div className="flex min-h-[260px] flex-col justify-between">

        <div>

          {/* ================================= */}
          {/* LOGO AREA */}
          {/* ================================= */}

          <div
            className="
              flex
              h-20
              w-full
              items-center
              justify-center
            "
          >

            <div
              className="
                flex
                h-16
                w-[180px]
                items-center
                justify-center
              "
            >

              <img
                src={option.logo}
                alt={`${option.name} logo`}
                className="
                  block
                  max-h-11
                  max-w-[150px]
                  w-auto
                  object-contain
                "
                onError={(event) => {
                  event.currentTarget.style.display = "none"

                  const fallback =
                    event.currentTarget.nextElementSibling as HTMLElement | null

                  if (fallback) {
                    fallback.style.display = "block"
                  }
                }}
              />

              <span
                style={{
                  display: "none",
                }}
                className="
                  font-display
                  text-3xl
                  font-black
                  uppercase
                  leading-none
                  tracking-tight
                  text-[#111111]
                  text-center
                "
              >
                {option.fallback}
              </span>

            </div>

          </div>

          {/* ================================= */}
          {/* LABEL */}
          {/* ================================= */}

          <p
            className="
              mt-3
              text-center
              font-heading
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.28em]
              text-black/35
            "
          >
            {option.label}
          </p>

          {/* ================================= */}
          {/* DESCRIPTION */}
          {/* ================================= */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xs
              text-center
              font-body
              text-sm
              leading-6
              text-black/50
            "
          >
            {option.description}
          </p>

        </div>

        {/* ================================= */}
        {/* CTA */}
        {/* ================================= */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-black/8
            pt-5
          "
        >

          <span
            className="
              font-heading
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-[#087F87]
            "
          >
            Order Online
          </span>

          <span
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#087F87]
              text-lg
              text-white
              shadow-md
              transition-all
              duration-300
              group-hover:rotate-[-45deg]
              group-hover:scale-110
              group-hover:bg-[#075F65]
            "
          >
            →
          </span>

        </div>

      </div>

    </motion.a>
  )
}

export default OrderSection