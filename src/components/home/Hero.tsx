import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

const Hero = () => {
  const featuredAnime = [
    { title: "Tokyo Ghoul", image: "/images/sample.jpg" },
    { title: "Jujutsu No Kaisen", image: "/images/sample1.jpg" },
    { title: "One Piece", image: "/images/sample2.jpeg" },
    { title: "Attack On Titan", image: "/images/sample3.jpg" },
    { title: "Kimi No Nawa", image: "/images/sample4.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      const newIndex =
        currentIndex === featuredAnime.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      swiperRef.current.slideTo(newIndex);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      const newIndex =
        currentIndex === 0 ? featuredAnime.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      swiperRef.current.slideTo(newIndex);
    }
  };

  return (
    <section
      className="relative w-full hidden xl:flex items-end md:items-center overflow-hidden transition-all duration-1000 xl:h-[770px] 2xl:h-[850px] 3xl:h-[950px] 4xl:h-screen"
      style={{ maxHeight: "100vh" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          key={currentIndex}
          src={featuredAnime[currentIndex].image}
          alt="Background"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-b from-main/0 to-main z-10"></div>
      <div className="absolute left-0 w-[50%] h-full bg-gradient-to-l from-main/0 to-main z-10"></div>

      {/* Content Layer */}
      <div className="relative w-full h-full flex items-end z-20 !mb-[10rem] px-10">
        <div className="w-1/2 flex flex-col gap-5 text-start !mb-[5rem]">
          <p className="font-bold text-2xl text-neonAqua">#1 Most Popular</p>
          <p
            key={featuredAnime[currentIndex].title}
            className="font-black text-[64px] leading-none"
          >
            {featuredAnime[currentIndex].title}
          </p>
          <p className="w-[476px] text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            modi aliquam iste quibusdam quod quasi, nam facere eum earum! Cumque
            veniam, voluptatum laudantium placeat minus doloribus doloremque
            nulla quaerat ad!
          </p>

          <div className="flex items-center gap-2 text-yellow-400">
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaRegStarHalfStroke size={24} />
            <p className="text-xl font-bold">8.23</p>
          </div>

          <div className="flex gap-4 !mt-10">
            <button className="w-48 h-16 bg-neonAqua flex justify-center items-center rounded-[1rem] text-main gap-2">
              <FaPlay size={20} />
              <p className="font-bold text-lg">Watch Now</p>
            </button>

            <button className="w-48 h-16 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-[1rem]">
              <p className="font-bold text-lg">Trailer</p>
            </button>
          </div>
        </div>

        {/* Slider Thumbnails */}
        <div className="absolute right-10">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={3}
            // spaceBetween={25}
            speed={500}
            modules={[Navigation]}
            className="mySwiper w-[600px] !mb-[5rem] !px-1"
          >
            <div className="flex w-full justify-between">
              {featuredAnime.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <motion.div
                    onClick={() => {
                      setCurrentIndex(index);
                      swiperRef.current?.slideTo(index);
                    }}
                    initial={{
                      width: index === currentIndex ? 190 : 165,
                      height: index === currentIndex ? 255 : 220,
                      border:
                        index === currentIndex
                          ? "4px solid #5CFEF0"
                          : "4px solid transparent",
                      borderRadius: "20px",
                    }}
                    animate={{
                      width: index === currentIndex ? 190 : 165,
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
                      className="w-full h-full rounded-xl object-cover transition-all duration-300 ease-in-out"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* Pagination Controls */}
        <div className="absolute bottom-0 right-10 w-full flex justify-end items-center gap-6">
          <div className="flex gap-4">
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-fit h-fit border rounded-full p-3 hover:bg-secondaryBase/20 bg-white/10 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronLeft size={22} />
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={currentIndex === featuredAnime.length - 1}
              className={`w-fit h-fit border rounded-full p-3 hover:bg-secondaryBase/20 bg-white/10 ${
                currentIndex === featuredAnime.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronRight size={22} />
            </motion.button>
          </div>

          <div className="h-[2px] w-[35.5%] bg-white/70"></div>

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
