import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import { FaPause, FaPlay, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const Hero = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);

  const handleNext = () => {
    console.log("....");
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const featuredAnime = [
    { title: "Tokyo Ghoul", image: "/images/sample.jpg" },
    { title: "Jujutsu No Kaisen", image: "/images/sample1.jpg" },
    { title: "One Piece", image: "/images/sample2.jpeg" },
    { title: "Attack On Titan", image: "/images/sample3.jpg" },
    { title: "Kimi No Nawa", image: "/images/sample4.jpg" },
  ];

  return (
    <div className="relative w-full 5xl:h-[2020px] 4xl:h-[1500px] 3xl:h-[1080px] 2xl:[808px] h-[720px] xl:block hidden transition-slow">
      {/* Bg Image */}
      <div className="absolute inset-0 w-full h-full z-0 border-b-4 border-black">
        <img
          key={currentIndex}
          src={featuredAnime[currentIndex].image}
          alt=""
          className="w-full h-full object-cover blur-[2px]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-b from-main/0 to-main z-10 transition-slow"></div>
      <div className="absolute left-0 5xl:w-[41%] w-[40%] h-full bg-gradient-to-r from-main to-main/0 z-10 transition-slow"></div>

      {/* Content */}
      <div className="absolute w-full max-w-full !mx-auto 5xl:w-[3840px] h-full flex z-20 5xl:pb-30 4xl:pb-28 3xl:pb-24 pb-16">
        {/* Details */}
        <div className="w-full h-full flex flex-col justify-end items-start 5xl:gap-19 4xl:gap-12 3xl:gap-10 2xl:gap-8 gap-6 transition-slow">
          <div className="flex flex-col justify-end items-start text-start pl-32 gap-7">
            <p className="text-[32px] text-neonAqua">#1 Most Popular</p>
            <p
              key={featuredAnime[currentIndex].title}
              className="text-[185px] uppercase leading-[12.5rem] !mt-[-1rem] tracking-wide"
            >
              {(() => {
                const words = featuredAnime[currentIndex].title.split(" ");
                return (
                  <>
                    <span className="block">{words[0]}</span>
                    <span className="block">{words.slice(1).join(" ")}</span>
                  </>
                );
              })()}
            </p>

            <p className="text-[24px] w-[640px] leading-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <FaStar className="text-[35px] transition-slow" />
              <FaStar className="text-[35px] transition-slow" />
              <FaStar className="text-[35px] transition-slow" />
              <FaStar className="text-[35px] transition-slow" />
              <FaRegStarHalfStroke className="text-[35px] transition-slow" />
              <p className="text-[35px] transition-slow font-bold">8.23</p>
            </div>
            <div className="flex gap-8 h-[70px] !mt-8">
              <button
                onClick={() => setIsTrailerPlaying(!isTrailerPlaying)}
                className="w-[70px] h-full rounded-full bg-neonAqua border border-neonAqua text-main flex justify-center items-center cursor-pointer hover:bg-transparent hover:text-neonAqua transition-default"
              >
                {isTrailerPlaying ? (
                  <FaPause size={24} />
                ) : (
                  <FaPlay size={24} />
                )}
              </button>
              <button className="px-24 w-fit h-full flex justify-center items-center border-2 border-neonAqua text-neonAqua rounded-full cursor-pointer hover:bg-neonAqua hover:text-main transition-default">
                <p className="uppercase text-[20px] font-medium">
                  View Details
                </p>
              </button>
            </div>
          </div>
          <div className="5xl:h-[202px] 4xl:h-[130px] 3xl:h-[99px] 2xl:h-[75px] h-[68px] transition-slow"></div>
        </div>

        {/* Slider */}
        <div className="relative w-17/12 flex flex-col justify-end overflow-hidden 5xl:gap-19 4xl:gap-20 3xl:gap-10 2xl:gap-8 gap-6 transition-slow">
          {/* Thumbnails */}
          <div className="5xl:h-[571px] 4xl:h-[579px] 3xl:h-[438px] 2xl:h-[327px] h-[290px] flex 5xl:gap-16 4xl:gap-11 3xl:gap-8 2xl:gap-6 gap-5 overflow-hidden transition-slow">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={500}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  spaceBetween: 20,
                },
                768: {
                  spaceBetween: 40,
                },
                1024: {
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {featuredAnime.map((item, index) => {
                const isActive = index === currentIndex;
                const heightClass = isActive
                  ? "h-full"
                  : "5xl:h-[571px] 4xl:h-[540px] 3xl:h-[438px] 2xl:h-[327px] h-[290px]";

                return (
                  <SwiperSlide className="z-50" key={index}>
                    <motion.div
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      className={`relative transition-all duration-500 ease-in-out transform  
        ${heightClass} 5xl:w-[571px] 4xl:w-[400px] 3xl:w-[286px] 2xl:w-[214px] w-[190px] rounded-[3rem] overflow-hidden border-8 ${
                        isActive ? "border-neonAqua" : "border-transparent"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                      />
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/10 transition-all duration-500"></div>
                      )}
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Pagination Controls */}
          <div className="w-full flex justify-start items-end 5xl:h-[202px] 4xl:h-[100px] 3xl:h-[99px] 2xl:h-[75px] h-[68px] 5xl:gap-16 4xl:gap-13 3xl:gap-8 2xl:gap-7 gap-6 5xl:pr-30 pr-10 transition-slow">
            <div className="flex 5xl:gap-9 4xl:gap-6 3xl:gap-4 gap-3 h-full transition-slow">
              <button
                onClick={handlePrev}
                className="5xl:w-[202px] 4xl:w-[100px] 3xl:w-[99px] 2xl:w-[75px] w-[68px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow"
              >
                <FiChevronLeft className="5xl:text-[50px] 4xl:text-[36px] 3xl:text-[29px] text-[23px]" />
              </button>
              <button
                onClick={handleNext}
                className="5xl:w-[202px] 4xl:w-[100px] 3xl:w-[99px] 2xl:w-[75px] w-[68px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow"
              >
                <FiChevronRight className="5xl:text-[50px] 4xl:text-[36px] 3xl:text-[29px] text-[23px]" />
              </button>
            </div>
            <div className="h-full 5xl:w-[1437px] 4xl:w-[953px] 3xl:w-[723px] 2xl:w-[537px] w-[480px] flex justify-center items-center transition-slow">
              <div className="5xl:h-1 4xl:h-[3px] 3xl:h-[2px] h-[1px] w-full bg-white transition-slow"></div>
            </div>
            <p className="h-full 5xl:text-[124px] 4xl:text-[86px] 3xl:text-[64px] 2xl:text-[48px] text-[44px] font-bold flex items-center transition-slow text-neonAqua">
              02
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
