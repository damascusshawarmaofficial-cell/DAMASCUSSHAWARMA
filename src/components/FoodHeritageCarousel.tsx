
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import image9 from "../assets/9.jpeg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpeg";
import image12 from "../assets/12.jpeg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

function FoodHeritageCarousel() {
  const storyImages = {
    bakery: image12,
    restaurant: image10,
    bread: image11,
    family: image9,
    shawarma: image12,
    ingredients: image10,
  };

  const images = [
    storyImages.shawarma,
    storyImages.ingredients,
    storyImages.bread,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt="Damascus food and heritage"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          />
        </AnimatePresence>

        <div className="absolute bottom-5 left-5 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-white"
                  : "w-3 bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 right-5 flex gap-2">
          <button
            onClick={previous}
            aria-label="Previous image"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#171717] transition hover:bg-[#087F87] hover:text-white"
          >
            &#8592;
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#171717] transition hover:bg-[#087F87] hover:text-white"
          >
            &#8594;
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default FoodHeritageCarousel;
