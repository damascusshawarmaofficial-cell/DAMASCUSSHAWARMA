
import { motion } from "motion/react";
import { useRef, useState } from "react";

import storyVideo from "../assets/videos/storyVideos.mp4";
import image9 from "../assets/9.jpeg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpeg";
import image12 from "../assets/12.jpeg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/14.jpg";
import image15 from "../assets/15.jpg";

// ANIMATIONS
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

// STORY IMAGES
const storyImages = {
  bakery: image12,
  restaurant: image10,
  bread: image11,
  family: image9,
  food: image15
};

// MAIN PAGE
export default function OurStoryPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // VIDEO CONTROLS
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <main className="overflow-hidden bg-[#111111] text-white">

      {/* HERO */}

{/* SPLIT SCREEN HERO */}
<section className="bg-[#111111] px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
  <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-2 lg:gap-16">

    {/* LEFT: STORY CONTENT */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="order-1 flex flex-col justify-center py-8 lg:py-12"
    >
      <span className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#43B3B6]">
        <span className="h-px w-10 bg-[#43B3B6]" />
        Our Story · Damascus Shawarma
      </span>

      <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
        A journey that
        <br />
        began with
        <br />
        <span className="italic text-[#43B3B6]">
          a dream.
        </span>
      </h1>

      <p className="mt-8 max-w-lg text-base leading-8 text-white/65 md:text-lg">
        From our roots in Syria to our home in Sudbury, our story is about
        family, tradition, and the joy of sharing food with the people
        around us.
      </p>

      <div className="mt-10">
        <a
          href="#our-story"
          className="inline-flex items-center gap-5 border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#43B3B6] hover:bg-[#087F87]"
        >
          Discover Our Story
          <span className="text-lg">↓</span>
        </a>
      </div>

      <div className="mt-14 flex items-center gap-4">
        <span className="h-px w-12 bg-[#43B3B6]" />
        <span className="font-serif text-lg italic text-white/50">
          From Damascus to Sudbury
        </span>
      </div>
    </motion.div>

    {/* RIGHT: VIDEO */}
   
{/* RIGHT: VIDEO */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="order-2 relative"
>
<div
  className="relative h-[460px] overflow-hidden bg-cover bg-center bg-no-repeat sm:h-[560px] lg:h-[660px]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(17,17,17,0.72), rgba(17,17,17,0.72)),
      url(${image10})
    `,
  }}
>
    <video
      ref={videoRef}
      src={storyVideo}
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-contain"
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    />

    {/* SUBTLE VIDEO OVERLAY */}
    <div className="pointer-events-none absolute inset-0 bg-black/5" />

    {/* VIDEO CONTROLS */}
    <div className="absolute bottom-6 right-6 z-10 flex gap-3">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-md transition hover:bg-[#087F87]"
      >
        {isPlaying ? "Ⅱ" : "▶"}
      </button>

      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-md transition hover:bg-[#087F87]"
      >
        {isMuted ? "♪" : "♫"}
      </button>
    </div>

  </div>

  {/* SMALL CAPTION */}
  <div className="mt-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
    <span>Our heritage · Our passion</span>
    <span>Damascus Shawarma</span>
  </div>
</motion.div>

  </div>
</section>


      {/* INTRODUCTION */}
      <section
        id="our-story"
        className="bg-[#F4F0E8] px-6 py-24 text-[#202020] md:px-12 md:py-36 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2 lg:gap-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-[#087F87]/60 md:-left-7 md:-top-7" />

            <img
              src={storyImages.restaurant}
              alt="Damascus family bakery"
              className="relative z-10 h-[420px] w-full object-cover md:h-[570px]"
              loading="lazy"
            />

            <div className="absolute -bottom-6 -right-4 z-20 bg-[#087F87] px-7 py-6 text-white md:-right-7">
              <p className="font-serif text-3xl italic">من دمشق</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em]">
                From Damascus
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#087F87]">
              The heart of our story
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              More than a restaurant.
              <br />
              <span className="italic text-[#087F87]">
                A story of home.
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#555555] md:text-base">
              <p>
                Our story began in Syria, where food was always more than
                something served at the table. It was a way of bringing
                people together, sharing traditions, and making everyone
                feel at home.
              </p>

              <p>
                For Hussein, that connection started early. His passion
                for baking began at just 16, growing into a lifelong
                appreciation for the craft, flavours, and traditions of
                his homeland.
              </p>

              <p>
                Those early experiences became part of something bigger:
                a family dream built around food, hospitality, and the
                belief that a good meal can bring people closer together.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#087F87]" />
              <span className="font-serif text-xl italic text-[#087F87]">
                Rooted in tradition
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="bg-[#111111] px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1400px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#43B3B6]">
              A new beginning
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              A new home.
              <br />
              <span className="italic text-[#43B3B6]">
                The same passion.
              </span>
            </h2>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="relative"
            >
              <img
                src={storyImages.bread}
                alt="Traditional freshly prepared pastries"
                className="h-[350px] w-full object-cover md:h-[540px]"
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 bg-[#087F87] px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Tradition carried forward
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="space-y-6 text-[15px] leading-8 text-white/65 md:text-base"
            >
              <p>
                When life brought our family to Canada, we carried those
                memories and traditions with us. Starting over in Sudbury
                was not always easy, but the kindness and support of this
                community helped turn a new beginning into an opportunity.
              </p>

              <p>
                With hard work, determination, and a dream of building
                something of our own, our family took its first steps
                towards creating a place where we could share the food
                and hospitality we grew up with.
              </p>

              <p>
                In 2018, that dream became Damascus Cafe & Bakery. What
                began as a family dream grew into a place where we could
                share a little taste of home with the people around us.
              </p>

              <p>
                Today, that journey continues through Damascus Shawarma.
                We are proud of where we came from and grateful for the
                community that has welcomed us along the way.
              </p>

              <div className="border-l-2 border-[#43B3B6] py-2 pl-6">
                <p className="font-serif text-2xl italic text-white md:text-3xl">
                  Every new beginning carries a little piece of home.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAMILY HISTORY PHOTO GALLERY */}
      <section className="bg-[#F4F0E8] px-6 py-24 text-[#202020] md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1400px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#087F87]">
                A piece of our history
              </span>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                The memories behind
                <br />
                <span className="italic text-[#087F87]">
                  our beginnings.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-8 text-[#666666] md:text-base">
              Every journey has moments that stay with us forever.
              These photographs capture some of ours — the people,
              the hard work, and the little beginnings that helped
              shape the Damascus story.
            </p>
          </motion.div>

          {/* PHOTO GRID */}
          <div className="grid gap-5 md:grid-cols-12">

            {/* FAMILY PHOTO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="group relative overflow-hidden md:col-span-7"
            >
              <img
                src={storyImages.family}
                alt="A family memory from the Damascus journey"
                className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[530px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#66D0D0]">
                  A new chapter
                </span>

                <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                  Family first. Always.
                </h3>
              </div>
            </motion.div>

            {/* ORIGINAL BAKERY */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group relative overflow-hidden md:col-span-5"
            >
              <img
                src={storyImages.bakery}
                alt="An early memory from the Damascus bakery"
                className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[530px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white md:p-9">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#66D0D0]">
                  The early days
                </span>

                <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                  A dream taking shape.
                </h3>
              </div>
            </motion.div>

            {/* BAKING AND HARD WORK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="group relative overflow-hidden md:col-span-12"
            >
              <img
                src={storyImages.bread}
                alt="Hussein preparing baked goods in the bakery"
                className="h-[350px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.03] md:h-[470px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white md:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#66D0D0]">
                  Passion and hard work
                </span>

                <h3 className="mt-3 font-serif text-3xl md:text-5xl">
                  Built with dedication.
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-white/75 md:text-base">
                  A family dream, shaped by hard work, tradition,
                  and a love for sharing food.
                </p>
              </div>
            </motion.div>
          </div>

          {/* GALLERY CLOSING */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-14 border-t border-[#202020]/15 pt-9 text-center"
          >
            <p className="mx-auto max-w-3xl font-serif text-2xl italic leading-relaxed text-[#087F87] md:text-3xl">
              Behind every photograph is a memory, behind every memory
              is a story, and behind Damascus is a family.
            </p>
          </motion.div>

        </div>
      </section>

<section
        id="our-story"
        className="bg-[#F4F0E8] px-6 py-24 text-[#202020] md:px-12 md:py-36 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2 lg:gap-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-[#087F87]/60 md:-left-7 md:-top-7" />

            <img
              src={storyImages.food}
              alt="Damascus family bakery"
              className="relative z-10 h-[420px] w-full object-cover md:h-[570px]"
              loading="lazy"
            />


          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#087F87]">
              Our Food · Our Heritage

            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              The flavours we grew up with. Shared with you.
              <br />
              
            </h2>

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#555555] md:text-base">
              <p>
                Food has always been more than a meal for us. It is a connection
              to home, family, and the traditions that bring people together.
              </p>

              <p>
                For Hussein, that connection started early. His passion
                for baking began at just 16, growing into a lifelong
                appreciation for the craft, flavours, and traditions of
                his homeland.
              </p>

              <p>
                              Inspired by the flavours of Syria, we bring our heritage to every
              dish we prepare. From freshly baked bread to carefully seasoned
              shawarma, every meal is made to be shared and enjoyed.

              </p>
              <span className="italic text-[#087F87]">
              A taste of home, made to be shared.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

  
      {/* COMMUNITY */}
      <section className="relative overflow-hidden bg-[#171717] px-6 py-28 text-center md:px-12 md:py-36">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#087F87]/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#087F87]/10 blur-[100px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#43B3B6]">
            With gratitude
          </span>

          <h2 className="mt-7 font-serif text-4xl leading-tight md:text-6xl">
            A journey made special
            <br />
            <span className="italic text-[#43B3B6]">
              by the people along the way.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60">
            Sudbury has become more than the place where our family
            built a business. It has become part of our story. To everyone
            who has welcomed us, supported us, and shared a meal with us,
            thank you. Your support means more than words can express.
          </p>

          <div className="mx-auto mt-12 h-px w-20 bg-[#43B3B6]" />

          <p className="mt-8 font-serif text-2xl italic text-white">
            From our family, with love.
          </p>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#087F87] px-6 py-24 text-center text-white md:px-12 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-4xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Your table is waiting
          </span>

          <h2 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
            From our family
            <br />
            <span className="italic">to your table.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/80">
            Come experience the flavours, hospitality, and traditions
            that make Damascus special.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#menu"
              className="inline-flex items-center justify-center bg-white px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#087F87] transition hover:bg-[#111111] hover:text-white"
            >
              Explore Our Menu
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-white/70 px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#087F87]"
            >
              Visit Us
            </a>
          </div>

          {/* BRAND CLOSING */}
          <div className="mx-auto mt-20 max-w-3xl border-t border-white/25 pt-10">
            <p className="text-base leading-8 text-white/85 md:text-lg">
              Every meal is another opportunity to share our heritage and
              welcome you to our table.
            </p>

            <h3 className="mt-7 font-serif text-2xl font-bold uppercase leading-relaxed tracking-[0.08em] md:text-3xl">
              THE ONLY THING BETTER THAN SHAWARMA IS MORE SHAWARMA.
            </h3>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
