import { seasonalAnime } from "@/constants/api";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { Link } from "react-router";

const SeasonalShowcase = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="w-full lg:flex justify-center items-center relative hidden">
      <div className="absolute w-full 4xl:h-[990px] 3xxl:h-[780px] 2xl:h-[590px] xl:h-[510px] h-[420px] bg-[#181A20] transition-slow"></div>
      <div className="w-fit px-40 flex justify-center items-center relative scale-42 xl:scale-52 2xl:scale-60 3xxl:scale-80 4xl:scale-100 transition-slow">
        <div className="w-[1940px] 4xl:h-[1200px] 3xxl:h-[990px] 2xl:h-[720px] xl:h-[630px] h-[520px] relative flex items-center cursor-grab transition-slow">
          <Swiper
            spaceBetween={50}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {seasonalAnime?.map((anime, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link
                    to={`/anime-overview?id=${anime.mal_id}`}
                    className="w-[1940px] h-[1200px] relative flex justify-center items-center overflow-visible"
                  >
                    <div
                      className={
                        anime.id === "mitsuri"
                          ? "absolute z-50 left-[12rem] h-[80rem] top-[-4rem] -rotate-6"
                          : anime.id === "mash-burnedead"
                          ? "absolute z-50 left-[25rem] h-[63rem] top-[4rem] rotate-2"
                          : anime.id === "anya"
                          ? "absolute z-50 left-[32.5rem] h-[60rem] top-[5rem]"
                          : anime.id === "power"
                          ? "absolute z-50 left-[29rem] h-[65rem] top-[4rem]"
                          : anime.id === "luffy"
                          ? "absolute z-50 left-[24rem] h-[70rem] top-0"
                          : anime.id === "levi"
                          ? "absolute z-50 left-[16rem] h-[55rem] top-[5rem] rotate-12"
                          : anime.id === "yuji"
                          ? "absolute z-50 left-[28rem] h-[65rem] top-[2rem]"
                          : "opacity-0"
                      }
                    >
                      <img
                        src={anime.soloCharacter}
                        alt={anime.id}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="w-full h-[700px] relative">
                      <div className="absolute w-[850px] left-0 top-0 flex justify-center items-center">
                        <div
                          className="w-[830px] h-[570px] bg-white/90"
                          style={{
                            clipPath:
                              "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div
                          className="absolute w-[810px] h-[555px]"
                          style={{
                            clipPath:
                              "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                            backgroundImage: `url(${anime.miniBackgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "top",
                          }}
                        />
                        <div
                          className="absolute w-[830px] h-[570px] bg-white/60"
                          style={{
                            clipPath:
                              "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                          }}
                        />
                      </div>

                      <div className="absolute w-[1350px] right-0 bottom-0 flex justify-center items-center">
                        <div
                          className="w-[1345px] h-[565px] bg-white"
                          style={{
                            clipPath:
                              "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div
                          className="w-[1325px] h-[550px] absolute"
                          style={{
                            clipPath:
                              "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                            backgroundImage: `url(${anime.backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div
                          className="absolute w-[1320px] h-[550px] bg-main/10"
                          style={{
                            clipPath:
                              "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-full h-[950px] absolute">
                      <div className="absolute right-0 top-10 text-right flex flex-col gap-5">
                        <motion.p
                          className="text-[5.5rem] uppercase text-neonAqua font-bold leading-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                          }}
                        >
                          {`0${activeIndex + 1}`}
                        </motion.p>

                        <p className="text-3xl uppercase tracking-wide flex gap-2 font-medium">
                          <span className="bg-neonAqua px-2 text-main">
                            Seasonal
                          </span>
                          Watchlist
                        </p>
                      </div>

                      <div className="absolute left-0 bottom-12 text-left flex gap-5">
                        {activeIndex === index && (
                          <>
                            <motion.div
                              key={`line-${loopKey}`}
                              initial={{ height: 0 }}
                              animate={{ height: "7rem" }}
                              transition={{
                                duration: 0.7,
                                ease: "easeOut",
                              }}
                              className="w-2 bg-neonAqua"
                            />
                            <motion.div
                              key={`text-${loopKey}`}
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0.7,
                              }}
                              className="flex flex-col gap-3"
                            >
                              <p className="text-6xl uppercase">
                                {anime.englishTitle}
                              </p>
                              <p className="text-4xl uppercase tracking-wide opacity-50">
                                {anime.japaneseTitle}
                              </p>
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="absolute w-full flex justify-between ">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-7 flex justify-center items-center rounded-full border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-default z-30"
          >
            <FiChevronLeft className="3xl:text-3xl text-4xl" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-7 flex justify-center items-center rounded-full border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-default z-30"
          >
            <FiChevronRight className="3xl:text-3xl text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonalShowcase;
