/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getPopularMoviesUrl,
  LONG_WEEKEND_WATCHLIST,
  NEWEST_SEASON,
  TOP_ANIME,
} from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router";

interface AnimeShowcaseProps {
  type: "newest-season" | "top-anime" | "seasonal" | "movies";
  delay?: number;
}

const AnimeShowcase = ({ type, delay = 0 }: AnimeShowcaseProps) => {
  const animeTypes = {
    "newest-season": { title: "Newest Season" },
    "top-anime": { title: "Popular Anime" },
    seasonal: { title: "Favorite Season" },
    movies: { title: "Top Movies", href: "/movies" },
  };

  const [animeList, setAnimeList] = useState<any[]>([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchAnime = async () => {
        try {
          const url =
            type === "movies"
              ? getPopularMoviesUrl(screenWidth)
              : type === "newest-season"
              ? NEWEST_SEASON.replace("{page}", "1")
              : type === "top-anime"
              ? TOP_ANIME.replace("{page}", "1")
              : LONG_WEEKEND_WATCHLIST;

          const res = await axios.get(url);
          setAnimeList(res.data.data);
        } catch (err) {
          console.error("Oops! something went wrong", err);
        }
      };

      fetchAnime();
    }, delay);
  }, [type, screenWidth]);

  return (
    <div className="lg:flex flex-col items-start 4xl:gap-12 3xl:gap-10 xl:gap-7 gap-5 z-30 4xl:pl-20 lg:pl-12 sm:pl-5 pl-4 4xl:pb-24 3xl:pb-18 xl:pb-14 pb-10">
      <p className="4xl:text-4xl 3xl:text-3xl xl:text-2xl sm:text-xl text-lg font-bold z-20 tracking-wide lg:!mb-0 !mb-4">
        {animeTypes[type].title}
      </p>

      {["newest-season", "top-anime"].includes(type) ? (
        <div className="w-full overflow-x-auto flex">
          <Swiper
            slidesPerView={"auto"}
            breakpoints={{
              360: {
                spaceBetween: 15,
              },
              1280: {
                spaceBetween: 20,
              },
              2560: {
                spaceBetween: 20,
              },
            }}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper cursor-grab overflow-visible"
          >
            {animeList?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/anime-overview?id=${item.mal_id}`}
                  className="flex-none 4xxl:w-[388px] 4xl:w-[317px] 3xl:w-[268px] 2xl:w-[238px] xl:w-[206px] sm:w-[180px] w-[155px]"
                >
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative w-full 4xxl:h-[582px] 4xl:h-[475px] 3xl:h-[402px] 2xl:h-[357px] xl:h-[309px] sm:h-[262px] h-[232px] overflow-hidden 4xl:rounded-md rounded-sm group"
                  >
                    <motion.img
                      src={item.images?.jpg?.large_image_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      variants={{
                        rest: { filter: "blur(0px)", scale: 1 },
                        hover: {
                          filter: "blur(4px)",
                          transition: { duration: 0.2, ease: "easeInOut" },
                        },
                      }}
                    />

                    <motion.div
                      className="hidden absolute top-0 left-0 w-full h-full bg-black/85 z-10 sm:flex flex-col justify-between gap-5 tracking-wide text-white backdrop-blur-sm text-start 2xl:p-6 xl:p-5 p-3"
                      variants={{
                        rest: { opacity: 0, y: 50 },
                        hover: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: 0.05,
                          },
                        },
                      }}
                    >
                      <div className="flex flex-col 3xl:gap-5 gap-3">
                        <p className="4xl:text-2xl 3xl:text-xl xl:text-[16px] text-sm font-semibold">
                          {item.title_english || item.title}
                        </p>
                        <p className="4xxl:line-clamp-15 4xl:line-clamp-11 2xl:line-clamp-8 line-clamp-7 3xl:text-[16px] xl:text-sm text-[10px]">
                          {item.synopsis}
                        </p>
                      </div>

                      <Button
                        label="View Details"
                        hasIcon={false}
                        colorType={"secondary"}
                        isStatic={true}
                        customClass="4xl:h-14 3xl:h-11 xl:h-9 h-7 4xl:text-[17px] 3xl:text-sm xl:text-[12px] text-[10px]"
                      />
                    </motion.div>
                  </motion.div>

                  <p className="xl:hidden !mt-2 text-sm 3xl:text-base text-left truncate pl-[2px]">
                    {item.title_english || item.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <>
          <div className="w-full lg:grid 4xl:grid-cols-7 2xl:grid-cols-6 lg:grid-cols-5 grid-cols-1 3xl:gap-12 xl:gap-8 gap-5 hidden">
            {animeList?.map((item, index) => (
              <Link key={index} to={`/anime-overview?id=${item.mal_id}`}>
                <motion.div
                  key={index}
                  className="relative 4xxl:w-[373px] 4xl:h-[223px] 4xl:w-[316px] 3xxl:w-[275px] 3xxl:h-[203px] xl:w-[205px] xl:h-[140px] w-[170px] h-[120px] group cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.28 },
                  }}
                >
                  <motion.div
                    className="absolute bottom-0 right-0 4xxl:w-[358px] 4xl:h-[208px] 4xl:w-[300px] 3xxl:w-[260px] 3xxl:h-[188px] xl:w-[195px] xl:h-[130px] w-[160px] h-[110px] bg-secondaryBase/10 z-0 rounded-[2px] transition-slow group-hover:bg-neonAqua group-active:bg-neonAqua group-focus:bg-neonAqua"
                    whileHover={{
                      transition: { duration: 0.28 },
                    }}
                  />
                  <div className="absolute top-0 left-0 4xxl:w-[358px] 4xl:h-[208px] 4xl:w-[300px] 3xxl:w-[260px] 3xxl:h-[188px] xl:w-[195px] xl:h-[130px] w-[160px] h-[110px] z-[5] rounded-[2px] overflow-hidden">
                    <motion.img
                      src={
                        item?.trailer?.images?.maximum_image_url ||
                        item?.images?.jpg?.large_image_url
                      }
                      alt={item.title}
                      className="w-full h-full object-cover object-[50%_20%]"
                      variants={{
                        rest: { filter: "blur(0px)", scale: 1 },
                        hover: {
                          filter: "blur(4px)",
                          scale: 1.05,
                          transition: { duration: 0.28, ease: "easeInOut" },
                        },
                      }}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    />

                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-black/85 z-10 flex items-center justify-center text-base 4xl:text-2xl 3xl:text-xl 2xl:text-[16px] text-sm font-semibold text-center px-4"
                      variants={{
                        rest: { opacity: 0, y: 40 },
                        hover: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.32,
                            ease: "easeInOut",
                            delay: 0.05,
                          },
                        },
                      }}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      {item.title}
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="w-full overflow-x-auto flex lg:hidden">
            <Swiper
              slidesPerView={"auto"}
              breakpoints={{
                360: {
                  spaceBetween: 15,
                },
                1280: {
                  spaceBetween: 20,
                },
                2560: {
                  spaceBetween: 20,
                },
              }}
              navigation={false}
              modules={[Navigation]}
              className="mySwiper cursor-grab overflow-visible"
            >
              {animeList?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={`/anime-overview?id=${item.mal_id}`}
                    className="4xxl:w-[388px] 4xxl:h-[582px] 4xl:w-[317px] 4xl:h-[475px] 3xl:w-[268px] 3xl:h-[402px] 2xl:w-[238px] 2xl:h-[357px] xl:w-[206px] xl:h-[309px] sm:w-[180px] sm:h-[262px] w-[155px] h-[232px] flex-none"
                  >
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="relative w-full h-full overflow-hidden 4xl:rounded-md rounded-sm group"
                    >
                      <motion.img
                        src={item.images?.jpg?.large_image_url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        variants={{
                          rest: { filter: "blur(0px)", scale: 1 },
                          hover: {
                            filter: "blur(4px)",
                            transition: { duration: 0.2, ease: "easeInOut" },
                          },
                        }}
                      />
                      <motion.div
                        className="hidden absolute top-0 left-0 w-full h-full bg-black/85 z-10 sm:flex flex-col justify-between gap-5 tracking-wide text-white backdrop-blur-sm text-start 2xl:p-6 xl:p-5 p-3"
                        variants={{
                          rest: { opacity: 0, y: 50 },
                          hover: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.4,
                              ease: "easeInOut",
                              delay: 0.05,
                            },
                          },
                        }}
                      >
                        <div className="flex flex-col 3xl:gap-5 gap-3">
                          <p className="4xl:text-2xl 3xl:text-xl xl:text-[16px] text-sm font-semibold">
                            {item.title_english || item.title}
                          </p>
                          <p className="4xxl:line-clamp-15 4xl:line-clamp-11 2xl:line-clamp-8 line-clamp-7 3xl:text-[16px] xl:text-sm text-[10px]">
                            {item.synopsis}
                          </p>
                        </div>

                        <Button
                          label="View Details"
                          hasIcon={false}
                          colorType={"secondary"}
                          isStatic={true}
                          customClass="4xl:h-14 3xl:h-11 xl:h-9 h-7 4xl:text-[17px] 3xl:text-sm xl:text-[12px] text-[10px]"
                        />
                      </motion.div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default AnimeShowcase;
