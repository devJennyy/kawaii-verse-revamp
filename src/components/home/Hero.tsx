import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  const featuredAnime = [
    { title: "Tokyo Ghoul", image: "/images/sample.jpg" },
    { title: "Jujutsu No Kaisen", image: "/images/sample1.jpg" },
    { title: "One Piece", image: "/images/sample2.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredAnime.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredAnime.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative w-full h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[45vh] xl:h-[55vh] 2xl:h-[65vh] 3xl:h-[85vh] flex items-end md:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          key={currentIndex}
          src={featuredAnime[currentIndex].image}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-b from-main/0 to-main z-10"></div>
      <div className="absolute left-0 w-[50%] h-full bg-gradient-to-l from-main/0 to-main z-10"></div>

      <div className="relative w-full h-full flex items-end z-20 !mb-[10rem] px-10">
        {/* Content Layer */}
        <div className="w-1/2 flex flex-col gap-3 text-start !mb-[5rem]">
          <p className="font-bold text-2xl text-neonAqua">#1 Most Popular</p>

          <p
            key={featuredAnime[currentIndex].title}
            className="font-black text-[64px] leading-none"
          >
            {featuredAnime[currentIndex].title}
          </p>

          <p className="w-[476px] text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam
            consectetur quis autem eaque. Enim magni quo qui ab vitae
            accusantium culpa aperiam libero. Eum perferendis veritatis veniam
            sed aspernatur!
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-yellow-400">
              <FaStar size={24} />
              <FaStar size={24} />
              <FaStar size={24} />
              <FaStar size={24} />
              <FaRegStarHalfStroke size={24} />
              <p className="text-xl font-bold">8.23</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <p className="text-xl font-bold">10,000+ Views</p>
          </div>

          <div className="flex gap-4 !mt-10">
            <button className="w-48 h-16 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex justify-center items-center gap-2 rounded-[1rem]">
              <FaPlay size={20} className="text-white" />
              <p className="text-white font-bold text-lg">Trailer</p>
            </button>

            <button className="w-48 h-16 bg-neonAqua flex justify-center items-center rounded-[1rem] text-main">
              <p className="font-bold text-lg">Watch Now</p>
            </button>
          </div>
        </div>

        {/* Slider Thumbnails */}
        <div className="w-1/2 flex justify-end items-end gap-7 !mb-[5rem]">
          {featuredAnime?.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentIndex(index)}
              initial={{
                width: index === currentIndex ? 173 : 140,
                height: index === currentIndex ? 227 : 190,
                border:
                  index === currentIndex
                    ? "4px solid #5CFEF0"
                    : "4px solid transparent",
                borderRadius: "12px",
              }}
              animate={{
                width: index === currentIndex ? 200 : 160,
                height: index === currentIndex ? 255 : 220,
                border:
                  index === currentIndex
                    ? "4px solid #5CFEF0"
                    : "4px solid transparent",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 25,
                duration: 0.25,
              }}
              className="overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full rounded-xl object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="absolute bottom-0 right-10 w-full flex justify-end items-center gap-5">
          <div className="flex gap-3">
            <motion.button
              onClick={handlePrev}
              className="w-fit h-fit border rounded-full p-[10px] hover:bg-secondaryBase/20"
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-fit h-fit border rounded-full p-[10px] hover:bg-secondaryBase/20"
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>

          <div className="h-[1px] w-[35%] bg-secondaryBase/80"></div>

          <p
            key={currentIndex}
            className="w-16 font-black text-5xl text-neonAqua"
          >
            {String(currentIndex + 1).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
