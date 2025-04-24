/* eslint-disable @typescript-eslint/no-explicit-any */
import { GET_CHARACTERS, GET_OVERVIEW } from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ItemPills from "./ItemPills";
import ThemeList from "./ThemeList";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LoadingStyle from "../ui/LoadingStyle";
import ErrorMessage from "../ui/ErrorMessage";

const AnimeOverview = () => {
  const location = useLocation();
  const [animeOverview, setAnimeOverview] = useState<any>();
  const [characters, setCharacters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const animeStats = [
    {
      label: "Scores",
      value: animeOverview?.score,
      className: "text-neonAqua",
    },
    { label: "Ranked", value: `#${animeOverview?.rank}` },
    { label: "Popularity", value: animeOverview?.popularity },
  ];
  const animeDetails = [
    { label: "Type", value: animeOverview?.type },
    { label: "Episodes", value: animeOverview?.episodes },
    { label: "Status", value: animeOverview?.status },
    { label: "Aired", value: animeOverview?.aired?.string },
    {
      label: "Premiered",
      value:
        animeOverview?.season && animeOverview?.year
          ? `${animeOverview.season} ${animeOverview.year}`
          : "N/A",
    },
    { label: "Broadcast", value: animeOverview?.broadcast?.string },
    { label: "Source", value: animeOverview?.source },
    { label: "Themes", value: animeOverview?.themes?.[0]?.name },
    { label: "Duration", value: animeOverview?.duration },
    { label: "Rating", value: animeOverview?.rating },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    console.log(searchParams);
    if (id) {
      fetchAnimeOverview(id);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      setAnimeOverview(null);
    }
  }, [location.search]);

  const fetchAnimeOverview = (animeId: any) => {
    setIsLoading(true);
    Promise.all([
      axios.get(GET_OVERVIEW.replace("{id}", animeId)),
      axios.get(GET_CHARACTERS.replace("{id}", animeId)),
    ])
      .then(([overviewRes, charactersRes]) => {
        setAnimeOverview(overviewRes.data.data);
        setCharacters(charactersRes.data.data);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  };

  const mainCharacters = characters.filter((char) => char.role === "Main");
  const visibleCharacters = mainCharacters.slice(0, 3);
  const remainingCount = mainCharacters.length - visibleCharacters.length;

  return (
    <div className="w-full flex justify-center relative !mb-20">
      {isLoading && <LoadingStyle />}

      {animeOverview ? (
        <>
          <div
            className={`w-full 4xl:h-[945px] h-[613px] absolute overflow-hidden ${
              isLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-500"
            }`}
          >
            <img
              src={
                animeOverview?.trailer?.images?.maximum_image_url ||
                animeOverview?.images?.jpg?.large_image_url
              }
              alt={animeOverview?.title}
              className="w-full h-full object-cover absolute inset-0 z-0 blur-[1px] scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black opacity-85 z-10"></div>
          </div>
          <div
            className={`z-30 4xl:!mt-[23rem] !mt-[15rem] ${
              isLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-500"
            }`}
          >
            <div className="w-full flex gap-20">
              {/* Left Content */}
              <div className="w-full 4xl:max-w-[477px] max-w-[330px] flex flex-col gap-10">
                <div className="bg-base/5 rounded-xl overflow-hidden">
                  <img
                    src={animeOverview?.images?.jpg?.large_image_url}
                    alt={animeOverview?.title}
                    className="w-full 4xl:h-[707px] h-[484px] object-cover object-center rounded-xl"
                  />
                </div>

                <div className="flex flex-col w-full bg-base/5 4xl:gap-10 gap-6 4xl:px-6 4xl:py-6 p-5 px-4 rounded-lg">
                  <ItemPills title="Statistics">
                    <div className="w-full rounded-lg bg-base/8 4xl:p-5 p-4 text-xl flex flex-col gap-2">
                      {animeStats?.map(({ label, value, className }, index) => (
                        <div
                          key={index}
                          className={`w-full flex justify-between 4xl:text-xl text-lg ${
                            className || ""
                          }`}
                        >
                          <p>{label}</p>
                          <p className="!mb-1 font-medium tracking-wide">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ItemPills>

                  <ItemPills title="Information">
                    <div className="w-full rounded-lg bg-base/8 4xl:p-5 p-4 text-xl flex flex-col gap-2">
                      {animeDetails?.map(({ label, value }, index) => (
                        <div
                          key={index}
                          className="flex gap-2 4xl:text-xl text-lg"
                        >
                          <p className="text-base/60">{label}:</p>
                          <p className="tracking-wide">{value || "N/A"}</p>
                        </div>
                      ))}
                    </div>
                  </ItemPills>

                  <ItemPills title="Opening Themes">
                    <ThemeList
                      themes={animeOverview?.theme?.openings || []}
                      label="Opening Themes"
                    />
                  </ItemPills>
                  <ItemPills title="Ending Themes">
                    <ThemeList
                      themes={animeOverview?.theme?.endings || []}
                      label="Ending Themes"
                    />
                  </ItemPills>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full 4xl:max-w-[1190px] max-w-[1010px] flex flex-col 4xl:!pt-14 !pt-10">
                {/* Top */}
                <div className="flex flex-col text-left leading-tight 4xl:h-[35rem] h-[22rem]">
                  <p
                    className={`${
                      animeOverview?.title_english
                        ? animeOverview?.title_english.length > 30
                          ? "4xl:text-[55px] text-[35px]"
                          : "4xl:text-[90px] text-[65px]"
                        : "4xl:text-[90px] text-[65px]"
                    }`}
                  >
                    {animeOverview?.title_english || animeOverview?.title}
                  </p>

                  <p
                    className={`${
                      animeOverview?.title_japanese?.length > 30
                        ? "text-[25px]"
                        : "4xl:text-[30px] text-2xl"
                    } 4xl:!my-8 !my-5`}
                  >
                    {animeOverview?.title_japanese}
                  </p>

                  <button className="5xl:h-[130px] 4xl:h-[75px] h-[56px] 5xl:px-36 px-13 w-fit flex justify-center items-center 4xl:border-2 3xl:border-2 border text-main border-neonAqua rounded-full cursor-pointer bg-neonAqua hover:bg-neonAqua/10 hover:text-neonAqua transition-default">
                    <p className="uppercase 5xl:text-[38px] 4xl:text-[20px] text-[16px] font-medium tracking-wide">
                      Watch Now
                    </p>
                  </button>

                  <div className="flex flex-col items-start 4xl:gap-5 gap-3 4xl:!mt-14 !mt-10">
                    <p className="4xl:text-2xl text-xl">Main Characters</p>
                    <div className="flex 4xl:gap-4 gap-2 items-center">
                      {visibleCharacters?.map((charData) => (
                        <button
                          key={charData.character.mal_id}
                          className="4xl:w-16 4xl:h-16 w-11 h-11 rounded-full overflow-hidden border-2 border-transparent hover:border-neonAqua transition-default cursor-pointer"
                          title={charData.character.name}
                        >
                          <img
                            src={charData.character.images.jpg.image_url}
                            alt={charData.character.name}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="cursor-pointer">
                            {remainingCount > 0 && (
                              <button
                                onClick={() =>
                                  document
                                    .getElementById("characters")
                                    ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="4xl:w-16 4xl:h-16 w-11 h-11 rounded-full flex items-center justify-center bg-transparent border-2 4xl:text-lg  border-neonAqua hover:bg-neonAqua/10 transition-default cursor-pointer text-neonAqua font-semibold "
                              >
                                {`+${remainingCount}`}
                              </button>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm py-[2px] px-1 tracking-wide">
                              See More
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="text-2xl text-left flex flex-col 4xl:gap-14 gap-9">
                  <p
                    className={`tracking-wide leading-loose opacity-95 ${
                      animeOverview?.synopsis &&
                      animeOverview.synopsis.length < 120
                        ? "4xl:text-3xl text-xl"
                        : "text-xl"
                    }`}
                  >
                    {animeOverview?.synopsis}
                  </p>

                  <ItemPills
                    items={animeOverview?.genres || []}
                    isClickable
                    onClick={(url) => window.open(url, "_blank")}
                  />

                  {animeOverview?.trailer?.embed_url && (
                    <div className="w-full rounded-xl overflow-hidden aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={`${animeOverview.trailer.embed_url}.?autoplay=1`}
                        title="Anime Trailer"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  <ItemPills
                    title="Streaming"
                    items={animeOverview?.streaming || []}
                    isClickable
                    onClick={(url) => window.open(url, "_blank")}
                  />

                  <ItemPills
                    title="Other Site"
                    items={animeOverview?.external || []}
                    isClickable
                    onClick={(url) => window.open(url, "_blank")}
                  />

                  <div id="characters" className="scroll-mt-24">
                    <ItemPills title="Characters">
                      <div className="grid grid-cols-5 4xl:gap-5 gap-4">
                        {characters?.map((charData, index) => {
                          return (
                            <div
                              key={index}
                              className="w-full gap-5 4xl:rounded-xl rounded-lg 4xl:p-3 p-2 overflow-hidden cursor-pointer bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                            >
                              <img
                                src={
                                  charData?.character?.images?.jpg?.image_url
                                }
                                alt={charData?.character?.name}
                                className="w-full 4xl:h-[240px] h-[200px] object-cover rounded-lg"
                              />
                              <div className="flex flex-col 4xl:gap-1 4xl:text-[16px] text-sm pt-2 tracking-wide">
                                <p className="text-neonAqua font-semibold">
                                  {charData?.character?.name}
                                </p>
                                <p>{charData?.role}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </ItemPills>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        !isLoading && <ErrorMessage />
      )}
    </div>
  );
};

export default AnimeOverview;
