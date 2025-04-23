/* eslint-disable @typescript-eslint/no-explicit-any */
import { NEWEST_SEASON, TOP_ANIME } from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

interface AnimeShowcaseProps {
  type: "newest-season" | "popular";
  delay?: number;
}

const AnimeGallery = ({ type, delay = 0 }: AnimeShowcaseProps) => {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const url = type === "newest-season" ? NEWEST_SEASON : TOP_ANIME;

        const res = await axios.get(url);
        setAnimeList(res.data.data);
      } catch (err) {
        console.error("Oops! something went wrong", err);
      }
    };

    fetchAnime();
  }, [type, screenWidth, delay]);

  return (
    <div className="w-full flex flex-col items-center gap-20">
      <div className="grid 4xl:grid-cols-7 grid-cols-5 xl:gap-5 gap-2 transition-slow">
        {animeList?.map((anime, index) => {
          return (
            <motion.div
              key={index}
              className="relative w-full !mt-2 cursor-pointer p-2"
            >
              {/* Image Container */}
              <div className="w-full h-[320px]">
                <img
                  src={anime?.images?.jpg?.large_image_url}
                  alt={anime?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col text-left gap-1 tracking-wider !mt-3">
                <p className="line-clamp-3 overflow-hidden text-ellipsis">
                  {anime?.title}
                </p>
                <p className="text-sm opacity-60 capitalize">
                  {anime.season} <span className="ml-1">{anime.year}</span>
                </p>
              </div>

              {/* Black Overlay with Hover Image */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                title={anime?.title}
              >
                <img
                  src={anime?.images?.jpg?.large_image_url}
                  alt={anime?.title}
                  className="w-full h-full object-cover z-0"
                />
                <div className="absolute top-0 left-0 bg-black/85 w-full h-full z-0"></div>

                <div className="w-full h-full absolute z-50 xl:p-5 lg:p-3 text-left flex flex-col justify-between transition-slow">
                  <div className="flex flex-col text-white tracking-wide gap-1 font-medium">
                    <p className="4xl:text-2xl">{anime?.title}</p>
                    <div className="flex items-center gap-2 text-neonAqua">
                      <FaStar size={19} />
                      <p className="4xl:text-2xl">{anime?.score}</p>
                    </div>
                    <p className="4xl:text-xl text-[16px] opacity-75 font-normal !mt-5">
                      {anime?.episodes} Episodes
                    </p>
                    <p className="4xl:text-xl text-[16px] opacity-75 font-normal">
                      {anime?.duration}
                    </p>
                  </div>

                  <Link to={`/anime-overview?id=${anime.mal_id}`}>
                    <Button
                      label="View Details"
                      hasIcon={false}
                      colorType="secondary"
                      customClass="3xl:h-11 xl:h-9 h-7 4xl:text-[16px] 3xl:text-sm xl:text-[12px] text-[10px]"
                    />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <Button
        colorType={"primary"}
        label="Load More"
        hasIcon={false}
        customClass="text-xl font-light"
      />
    </div>
  );
};

export default AnimeGallery;
