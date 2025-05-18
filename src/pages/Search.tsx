/* eslint-disable @typescript-eslint/no-explicit-any */
import FilterSortPanel from "@/components/layout/FilterSortPanel";
import Button from "@/components/shared/Button";
import LoadingStyle from "@/components/ui/LoadingStyle";
import { SEARCH_ANIME } from "@/constants/api";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router";

const Search = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [mediaType, setMediaType] = useState("all");

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const searchAnime = () => {
    setIsSearchLoading(true);
    Promise.all([
      axios.get(
        SEARCH_ANIME.replace(
          "{searchKey}",
          searchKeyword ? searchKeyword + "&" : ""
        ).replace(
          "{type}",
          mediaType !== "all"
            ? `type=${mediaType === "series" ? "TV" : "Movie"}`
            : ``
        )
      ),
    ])
      .then(([searchRes]) => {
        setAnimeList(searchRes?.data?.data);
        console.log(searchRes);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
          setIsSearchLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  };

  useEffect(() => {
    searchAnime();
  }, [mediaType]);

  useEffect(() => {
    // Get the value of the 'q' parameter from the URL
    const query = searchParams.get("q");

    if (query) {
      setSearchKeyword(query);
      searchAnime();
    }
  }, [searchParams]);

  return (
    <section id="search" className="w-full">
      {isLoading && <LoadingStyle />}
      <div
        className={`w-full 4xl:max-w-[1920px] max-w-[1280px] !mx-auto xl:!mt-16 lg:!mt-10 !mt-5 !py-10 lg:px-5 px-4 transition-slow ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <FilterSortPanel
          isSearchPage={true}
          searchFunction={searchAnime}
          searchKeyword={searchKeyword || ""}
          setSearchKeyword={setSearchKeyword}
          isSearch={true}
          mediaType={mediaType}
          setMediaType={setMediaType}
        />
        <div className="w-full flex flex-col 4xl:gap-4 gap-2 4xl:!mt-16 sm:!mt-10 !mt-5">
          <p className="4xl:text-3xl xl:text-2xl sm:text-xl tracking-wide">
            Top Results
          </p>
          {isSearchLoading && <div>...</div>}
          {!isSearchLoading && (
            <div className="w-full flex flex-col items-center gap-20">
              <div className="grid 4xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-5 lg:gap-2 gap-3 transition-slow">
                {animeList?.length === 0 && <div>No anime found!</div>}
                {animeList?.map((anime, index) => {
                  return (
                    <Link key={index} to={`/anime-overview?id=${anime.mal_id}`}>
                      <motion.div className="relative w-full !mt-2 cursor-pointer lg:p-2">
                        {/* Image Container */}
                        <div className="w-full lg:h-[320px] h-[245px]">
                          <img
                            src={anime?.images?.jpg?.large_image_url}
                            alt={anime?.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col text-left gap-1 tracking-wider !mt-3">
                          <p className="line-clamp-3 overflow-hidden text-ellipsis lg:text-default text-sm">
                            {anime?.title}
                          </p>
                          <p className="lg:text-sm text-[12px] opacity-60 capitalize">
                            {anime.season}{" "}
                            <span className="ml-1">{anime.year}</span>
                          </p>
                        </div>

                        {/* Black Overlay with Hover Image */}
                        <motion.div
                          className="absolute inset-0 hidden lg:flex items-center justify-center text-white font-bold text-xl"
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

                            <Button
                              label="View Details"
                              hasIcon={false}
                              colorType="secondary"
                              customClass="3xl:h-11 xl:h-9 h-7 4xl:text-[16px] 3xl:text-sm xl:text-[12px] text-[10px]"
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
