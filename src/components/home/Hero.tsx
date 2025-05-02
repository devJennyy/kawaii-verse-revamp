/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import { FaPause, FaPlay, FaStar } from "react-icons/fa6";
import { GET_TOP_ANIME } from "@/constants/api";
import CustomNavButtons from "../ui/CustomNavButtons";
import "../../styles/swiper.css";
import Button from "../shared/Button";

const Hero = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const [topAnime, setTopAnime] = useState<any[]>([]);

  const fetchTopAnime = () => {
    axios
      .get(GET_TOP_ANIME)
      .then((res) => {
        setTopAnime(res.data.data);
      })
      .catch((err) => {
        console.log("Oops! something went wrong", err);
      });
  };

  useEffect(() => {
    fetchTopAnime();
  }, []);

  return (
    <>
      {/* Web */}
      <div className="relative w-full xl:flex justify-center items-center 4xl:px-20 px-12 5xl:h-[2020px] 4xxl:h-[1590px] 4xl:h-[1500px] 3xl:h-[1080px] 2xl:h-[808px] h-[752px] hidden transition-slow z-0">
        {/* Bg Image */}
        <div className="absolute inset-0 w-full h-full z-0 border-b-20 border-black">
          {topAnime[currentIndex] && (
            <img
              key={currentIndex}
              src={
                topAnime[currentIndex].trailer.images.maximum_image_url ||
                topAnime[currentIndex].images.jpg.large_image_url
              }
              alt={topAnime[currentIndex].title}
              className="w-full h-full object-cover blur-[4px]"
            />
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute left-0 h-full w-[40%] bg-gradient-to-r from-main to-main/0 z-10 transition-slow"></div>
        <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-b from-main/0 to-main z-10 transition-slow"></div>
        <div className="absolute left-0 w-[60%] h-full bg-gradient-to-r from-main to-main/0 z-10 transition-slow"></div>

        {/* Content */}
        <div className="absolute w-full max-w-full !mx-auto 5xl:w-[3840px] h-full flex z-20 5xl:pb-30 4xl:pb-40 3xl:pb-44 pb-20">
          {/* Details */}
          <div className="w-full h-full flex flex-col justify-end items-start 5xl:gap-14 4xl:gap-12 gap-12 transition-slow">
            <div className="flex flex-col justify-end items-start text-start 4xl:pl-20 pl-12 5xl:gap-8 4xl:gap-7 3xl:gap-6 2xl:gap-4 gap-2">
              {topAnime[currentIndex] && (
                <p className="font-semibold tracking-wider 5xl:text-[54px] 4xxl:text-[44px] 4xl:text-[38px] 3xl:text-[28px] 2xl:text-lg text-neonAqua uppercase">
                  #{topAnime[currentIndex].rank} Ranking
                </p>
              )}

              {topAnime[currentIndex] && (
                <p
                  key={topAnime[currentIndex].title}
                  className={`uppercase tracking-wide 5xl:!mt-[-2rem] 4xl:!mt-[-1rem] 3xl:!mt-[-20px] 2xl:!mt-[-16px] !mt-[-5px] 5xl:w-[1300px] 4xxl:w-[1000px] 4xl:w-[850px] 3xl:w-[640px] 2xl:w-[459px] w-[401px] 
              ${
                topAnime[currentIndex].title.length > 20
                  ? "text-[40px] 2xl:text-[42px] 3xl:text-[70px] 4xl:text-[90px] 4xxl:text-[110px] 5xl:text-[140px] 5xl:leading-[11.5rem] 4xl:leading-[7.5rem] 4xxl:leading-[9.5rem] 3xl:leading-[6rem] leading-[3.4rem]"
                  : "text-[90px] 2xl:text-[80px] 3xl:text-[135px] 4xl:text-[185px] 4xxl:text-[210px] 5xl:text-[260px] 5xl:leading-[17rem] 4xl:leading-[12.5rem] 3xl:leading-[9rem] leading-[6rem]"
              }`}
                >
                  {topAnime[currentIndex].title}
                </p>
              )}

              {topAnime[currentIndex] && (
                <p className="line-clamp-2 5xl:text-[44px] 4xxl:text-[32px] 4xl:text-[28px] 3xl:text-[24px] 2xl:text-lg text-sm 5xl:w-[1028px] 4xxl:w-[936px] 4xl:w-[736px] 3xl:w-[552px] 2xl:w-[429px] w-[371px] 5xl:leading-20 4xl:leading-13 3xl:leading-9 2xl:leading-7 leading-6">
                  {topAnime[currentIndex].synopsis}
                </p>
              )}
              <div className="flex 4xl:gap-8 3xl:gap-4 gap-3 5xl:h-[130px] 4xl:h-[90px] 3xl:h-[64px] h-[44px] 5xl:!mt-12 4xl:!mt-8 !mt-6">
                <button
                  onClick={() => setIsTrailerPlaying(!isTrailerPlaying)}
                  className="5xl:w-[130px] 4xl:w-[90px] 3xl:w-[64px] w-[44px] h-full rounded-full bg-neonAqua border border-neonAqua text-main flex justify-center items-center cursor-pointer hover:bg-transparent hover:text-neonAqua transition-default"
                >
                  {isTrailerPlaying ? (
                    <FaPause className="5xl:text-[44px] 4xl:text-[32px] 3xl:text-[24px] 2xl:text-lg" />
                  ) : (
                    <FaPlay className="5xl:text-[44px] 4xl:text-[32px] 3xl:text-[24px] 2xl:text-lg" />
                  )}
                </button>
                <button className="5xl:px-36 4xl:px-24 3xl:px-18 px-12 w-fit h-full flex justify-center items-center 4xl:border-2 3xl:border-2 border border-neonAqua text-neonAqua rounded-full cursor-pointer hover:bg-neonAqua hover:text-main transition-default">
                  <p className="uppercase 5xl:text-[38px] 4xl:text-[28px] 3xl:text-lg text-sm font-normal">
                    View Details
                  </p>
                </button>
              </div>
            </div>
            <div className="5xl:h-[202px] 4xl:h-[130px] 3xl:h-[99px] 2xl:h-[75px] h-[68px] transition-slow"></div>
          </div>

          {/* Slider */}
          <div className="relative 5xl:w-15/12 4xxl:w-12/12 4xl:w-15/12 w-16/12 flex flex-col justify-end overflow-hidden 5xl:gap-24 4xl:gap-20 3xl:gap-16 2xl:gap-8 gap-8 transition-slow">
            {/* Thumbnails */}
            <div className="5xl:h-[800px] 4xl:h-[579px] 3xl:h-[408px] 2xl:h-[300px] h-[290px] flex 5xl:gap-16 4xl:gap-11 3xl:gap-8 2xl:gap-6 gap-5 overflow-hidden transition-slow">
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
                  1280: {
                    spaceBetween: 20,
                  },
                  1920: {
                    spaceBetween: 35,
                  },
                  2560: {
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                {topAnime?.map((image: any, index) => {
                  const isActive = index === currentIndex;
                  const heightClass = isActive
                    ? "h-full"
                    : "5xl:h-[720px] 4xl:h-[530px] 3xl:h-[370px] 2xl:h-[270px] h-[260px]";

                  return (
                    <SwiperSlide className="z-50" key={index}>
                      <motion.div
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        className={`relative transition-all duration-500 ease-in-out transform cursor-pointer  
      ${heightClass} 5xl:w-[557px] 4xl:w-[400px] 3xl:w-[286px] 2xl:w-[214px] w-[190px] 4xl:rounded-[3rem] rounded-3xl overflow-hidden 4xl:border-8 3xl:border-6 border-4 ${
                          isActive ? "border-neonAqua" : "border-white/2"
                        }`}
                      >
                        <img
                          src={image.images.jpg.large_image_url}
                          alt={image.title}
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
            <div className="w-full flex justify-start items-end 5xl:h-[150px] 4xl:h-[100px] 3xl:h-[80px] 2xl:h-[65px] h-[58px] 5xl:gap-16 4xl:gap-13 3xl:gap-8 2xl:gap-7 gap-6 5xl:pr-30 pr-10 transition-slow">
              {/* <div className="flex 5xl:gap-9 4xl:gap-6 3xl:gap-4 gap-3 h-full transition-slow">
            <button
              onClick={handlePrev}
              className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[80px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow"
            >
              <FiChevronLeft className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
            </button>
            <button
              onClick={handleNext}
              className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[80px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow"
            >
              <FiChevronRight className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
            </button>
          </div> */}
              <CustomNavButtons swiperRef={swiperRef} />
              <div className="h-full 5xl:w-[1437px] 4xl:w-[953px] 3xl:w-[723px] 2xl:w-[537px] w-[480px] flex justify-center items-center transition-slow">
                <div className="5xl:h-1 4xl:h-[3px] 3xl:h-[2px] h-[1px] w-full bg-white transition-slow"></div>
              </div>
              <p
                key={currentIndex}
                className="h-full 5xl:text-[124px] 4xl:text-[86px] 3xl:text-[64px] 2xl:text-[48px] text-[44px] font-bold flex items-center transition-slow text-neonAqua"
              >
                {String(currentIndex + 1).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative sm:hidden w-full h-screen !pt-10 flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          {topAnime.map((anime, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-[370px] object-cover object-top"
              />
              <div className="absolute inset-0 h-[371px] bg-gradient-to-t from-main to-main/40" />
            </div>
          ))}
        </div>

        <div className="relative z-20 flex flex-col justify-center items-center gap-5 w-full !mt-10">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            className="mySwiperMobile"
          >
            {topAnime?.map((img, index) => (
              <SwiperSlide key={index} className="!w-[230px] !h-[300px]">
                <div
                  className={`w-[230px] h-[300px] border-gradient bg-main/50 rounded-3xl z-40 border-neonAqua overflow-hidden p-4 flex justify-center items-center transition-transform duration-500 ease-in-out ${
                    index === currentIndex
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-85"
                  }`}
                >
                  <img
                    src={img.images.jpg.large_image_url}
                    alt={img.title}
                    className="rounded-3xl w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full h-[185px] relative flex flex-col justify-end items-center">
            {topAnime?.map((anime, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center gap-4 transition-opacity duration-500 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-auto"
                }`}
              >
                <p className="text-lg font-bold">{anime.title}</p>

                <div className="flex gap-2 flex-wrap justify-center">
                  {anime.genres?.map((genre: any, index: number) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-full bg-[#262930]"
                    >
                      <p className="text-[12px]">{genre.name}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-1 text-neonAqua">
                  <FaStar />
                  <p className="font-semibold">{anime.score}</p>
                </div>
              </div>
            ))}
            <Button
              hasIcon={false}
              label="Watch Now"
              colorType="tertiary"
              customClass="w-fit px-18 h-12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
