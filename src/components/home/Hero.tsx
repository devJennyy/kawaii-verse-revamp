import { useState, useRef, useEffect } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSize = (index: number, currentIndex: number): { width: number; height: number } => {
    if (windowWidth >= 2520) { 
      return index === currentIndex ? { width: 320, height: 400 } : { width: 290, height: 360 };
    } else if (windowWidth >= 1920) { 
      return index === currentIndex ? { width: 260, height: 340 } : { width: 230, height: 300 };
    } else if (windowWidth >= 1440) { 
      return index === currentIndex ? { width: 190, height: 255 } : { width: 165, height: 220 };
    }
    else { 
      return index === currentIndex ? { width: 170, height: 225 } : { width: 135, height: 185 };
    }
  };

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
      className="relative w-full max-w-[2520px] !mx-auto hidden xl:flex items-end md:items-center overflow-hidden transition-slow xl:h-[770px] 2xl:h-[850px] 3xl:h-[950px] 4xl:h-[1080px] 5xl:h-[1216px]"
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
        {/* Detail Content */}
        <div className="w-1/2 flex flex-col gap-4 2xl:gap-5 5xl:gap-7 text-start !mb-[5rem] 4xl:!mb-[6rem] 5xl:!mb-[7rem]">
          <p className="font-bold text-xl 2xl:text-2xl 4xl:text-3xl text-neonAqua transition-slow">#1 Most Popular</p>
          <p
            key={featuredAnime[currentIndex].title}
            className="font-black text-[54px] 2xl:text-[64px] 4xl:text-[74px] 5xl:text-[84px] leading-none transition-slow"
          >
            {featuredAnime[currentIndex].title}
          </p>
          <p className="w-[430px] 2xl:w-[476px] 4xl:w-[576px] 5xl:w-[676px] 2xl:text-lg 4xl:text-2xl 5xl:text-[28px] transition-slow leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            modi aliquam iste quibusdam quod quasi, nam facere eum earum! Cumque
            veniam, voluptatum laudantium placeat minus doloribus doloremque
            nulla quaerat ad!
          </p>

          <div className="flex items-center gap-2 text-yellow-400">
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow"/>
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow"/>
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow"/>
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow"/>
            <FaRegStarHalfStroke className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow"/>
            <p className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow font-bold">8.23</p>
          </div>

          <div className="flex gap-4 !mt-5 2xl:!mt-8 4xl:!mt-10">
            <button className="w-40 h-13 2xl:w-44 2xl:h-15 4xl:w-51 4xl:h-17 5xl:w-56 5xl:h-20 transition-slow bg-neonAqua flex justify-center items-center rounded-[1rem] text-main gap-2 cursor-pointer">
              <FaPlay className="2xl:text-lg 4xl:text-xl 5xl:text-[22px] transition-slow" />
              <p className="font-bold 2xl:text-lg 4xl:text-xl 5xl:text-[22px] transition-slow">Watch Now</p>
            </button>

            <button className="w-40 h-13 2xl:w-44 2xl:h-15 4xl:w-51 4xl:h-17 5xl:w-56 5xl:h-20 transition-slow bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-[1rem] cursor-pointer">
              <p className="font-bold 2xl:text-lg 4xl:text-xl 5xl:text-[22px] transition-slow">Trailer</p>
            </button>
          </div>
        </div>

        {/* Slider Thumbnails */}
        <div className="absolute right-10">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={3}
            speed={500}
            modules={[Navigation]}
            className="mySwiper w-[510px] 2xl:w-[600px] 4xl:w-[800px] 5xl:w-[1000px] !mb-[5rem] 4xl:!mb-[6rem] 5xl:!mb-[7rem] 4xl:!px-1 5xl:!px-5 transition-slow"
          >
            <div className="flex w-full justify-between">
              {featuredAnime?.map((item, index) => {
                const { width, height } = getSize(index, currentIndex);

                return (
                  <SwiperSlide key={index} className="flex justify-center">
                  <motion.div
                    onClick={() => {
                      setCurrentIndex(index);
                      swiperRef.current?.slideTo(index);
                    }}
                    initial={{
                      width,
                      height,
                      border:
                        index === currentIndex
                          ? "4px solid #5CFEF0"
                          : "4px solid transparent",
                      borderRadius: "20px",
                    }}
                    animate={{
                      width,
                      height,
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
                )
              })}
            </div>
          </Swiper>
        </div>

        {/* Pagination Controls */}
        <div className="absolute bottom-0 right-10 w-1/2 flex justify-end items-center 4xl:gap-6 5xl:gap-12">
          <div className="flex gap-4">
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-fit h-fit border rounded-full p-3 4xl:p-[14px] 5xl:p-4 hover:bg-secondaryBase/20 bg-white/10 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronLeft className="text-[22px] 4xl:text-[26px] 5xl:text-[30px]" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={currentIndex === featuredAnime.length - 1}
              className={`w-fit h-fit border rounded-full p-3 4xl:p-[14px] 5xl:p-4 hover:bg-secondaryBase/20 bg-white/10 ${
                currentIndex === featuredAnime.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronRight className="text-[22px] 4xl:text-[26px] 5xl:text-[30px]" />
            </motion.button>
          </div>

          <div className="h-[2px] 5xl:h-[3px] w-full bg-white/70"></div>

          <p
            key={currentIndex}
            className="w-16 5xl:w-20 text-5xl 4xl:text-[52px] 5xl:text-[64px] font-black text-neonAqua"
          >
            {String(currentIndex + 1).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
