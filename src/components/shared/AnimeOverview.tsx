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
import Button from "./Button";

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
    // window.scrollTo({ top: 0, behavior: "smooth" });
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    console.log(searchParams);
    if (id) {
      fetchAnimeOverview(id);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
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
        }, 0);
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
            className={`w-full 4xl:h-[945px] xl:h-[635px] h-[513px] absolute overflow-hidden transition-slow lg:block hidden ${
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
              className="w-full h-full object-cover absolute inset-0 z-0 blur-[1px] 4xl:scale-[1.02] scale-[1]"
            />
            <div className="absolute inset-0 bg-black opacity-85 z-10  overflow-hidden"></div>
          </div>
          <div
            className={`z-30 4xl:!mt-[23rem] xl:!mt-[13rem] lg:!mt-[10rem] !mt-12 transition-slow ${
              isLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-500"
            }`}
          >
            <div className="w-full flex gap-16 lg:px-10">
              {/* Left Content */}
              <div className="hidden w-full 4xl:max-w-[477px] xl:max-w-[330px] max-w-[270px] lg:flex flex-col gap-10 transition-slow">
                <div className="bg-base/5 rounded-xl overflow-hidden">
                  <img
                    src={animeOverview?.images?.jpg?.large_image_url}
                    alt={animeOverview?.title}
                    className="w-full 4xl:h-[707px] xl:h-[484px] h-[394px] object-cover object-center rounded-xl"
                  />
                </div>

                <div className="flex flex-col w-full bg-base/5 4xl:gap-10 gap-6 4xl:px-6 4xl:py-6 xl:p-5 xl:px-4 px-3 py-3 rounded-lg">
                  <ItemPills title="Statistics">
                    <div className="w-full rounded-lg bg-base/8 4xl:p-5 xl:p-4 p-3 flex flex-col gap-2 font-medium tracking-wide">
                      {animeStats?.map(({ label, value, className }, index) => (
                        <div
                          key={index}
                          className={`w-full flex justify-between 4xl:text-lg xl:text-default text-sm ${
                            className || ""
                          }`}
                        >
                          <p>{label}</p>
                          <p className="!mb-1">{value}</p>
                        </div>
                      ))}
                    </div>
                  </ItemPills>

                  <ItemPills title="Information">
                    <div className="w-full rounded-lg bg-base/8 4xl:p-5 xl:p-4 p-3 flex flex-col gap-2">
                      {animeDetails?.map(({ label, value }, index) => (
                        <div
                          key={index}
                          className="flex gap-2 4xl:text-lg xl:text-default text-sm"
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
              <div className="4xl:w-[1190px] xl:w-[900px] w-full flex flex-col gap-6">
                {/* Top */}
                <div className="hidden lg:flex flex-col justify-end text-left 4xl:leading-tight 4xl:h-[37em] xl:h-[26.5rem] h-[22rem] 4xl:!pb-14 pb-5">
                  <p
                    className={`w-full 4xl:max-w-full xl:max-w-[700px] max-w-[600px] leading-normal ${
                      animeOverview?.title_english
                        ? animeOverview?.title_english.length > 30
                          ? "4xl:text-[55px] xl:text-[35px] text-[30px]"
                          : "4xl:text-[90px] xl:text-[65px] text-[55px]"
                        : "4xl:text-[90px] xl:text-[65px] text-[55px]"
                    }`}
                  >
                    {animeOverview?.title_english || animeOverview?.title}
                  </p>

                  <p
                    className={`w-full 4xl:max-w-full xl:max-w-[700px] max-w-[600px] ${
                      animeOverview?.title_japanese?.length > 30
                        ? "xl:text-[25px] text-[20px]"
                        : "4xl:text-[30px] xl:text-2xl text-xl"
                    } 4xl:!my-8 xl:!my-5 !my-3`}
                  >
                    {animeOverview?.title_japanese}
                  </p>

                  <button className="5xl:h-[130px] 4xl:h-[75px] xl:h-[56px] h-[40px] 5xl:px-36 xl:px-13 px-7 w-fit flex justify-center items-center 4xl:border-2 3xl:border-2 border text-main border-neonAqua rounded-full cursor-pointer bg-neonAqua hover:bg-neonAqua/10 hover:text-neonAqua transition-default">
                    <p className="uppercase 5xl:text-[38px] 4xl:text-[20px] xl:text-default text-[12px] font-medium tracking-wide">
                      Watch Now
                    </p>
                  </button>

                  <div className="flex flex-col items-start 4xl:gap-5 gap-3 4xl:!mt-14 !mt-7">
                    <p className="4xl:text-2xl xl:text-xl font-medium">
                      Main Characters
                    </p>
                    <div className="flex 4xl:gap-4 gap-2 items-center">
                      {visibleCharacters?.map((charData) => (
                        <button
                          key={charData.character.mal_id}
                          className="4xl:w-16 4xl:h-16 xl:w-11 xl:h-11 w-9 h-9 rounded-full overflow-hidden border-2 border-transparent hover:border-neonAqua transition-default cursor-pointer"
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
                                className="4xl:w-16 4xl:h-16 xl:w-11 xl:h-11 w-9 h-9 rounded-full flex items-center justify-center bg-transparent border-2 4xl:text-lg xl:text-default text-sm border-neonAqua hover:bg-neonAqua/10 transition-default cursor-pointer text-neonAqua font-semibold "
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

                {/* For Mobile */}
                <div className="lg:hidden relative w-full !pt-10 flex flex-col justify-center">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/images/frieren.jpg"
                      alt=""
                      className="w-full h-[300px] object-cover object-center transition-slow"
                    />
                    <div className="absolute inset-0 h-[301px] bg-gradient-to-t from-main to-main/60 transition-slow" />
                  </div>

                  <div className="z-30 !mt-32 px-4">
                    <div className="flex items-end gap-5">
                      <img
                        src="/images/frieren.jpg"
                        alt=""
                        className="w-[145px] h-[204px] object-cover rounded-md"
                      />

                      <div className="flex flex-col gap-2 !mb-2">
                        <p className="text-3xl leading-none">Frieren Ghoul</p>
                        <p className="text-[12px]">葬送のフリーレン</p>
                        <Button
                          colorType={"tertiary"}
                          hasIcon={false}
                          label="WATCH NOW"
                          customClass="px-8 py-[7px] w-fit text-[10px] !my-2 font-medium"
                        />
                        <div className="flex flex-col gap-2">
                          <p className="text-[12px]">Main Characters</p>
                          <div className="flex gap-1">
                            <div className="w-5 h-5 rounded-full bg-white"></div>
                            <div className="w-5 h-5 rounded-full bg-white"></div>
                            <div className="w-5 h-5 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col px-4 !mt-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-5 text-sm tracking-wide font-semibold">
                        <p>Overview</p>
                        <p>More Details</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 lg:border-2 border border-neonAqua rounded-full"></div>
                        <div className="w-full lg:h-[2px] h-[1px] bg-base/10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="text-left flex flex-col 4xl:gap-14 2xl:gap-8 gap-6 relative lg:px-0 px-4">
                  <p
                    className={`tracking-wide leading-loose opacity-95 ${
                      animeOverview?.synopsis &&
                      animeOverview.synopsis.length < 120
                        ? "4xl:text-3xl xl:text-xl"
                        : "xl:text-lg lg:text-default text-sm"
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
                      <div className="grid 3xl:grid-cols-5 lg:grid-cols-4 grid-cols-3 4xl:gap-4 lg:gap-3 gap-2">
                        {characters?.map((charData, index) => {
                          return (
                            <div
                              key={index}
                              className="w-full gap-5 lg:rounded-lg rounded-md 4xl:p-3 lg:p-2 p-1 overflow-hidden cursor-pointer bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                            >
                              <img
                                src={
                                  charData?.character?.images?.jpg?.image_url
                                }
                                alt={charData?.character?.name}
                                className="w-full 4xl:h-[230px] 3xl:h-[200px] xl:h-[175px] lg:h-[140px] h-[109px] object-cover lg:rounded-md rounded-sm"
                              />
                              <div className="flex flex-col 4xl:gap-1 4xl:text-lg xl:text-default lg:text-sm text-[12px] pt-2 tracking-wide">
                                <p className="text-neonAqua font-semibold">
                                  {charData?.character?.name}
                                </p>
                                <p className="opacity-60">{charData?.role}</p>
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
