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

interface AnimeShowcaseProps {
  type: "newest-season" | "top-anime" | "seasonal" | "movies";
}

const AnimeShowcase = ({ type }: AnimeShowcaseProps) => {
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
    }, 1000);
  }, [type]);

  return (
    <div className="flex flex-col items-start gap-12 z-30 4xl:px-20 px-12 pb-24">
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
                <div className="w-[388px] h-[590px] flex-none rounded-sm overflow-hidden px-1">
                  <img
                    src={item.images?.jpg?.large_image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
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
                transition: { duration: 0.3 }, 
              }}
            >
              <motion.div
                className="absolute bottom-0 right-0 w-[358px] h-[208px] bg-secondaryBase/10 z-0 rounded-[2px] transition-slow group-hover:bg-neonAqua"
                whileHover={{
                  transition: { duration: 0.3 },
                }}
              />
              <div className="absolute top-0 left-0 w-[358px] h-[208px] z-[5] rounded-[2px] overflow-hidden">
                <img
                  src={item.images?.jpg?.large_image_url}
                  alt={item.title}
                  className="w-full h-full object-cover object-[50%_20%]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeShowcase;
