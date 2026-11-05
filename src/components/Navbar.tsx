import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  // const [visible, setVisible] = useState(true)

  // const lastScrollY = useRef(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY

  //     // Always show navbar at the very top
  //     if (currentScrollY < 80) {
  //       setVisible(true)
  //       lastScrollY.current = currentScrollY
  //       return
  //     }

  //     // Scrolling down → hide
  //     if (currentScrollY > lastScrollY.current) {
  //       setVisible(false)
  //       setMobileOpen(false)
  //     }

  //     // Scrolling up → show
  //     else if (currentScrollY < lastScrollY.current) {
  //       setVisible(true)
  //     }

  //     lastScrollY.current = currentScrollY
  //   }

  //   window.addEventListener("scroll", handleScroll, {
  //     passive: true,
  //   })

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  return (
    <motion.header
      initial={{ y: 0 }}
      // animate={{
      //   y: visible ? 0 : "-110%",
      // }}
      // transition={{
      //   duration: 0.35,
      //   ease: [0.4, 0, 0.2, 1],
      // }}
      className="fixed inset-x-0 top-0 z-[100]"
    >
      {/* ======================================= */}
      {/* NAVBAR */}
      {/* ======================================= */}

      <nav
        className="
          relative
          border-b
          border-white/10
          bg-[#087F87]/95
          shadow-[0_6px_30px_rgba(0,0,0,0.18)]
          backdrop-blur-md
        "
      >
        <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ================================= */}
          {/* LOGO */}
          {/* ================================= */}

          <a
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="relative"
            >
              <img
                src="/public/logo.jpg"
                alt="Damascus Shawarma"
                className="
                  h-[58px]
                  w-[58px]
                  rounded-full
                  bg-white
                  object-cover
                  shadow-lg
                  sm:h-[62px]
                  sm:w-[62px]
                "
              />

              <span
                className="
                  absolute
                  -inset-2
                  -z-10
                  rounded-full
                  bg-white/20
                  opacity-0
                  blur-lg
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              />
            </motion.div>

            <div className="hidden sm:block">
              <p className="text-[15px] font-black tracking-[0.18em] text-white">
                DAMASCUS
              </p>

              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/65">
                Shawarma
              </p>
            </div>
          </a>

          {/* ================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================= */}

          <div className="hidden items-center lg:flex">

            <NavItem href="#home">
              Home
            </NavItem>

            <NavItem href="#full-menu">
              Menu
            </NavItem>

            <NavItem href="#story">
              Our Story
            </NavItem>

            <NavItem href="#catering">
              Catering
            </NavItem>

            <NavItem href="#contact">
              Locations
            </NavItem>

            <div className="ml-6">
              <OrderButton />
            </div>

          </div>

          {/* ================================= */}
          {/* MOBILE */}
          {/* ================================= */}

          <div className="flex items-center gap-2 lg:hidden">

            <OrderButton compact />

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((current) => !current)
              }
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
                transition
                hover:scale-105
              "
            >
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-[#087F87] transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-45"
                    : "-translate-y-[4px]"
                }`}
              />

              <span
                className={`absolute h-[2px] w-5 rounded-full bg-[#087F87] transition-all duration-300 ${
                  mobileOpen
                    ? "-rotate-45"
                    : "translate-y-[4px]"
                }`}
              />
            </button>

          </div>

        </div>

        {/* ================================= */}
        {/* MOBILE MENU */}
        {/* ================================= */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                overflow-hidden
                border-t
                border-white/15
                bg-[#087F87]/95
                backdrop-blur-md
                lg:hidden
              "
            >
              <div className="px-5 pb-5 pt-2">

                <MobileItem
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </MobileItem>

                <MobileItem
                  href="#full-menu"
                  onClick={() => setMobileOpen(false)}
                >
                  Menu
                </MobileItem>

                <MobileItem
                  href="#story"
                  onClick={() => setMobileOpen(false)}
                >
                  Our Story
                </MobileItem>

                <MobileItem
                  href="#catering"
                  onClick={() => setMobileOpen(false)}
                >
                  Catering
                </MobileItem>

                <MobileItem
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                >
                  Locations
                </MobileItem>

                <a
                  href="#order"
                  onClick={() => setMobileOpen(false)}
                  className="
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-white
                    px-6
                    py-4
                    text-sm
                    font-black
                    uppercase
                    tracking-wide
                    text-[#087F87]
                    shadow-lg
                    transition
                    hover:-translate-y-0.5
                  "
                >
                  ORDER NOW

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087F87] text-white">
                    →
                  </span>
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  )
}

/* ================================= */
/* NAV ITEM */
/* ================================= */

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="
        group
        relative
        px-4
        py-4
        text-[14px]
        font-bold
        text-white/90
        transition-colors
        duration-300
        hover:text-white
      "
    >
      {children}

      <span
        className="
          absolute
          bottom-2
          left-1/2
          h-[3px]
          w-0
          -translate-x-1/2
          rounded-full
          bg-white
          transition-all
          duration-300
          group-hover:w-5
        "
      />
    </a>
  )
}

/* ================================= */
/* ORDER BUTTON */
/* ================================= */

function OrderButton({
  compact = false,
}: {
  compact?: boolean
}) {
  return (
    <motion.a
      href="#order"
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-white
        font-black
        text-[#087F87]
        shadow-[0_7px_22px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)]
        ${
          compact
            ? "h-11 px-4 text-[10px]"
            : "h-[50px] min-w-[178px] px-5 text-[13px]"
        }
      `}
    >
      {/* Shine */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">

        <span
          className="
            absolute
            -left-[80%]
            top-0
            h-full
            w-[35%]
            rotate-[20deg]
            bg-[#31929B]/20
            blur-md
            transition-all
            duration-700
            group-hover:left-[130%]
          "
        />

      </span>

      <span className="relative flex items-center gap-3 whitespace-nowrap">

        <span className="font-black tracking-[0.05em]">
          ORDER NOW
        </span>

        <span
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#087F87]
            text-[14px]
            font-bold
            text-white
            transition-all
            duration-300
            group-hover:rotate-[-45deg]
            group-hover:scale-110
          "
        >
          →
        </span>

      </span>
    </motion.a>
  )
}

/* ================================= */
/* MOBILE ITEM */
/* ================================= */

function MobileItem({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-white/10
        py-4
        text-base
        font-bold
        text-white
        transition
        hover:text-white/70
      "
    >
      <span>{children}</span>

      <span className="text-lg text-white/70 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}

export default Navbar