/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import SwiperNavButtons from "@/components/ui/SwiperNavButtons";
import {
  LONG_WEEKEND_WATCHLIST,
  NEWEST_SEASON,
  POPULAR_MOVIES,
  TOP_ANIME,
} from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Button from "./Button";

interface AnimeShowcaseProps {
  type: "newest-season" | "top-anime" | "seasonal" | "movies";
  delay?: number;
}

const AnimeShowcase = ({ type, delay = 0 }: AnimeShowcaseProps) => {
  const animeTypes = {
    "newest-season": { title: "Newest Season", api: NEWEST_SEASON },
    "top-anime": { title: "Top Anime", api: TOP_ANIME },
    seasonal: { title: "Seasonal Anime", api: LONG_WEEKEND_WATCHLIST },
    movies: { title: "Popular Movies", api: POPULAR_MOVIES },
  };

  const [animeList, setAnimeList] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get(animeTypes[type].api);
        setAnimeList(res.data.data);
      } catch (err) {
        console.error("Oops! something went wrong", err);
      }
    };
    setTimeout(() => {
      fetchAnime();
    }, delay);
  }, [type]);

  return (
    <div className="lg:flex flex-col items-start gap-12 z-30 4xl:px-20 px-12 pb-24 hidden">
      <p className="text-4xl font-bold z-20 tracking-wide">
        {animeTypes[type].title}
      </p>

      {["newest-season", "top-anime"].includes(type) ? (
        <div className="w-full overflow-x-auto flex">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper cursor-grab"
          >
            {animeList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-[388px] h-[590px] flex-none px-1">
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative w-full h-full overflow-hidden rounded-md group"
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
                      className="absolute top-0 left-0 w-full h-full bg-black/85 z-10 flex flex-col justify-between gap-5 tracking-wide text-white backdrop-blur-sm text-start p-6"
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
                      <div className="flex flex-col gap-5">
                      <p className="text-2xl font-semibold">{item.title_english || item.title}</p>
                      <p className="line-clamp-15">{item.synopsis}</p>
                      </div>
                    <Button label="View Details" hasIcon={false} colorType={"secondary"} customClass="h-14 text-[17px]"/>
                    </motion.div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </div>
      ) : (
        <div className="w-full grid grid-cols-7 gap-12">
          {animeList?.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-[373px] h-[223px] group cursor-pointer"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.28 },
              }}
            >
              <motion.div
                className="absolute bottom-0 right-0 w-[358px] h-[208px] bg-secondaryBase/10 z-0 rounded-[2px] transition-slow group-hover:bg-neonAqua"
                whileHover={{
                  transition: { duration: 0.28 },
                }}
              />
              <div className="absolute top-0 left-0 w-[358px] h-[208px] z-[5] rounded-[2px] overflow-hidden">
                <motion.img
                  src={item.images?.jpg?.large_image_url}
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
                  className="absolute top-0 left-0 w-full h-full bg-black/85 z-10 flex items-center justify-center text-base text-2xl font-semibold text-center px-4"
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
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeShowcase;
