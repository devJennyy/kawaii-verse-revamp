import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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

  const getSize = (
    index: number,
    currentIndex: number
  ): {
    width: number;
    height: number;
    border: string;
    borderRadius: string;
  } => {
    if (windowWidth >= 4096) {
      return index === currentIndex
        ? {
            width: 545,
            height: 645,
            border: "12px solid #5CFEF0",
            borderRadius: "48px",
          }
        : {
            width: 485,
            height: 575,
            border: "12px solid transparent",
            borderRadius: "48px",
          };
    } else if (windowWidth >= 3840) {
      return index === currentIndex
        ? {
            width: 515,
            height: 615,
            border: "12px solid #5CFEF0",
            borderRadius: "48px",
          }
        : {
            width: 455,
            height: 545,
            border: "12px solid transparent",
            borderRadius: "48px",
          };
    } else if (windowWidth >= 2880) {
      return index === currentIndex
        ? {
            width: 395,
            height: 510,
            border: "7px solid #5CFEF0",
            borderRadius: "38px",
          }
        : {
            width: 360,
            height: 450,
            border: "7px solid transparent",
            borderRadius: "38px",
          };
    } else if (windowWidth >= 1920) {
      return index === currentIndex
        ? {
            width: 260,
            height: 340,
            border: "4px solid #5CFEF0",
            borderRadius: "20px",
          }
        : {
            width: 230,
            height: 300,
            border: "4px solid transparent",
            borderRadius: "20px",
          };
    } else if (windowWidth >= 1440) {
      return index === currentIndex
        ? {
            width: 190,
            height: 255,
            border: "4px solid #5CFEF0",
            borderRadius: "20px",
          }
        : {
            width: 165,
            height: 220,
            border: "4px solid transparent",
            borderRadius: "20px",
          };
    } else {
      return index === currentIndex
        ? {
            width: 170,
            height: 225,
            border: "4px solid #5CFEF0",
            borderRadius: "20px",
          }
        : {
            width: 135,
            height: 185,
            border: "4px solid transparent",
            borderRadius: "20px",
          };
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section
      className="relative w-full !mx-auto hidden xl:flex items-end md:items-center overflow-hidden transition-slow xl:h-[770px] 2xl:h-[850px] 3xl:h-[950px] 4xl:h-[1080px] 5xl:h-[1440px] 6xl:h-[2160px]"
      style={{ maxHeight: "100vh" }}
    >
      {/* Bg Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          key={currentIndex}
          src={featuredAnime[currentIndex].image}
          alt="Background"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-[50%] 5xl:h-[70%] 6xl:h-[80%] bg-gradient-to-b from-main/0 to-main z-10"></div>
      <div className="absolute left-0 w-[50%] h-full bg-gradient-to-l from-main/0 to-main z-10"></div>

      {/* Content Layer */}
      <div className="relative w-full max-w-[4096px] !mx-auto h-full flex items-end z-20 !mb-[10rem] px-10 6xl:px-28">
        {/* Details */}
        <div className="w-1/2 flex flex-col gap-4 2xl:gap-5 5xl:gap-7 text-start !mb-[5rem] 4xl:!mb-[6rem] 5xl:!mb-[13rem] 6xl:!mb-[21rem]">
          <p className="font-bold text-xl 2xl:text-2xl 4xl:text-3xl text-neonAqua transition-slow">
            #1 Most Popular
          </p>
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
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow" />
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow" />
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow" />
            <FaStar className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow" />
            <FaRegStarHalfStroke className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow" />
            <p className="text-xl 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl transition-slow font-bold">
              8.23
            </p>
          </div>

          <div className="flex gap-4 !mt-5 2xl:!mt-8 4xl:!mt-10">
            <button className="w-40 h-13 2xl:w-44 2xl:h-15 4xl:w-51 4xl:h-17 5xl:w-56 5xl:h-20 transition-slow bg-neonAqua flex justify-center items-center rounded-[1rem] text-main gap-2 cursor-pointer">
              <FaPlay className="2xl:text-lg 4xl:text-xl 5xl:text-[22px] transition-slow" />
              <p className="font-bold 2xl:text-lg 4xl:text-xl 5xl:text-[22px] transition-slow">
                Watch Now
              </p>
            </button>

            <button className="w-40 h-13 2xl:w-44 2xl:h-15 4xl:w-51 4xl:h-17 5xl:w-56 5xl:h-20 transition-slow bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-[1rem] cursor-pointer">
              <p className="font-bold 2xl:text-lg 4xl:text-xl 5xl:text-[22px] transition-slow">
                Trailer
              </p>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="absolute right-10">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={500}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper w-[510px] 2xl:w-[600px] 4xl:w-[800px] 5xl:w-[1265px] 6xl:w-[1700px] 7xl:w-[1800px] !mb-[5rem] 4xl:!mb-[6rem] 5xl:!mb-[13rem] 6xl:!mb-[21rem] 4xl:!px-1 5xl:!px-5 transition-slow"
          >
            <div className="flex w-full justify-between">
              {featuredAnime?.map((item, index) => {
                const { width, height, border, borderRadius } = getSize(
                  index,
                  currentIndex
                );

                return (
                  <SwiperSlide key={index} className="flex justify-center">
                    <motion.div
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      initial={{ width, height, border, borderRadius }}
                      animate={{ width, height, border, borderRadius }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                        duration: 0.25,
                      }}
                      className="overflow-hidden cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                      />
                      {index !== currentIndex && (
                        <div className="absolute inset-0 bg-black/20 transition-all duration-500 5xl:rounded-[38px] 6xl:rounded-[48px]"></div>
                      )}
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>

        {/* Pagination Controls */}
        <div className="z-40 absolute 5xl:bottom-16 6xl:bottom-32 right-10 5xl:right-20 6xl:right-28 w-1/2 flex justify-end items-center 4xl:gap-6 5xl:gap-12 6xl:gap-20">
          <div className="flex gap-4 5xl:gap-5 6xl:gap-8">
            <motion.button
              onClick={handlePrev}
              className="w-fit h-fit border rounded-full p-3 4xl:p-[14px] 5xl:p-[18px] 6xl:p-6 hover:bg-secondaryBase/20 bg-white/10 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronLeft className="text-[22px] 4xl:text-[26px] 5xl:text-[40px] 6xl:text-[52px]" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="w-fit h-fit border rounded-full p-3 4xl:p-[14px] 5xl:p-[18px] 6xl:p-6 hover:bg-secondaryBase/20 bg-white/10 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronRight className="text-[22px] 4xl:text-[26px] 5xl:text-[40px] 6xl:text-[52px]" />
            </motion.button>
          </div>

          <div className="h-[2px] 5xl:h-[3px] 6xl:h-2 w-full bg-white/70"></div>

          <p
            key={currentIndex}
            className="w-16 5xl:w-20 6xl:w-36 text-5xl 4xl:text-[52px] 5xl:text-[84px] 6xl:text-[120px] font-black text-neonAqua"
          >
            {String(currentIndex + 1).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
