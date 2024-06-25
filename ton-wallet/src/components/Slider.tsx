import { motion } from "framer-motion";

const Slider = () => {
  const slides = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden ">
      {/* Wrapping div for seamless looping */}
      <motion.div
        style={{ display: "flex" }}
        whileHover={{ opacity: "0", transition: { duration: 0.5, delay: 0.1 } }}
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              {slide.number}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
