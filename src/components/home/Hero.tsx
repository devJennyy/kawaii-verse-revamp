/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import { FaStar } from "react-icons/fa6";
import { GET_TOP_ANIME } from "@/constants/api";
import CustomNavButtons from "../ui/CustomNavButtons";
import "../../styles/swiper.css";
import Button from "../shared/Button";
import { Link, useNavigate } from "react-router";

const Hero = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topAnime, setTopAnime] = useState<any[]>([]);
  const navigate = useNavigate();

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
      <div className="relative w-full lg:flex justify-center items-center 4xl:px-20 px-12 5xl:h-[2020px] 4xxl:h-[1590px] 4xl:h-[1500px] 3xl:h-[1080px] 2xl:h-[808px] h-[752px] hidden transition-slow z-0">
        <div className="absolute inset-0 w-full h-full z-0 border-b-20 border-black">
          {topAnime?.map((anime, index) => (
            <img
              key={index}
              src={
                anime.trailer?.images?.maximum_image_url ||
                anime.images.jpg.large_image_url
              }
              alt={anime.title}
              className={`absolute inset-0 w-full h-full object-cover blur-[4px] transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute left-0 h-full w-[40%] bg-gradient-to-r from-main to-main/0 z-10 transition-slow"></div>
        <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-b from-main/0 to-main z-10 transition-slow"></div>
        <div className="absolute left-0 w-[60%] h-full bg-gradient-to-r from-main to-main/0 z-10 transition-slow"></div>

        <div className="absolute w-full max-w-full !mx-auto 5xl:w-[3840px] h-full flex z-20 5xl:pb-30 4xl:pb-40 3xl:pb-44 pb-20">
          <div className="relative w-full h-full flex flex-col justify-end items-start transition-slow">
            <div className="relative flex-1">
              {topAnime?.map((anime, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col justify-end items-start text-start 4xl:pl-20 pl-12 5xl:gap-8 4xl:gap-7 3xl:gap-6 2xl:gap-4 gap-2 absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="font-semibold tracking-wider 5xl:text-[54px] 4xxl:text-[44px] 4xl:text-[38px] 3xl:text-[28px] 2xl:text-lg text-neonAqua uppercase whitespace-nowrap">
                      #{anime?.rank ?? ""} Ranking
                    </p>

                    <p
                      className={`uppercase tracking-wide 5xl:!mt-[-2rem] 4xl:!mt-[-1rem] 3xl:!mt-[-20px] 2xl:!mt-[-16px] !mt-[-5px] 5xl:w-[1300px] 4xxl:w-[1000px] 4xl:w-[850px] 3xl:w-[640px] 2xl:w-[459px] xl:w-[401px] w-[350px] ${
                        anime.title.length > 20
                          ? "text-[35px] xl:text-[40px] 2xl:text-[42px] 3xl:text-[70px] 4xl:text-[90px] 4xxl:text-[110px] 5xl:text-[140px] 5xl:leading-[11.5rem] 4xl:leading-[7.5rem] 4xxl:leading-[9.5rem] 3xl:leading-[6rem] leading-[3.4rem]"
                          : "text-[80px] xl:text-[90px] 2xl:text-[80px] 3xl:text-[135px] 4xl:text-[185px] 4xxl:text-[210px] 5xl:text-[260px] 5xl:leading-[17rem] 4xl:leading-[12.5rem] 3xl:leading-[9rem] leading-[6rem]"
                      }`}
                    >
                      {anime.title}
                    </p>

                    <p className="line-clamp-2 5xl:text-[44px] 4xxl:text-[32px] 4xl:text-[28px] 3xl:text-[24px] 2xl:text-lg text-sm 5xl:w-[1028px] 4xxl:w-[936px] 4xl:w-[736px] 3xl:w-[552px] 2xl:w-[429px] xl:w-[371px] w-[340px] 5xl:leading-20 4xl:leading-13 3xl:leading-9 2xl:leading-7 leading-6">
                      {anime.synopsis}
                    </p>

                    <Button
                      hasIcon={false}
                      label="View Details"
                      colorType="tertiary"
                      customClass="z-50 uppercase 5xl:text-[38px] 4xl:text-[28px] 3xl:text-lg text-sm font-normal 5xl:px-36 4xl:px-24 3xl:px-18 px-12 w-fit flex justify-center items-center 4xl:border-2 3xl:border-2 border border-neonAqua text-neonAqua rounded-full cursor-pointer hover:bg-neonAqua/10 transition-default 5xl:h-[130px] 4xl:h-[90px] 3xl:h-[64px] h-[44px] 5xl:!mt-12 4xl:!mt-8 !mt-6"
                      onClick={() => {
                        if (topAnime && topAnime[currentIndex]) {
                          navigate(
                            `/anime-overview?id=${topAnime[currentIndex].mal_id}`
                          );
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full 5xl:h-[245px] 4xl:h-[180px] 3xl:h-[145px] 2xl:h-[95px] h-[90px] transition-slow"></div>
          </div>

          <div className="relative 5xl:w-15/12 4xxl:w-12/12 4xl:w-15/12 w-16/12 flex flex-col justify-end overflow-hidden 5xl:gap-24 4xl:gap-20 3xl:gap-16 2xl:gap-8 gap-8 transition-slow">
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
                  1024: {
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
                {topAnime?.map((item: any, index) => {
                  const isActive = index === currentIndex;
                  const heightClass = isActive
                    ? "h-full"
                    : "5xl:h-[720px] 4xl:h-[530px] 3xl:h-[370px] 2xl:h-[270px] h-[260px]";

                  return (
                    <SwiperSlide className="z-50" key={index}>
                      <motion.div
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        className={`relative transition-all duration-500 ease-in-out transform cursor-pointer ${heightClass} 5xl:w-[557px] 4xl:w-[400px] 3xl:w-[286px] 2xl:w-[214px] w-[190px] 4xl:rounded-[3rem] rounded-3xl overflow-hidden 4xl:border-8 3xl:border-6 border-4 ${
                          isActive ? "border-neonAqua/80" : "border-white/2"
                        }`}
                      >
                        <Link
                          to={`/anime-overview?id=${item.mal_id}`}
                          className="absolute inset-0 z-10"
                        />
                        <img
                          src={item.images.jpg.large_image_url}
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

            <div className="w-full flex justify-start items-end 5xl:h-[150px] 4xl:h-[100px] 3xl:h-[80px] 2xl:h-[65px] h-[58px] 5xl:gap-16 4xl:gap-13 3xl:gap-8 2xl:gap-7 gap-6 5xl:pr-30 pr-10 transition-slow">
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

      <div className="relative lg:hidden w-full md:h-[850px] sm:h-[800px] h-screen !pt-10 flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          {topAnime?.map((anime, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full sm:h-[440px] h-[370px] object-cover object-top transition-slow"
              />
              <div className="absolute inset-0 sm:h-[441px] h-[371px] bg-gradient-to-t from-main to-main/40 transition-slow" />
            </div>
          ))}
        </div>

        <div className="relative z-20 flex flex-col justify-center items-center sm:gap-8 gap-5 w-full md:!mt-28 sm:!mt-16 transition-slow">
          {topAnime && topAnime.length > 0 && (
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={500}
              onInit={(swiper) => {
                const initialIndex =
                  swiper?.realIndex ?? swiper?.activeIndex ?? 0;
                setCurrentIndex(initialIndex);
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex ?? swiper.activeIndex ?? 0);
              }}
              className="mySwiperMobile"
              modules={[Autoplay]}
            >
              {topAnime.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={`/anime-overview?id=${item.mal_id}`}
                    className={`md:w-[300px] sm:w-[280px] sm:h-[380px] w-[230px] h-[300px] border-gradient bg-main/50 rounded-3xl z-40 border-neonAqua overflow-hidden p-4 flex justify-center items-center transition-transform duration-500 ease-in-out ${
                      index === currentIndex
                        ? "scale-100 opacity-100"
                        : "scale-85 opacity-85"
                    }`}
                  >
                    <img
                      src={item.images.jpg.large_image_url}
                      alt={item.title}
                      className="rounded-3xl w-full h-full object-cover"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="w-full sm:h-[190px] h-[180px] relative flex flex-col justify-end items-center transition-slow">
            {topAnime?.map((anime, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center gap-4 transition-opacity duration-500 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-auto"
                }`}
              >
                <p className="sm:text-2xl text-lg font-bold">{anime.title}</p>

                <div className="flex gap-2 flex-wrap justify-center">
                  {anime?.genres?.map((genre: any, index: number) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-full bg-[#262930]"
                    >
                      <p className="sm:text-sm text-[12px]">{genre.name}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-1 text-neonAqua sm:text-lg text-default">
                  <FaStar />
                  <p className="font-semibold">{anime.score}</p>
                </div>

                <Button
                  hasIcon={false}
                  label="View Details"
                  colorType="tertiary"
                  customClass="w-fit px-18 h-13 text-neonAqua"
                  onClick={() => {
                    if (topAnime && topAnime[currentIndex]) {
                      navigate(
                        `/anime-overview?id=${topAnime[currentIndex].mal_id}`
                      );
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
