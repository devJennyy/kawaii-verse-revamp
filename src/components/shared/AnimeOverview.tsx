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
import AnimeOverviewContent from "./AnimeOverviewContent";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const AnimeOverview = () => {
  const location = useLocation();
  const [animeOverview, setAnimeOverview] = useState<any>();
  const [characters, setCharacters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleOpeningCount, setVisibleOpeningCount] = useState(5);
  const [visibleEndingCount, setVisibleEndingCount] = useState(5);
  const openingThemes =
    animeOverview?.theme?.openings?.slice(0, visibleOpeningCount) || [];
  const endingThemes =
    animeOverview?.theme?.endings?.slice(0, visibleEndingCount) || [];

  const handleLoadMoreOpenings = () => {
    setVisibleOpeningCount((prev) => prev + 5);
  };

  const handleLoadMoreEndings = () => {
    setVisibleEndingCount((prev) => prev + 5);
  };
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
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

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
            className={`z-30 4xl:!mt-[23rem] xl:!mt-[13rem] lg:!mt-[10rem] !mt-12 transition-slow lg:w-fit w-full ${
              isLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-500"
            }`}
          >
            <div className="flex gap-16 lg:px-10">
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
                    <>
                      {openingThemes && openingThemes.length > 0 ? (
                        <>
                          <ThemeList
                            themes={openingThemes}
                            label="Opening Themes"
                          />
                          {animeOverview?.theme?.openings?.length >
                            visibleOpeningCount && (
                            <Button
                              colorType={"tertiary"}
                              hasIcon={false}
                              label="Load More"
                              onClick={() => handleLoadMoreOpenings()}
                              customClass="4xl:text-xl lg:text-default text-sm 4xl:!mt-5 lg:!mt-3 !mt-2 text-center w-full border-white/30 rounded-lg gap-5 4xl:py-4 py-3 px-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                            />
                          )}
                        </>
                      ) : (
                        <p className="text-white/50 4xl:text-lg xl:text-sm text-[12px] italic mt-2">
                          No opening themes have been added to this anime.
                        </p>
                      )}
                    </>
                  </ItemPills>

                  <ItemPills title="Ending Themes">
                    <>
                      {endingThemes && endingThemes.length > 0 ? (
                        <>
                          <ThemeList
                            themes={endingThemes}
                            label="Ending Themes"
                          />
                          {animeOverview?.theme?.endings?.length >
                            visibleEndingCount && (
                            <Button
                              colorType={"tertiary"}
                              hasIcon={false}
                              label="Load More"
                              onClick={() => handleLoadMoreEndings()}
                              customClass="4xl:text-xl lg:text-default text-sm 4xl:!mt-5 lg:!mt-3 !mt-2 text-center w-full border-white/30 rounded-lg gap-5 4xl:py-4 py-3 px-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                            />
                          )}
                        </>
                      ) : (
                        <p className="text-white/50 4xl:text-lg xl:text-sm text-[12px] italic">
                          No ending themes have been added to this anime.
                        </p>
                      )}
                    </>
                  </ItemPills>
                </div>
              </div>

              {/* Right Content */}
              <div className="4xl:w-[1190px] xl:w-[900px] w-full flex flex-col gap-6">
                {/* Top */}
                <div className="hidden lg:flex flex-col justify-end text-left 4xl:leading-tight 4xl:h-[37em] xl:h-[26.5rem] h-[22rem] 4xl:!pb-14 pb-5 4xl:gap-5 gap-2">
                  <p
                    className={`w-full xl:max-w-full max-w-[600px] 4xl:pr-0 xl:pr-5 pr-0 ${
                      animeOverview?.title_english
                        ? animeOverview?.title_english.length > 40
                          ? "4xl:text-[55px] xl:text-[35px] text-[30px] leading-normal"
                          : "4xl:text-[90px] xl:text-[65px] text-[45px] leading-tight"
                        : "4xl:text-[90px] xl:text-[65px] text-[45px] leading-tight"
                    }`}
                  >
                    {animeOverview?.title_english || animeOverview?.title}
                  </p>

                  <p
                    className={`w-full 4xl:max-w-full xl:max-w-[700px] max-w-[600px] ${
                      animeOverview?.title_japanese?.length > 30
                        ? "xl:text-[25px] text-[20px]"
                        : "4xl:text-[30px] xl:text-2xl text-xl"
                    } !my-3`}
                  >
                    {animeOverview?.title_japanese}
                  </p>

                  <Dialog>
                    <DialogTrigger>
                      <Button
                        colorType={"tertiary"}
                        hasIcon={false}
                        label="WATCH NOW"
                        customClass="!mt-1 w-fit 4xl:text-xl xl:text-default text-sm 4xl:px-18 4xl:py-5 xl:px-16 xl:py-4 px-12 py-[14px] font-medium text-main hover:text-neonAqua bg-neonAqua hover:bg-neonAqua/10 cursor-pointer transition-default"
                      />
                    </DialogTrigger>
                    <DialogContent
                      className={`bg-main p-5 scale-115 ${
                        animeOverview?.streaming?.length === 1
                          ? "w-fit"
                          : "w-full"
                      }`}
                    >
                      <DialogTitle className="tracking-wide text-left 4xl:text-xl lg:text-default sm:text-sm text-[12px] text-white leading-relaxed sm:pr-10 pr-5">
                        Available Streaming Platform
                      </DialogTitle>
                      <div
                        className={`grid ${
                          animeOverview?.streaming?.length === 1
                            ? "grid-cols-1"
                            : "grid-cols-2"
                        } 4xl:gap-4 gap-2`}
                      >
                        {animeOverview?.streaming?.map(
                          (platform: any, index: any) => (
                            <a
                              key={index}
                              href={platform.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer flex justify-start items-center gap-2 text-base text-[16px] rounded-md px-3 4xl:py-3 lg:py-[10px] py-2 bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua hover:text-neonAqua transition-default"
                            >
                              <p className="4xl:text-default sm:text-sm text-[12px]">
                                {platform.name}
                              </p>
                            </a>
                          )
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex flex-col items-start 4xl:gap-5 gap-3 4xl:!mt-14 xl:!mt-7 !mt-4">
                    <p className="4xl:text-2xl xl:text-xl font-medium">
                      Main Characters
                    </p>
                    <div className="flex 4xl:gap-4 gap-2 items-center">
                      {visibleCharacters && visibleCharacters.length > 0 ? (
                        <>
                          {visibleCharacters.map((charData) => (
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

                          {remainingCount > 0 && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="cursor-pointer">
                                  <div
                                    onClick={() => {
                                      setTimeout(() => {
                                        document
                                          .getElementById("characters")
                                          ?.scrollIntoView({
                                            behavior: "smooth",
                                          });
                                      }, 100); // short delay to ensure DOM is ready
                                    }}
                                    className="4xl:w-16 4xl:h-16 xl:w-11 xl:h-11 w-9 h-9 rounded-full flex items-center justify-center bg-transparent border-2 4xl:text-lg xl:text-default text-sm border-neonAqua hover:bg-neonAqua/10 transition-default cursor-pointer text-neonAqua font-semibold"
                                  >
                                    {`+${remainingCount}`}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-sm py-[2px] px-1 tracking-wide">
                                    See More
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </>
                      ) : (
                        <p className="text-white/50 4xl:text-lg xl:text-sm text-[12px] italic">
                          No characters available to preview.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* For Mobile */}
                <div className="lg:hidden relative w-full flex flex-col justify-center">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={
                        animeOverview?.trailer?.images?.maximum_image_url ||
                        animeOverview?.images?.jpg?.large_image_url
                      }
                      alt={animeOverview?.title}
                      className="w-full sm:h-[300px] h-[280px] object-cover object-center transition-slow"
                    />
                    <div className="absolute inset-0 sm:h-[301px] h-[281px] bg-gradient-to-t from-main to-main/60 transition-slow" />
                  </div>

                  <div className="z-30 !mt-28 lg:px-0 sm:px-5 px-4 !mx-auto sm:w-[640px] w-full">
                    <div className="flex items-end gap-5">
                      <img
                        src={animeOverview?.images?.jpg?.large_image_url}
                        alt={animeOverview?.title}
                        className="sm:w-[195px] sm:h-[274px] w-[145px] h-[224px] object-cover rounded-md"
                      />

                      <div className="flex flex-col gap-2 !mb-2">
                        <p
                          className={`line-clamp-2 ${
                            animeOverview?.title_english
                              ? animeOverview?.title_english.length > 30
                                ? "sm:text-4xl text-2xl leading-8"
                                : "sm:text-3xl text-[28px] leading-9"
                              : "text-[28px] leading-9"
                          }`}
                        >
                          {animeOverview?.title_english || animeOverview?.title}
                        </p>
                        <p className="sm:text-xl text-sm line-clamp-1">
                          {animeOverview?.title_japanese}
                        </p>

                        <Dialog>
                          <DialogTrigger>
                            <Button
                              colorType={"tertiary"}
                              hasIcon={false}
                              label="WATCH NOW"
                              customClass="sm:px-12 sm:py-3 px-8 py-2 w-fit sm:text-[12px] text-[10px] !my-2 font-medium text-neonAqua"
                            />
                          </DialogTrigger>
                          <DialogContent className="bg-main lg:p-5 p-4 scale-115">
                            <DialogTitle className="tracking-wide text-left 4xl:text-lg sm:text-default text-sm text-white leading-relaxed sm:pr-10 pr-5">
                              Available Streaming Platform
                            </DialogTitle>
                            <div
                              className={`grid ${
                                animeOverview?.streaming?.length === 1
                                  ? "grid-cols-1"
                                  : "grid-cols-2"
                              } 4xl:gap-4 gap-2`}
                            >
                              {animeOverview?.streaming?.map(
                                (platform: any, index: any) => (
                                  <a
                                    key={index}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer flex justify-start items-center gap-2 text-base text-[16px] rounded-md px-3 4xl:py-3 lg:py-[10px] py-2 bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua hover:text-neonAqua transition-default"
                                  >
                                    <p className="4xl:text-default sm:text-sm text-[12px] whitespace-nowrap truncate">
                                      {platform.name}
                                    </p>
                                  </a>
                                )
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        <div className="flex flex-col gap-2">
                          <p className="sm:text-default text-sm">
                            Main Characters
                          </p>
                          <div className="flex gap-1 items-center">
                            {visibleCharacters?.length > 0 ? (
                              visibleCharacters.map((charData) => (
                                <button
                                  key={charData.character.mal_id}
                                  className="sm:w-9 sm:h-9 w-7 h-7 rounded-full overflow-hidden border-2 border-transparent hover:border-neonAqua transition-default cursor-pointer"
                                  title={charData.character.name}
                                >
                                  <img
                                    src={
                                      charData.character.images.jpg.image_url
                                    }
                                    alt={charData.character.name}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))
                            ) : (
                              <p className="text-white/50 text-sm italic">
                                No characters available.
                              </p>
                            )}

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="cursor-pointer">
                                  {remainingCount > 0 && (
                                    <div
                                      onClick={() =>
                                        document
                                          .getElementById("characters")
                                          ?.scrollIntoView({
                                            behavior: "smooth",
                                          })
                                      }
                                      className="sm:w-9 sm:h-9 w-7 h-7 rounded-full flex items-center justify-center bg-transparent border-2 4xl:text-lg xl:text-default text-[10px] border-neonAqua hover:bg-neonAqua/10 transition-default cursor-pointer text-neonAqua font-semibold "
                                    >
                                      {`+${remainingCount}`}
                                    </div>
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
                    </div>
                  </div>

                  {/* Switch Content */}
                  <div className="flex flex-col lg:px-0 sm:px-5 px-4 !mt-8 !mx-auto sm:w-[640px] w-full">
                    <div className="flex flex-col gap-2 relative">
                      <div className="flex gap-5 4xl:text-xl sm:text-lg tracking-wide 4xl:font-bold font-medium">
                        <button
                          onClick={() => handleTabChange("overview")}
                          className={`transition duration-300 ${
                            activeTab === "overview"
                              ? "text-neonAqua"
                              : "text-base/60"
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          onClick={() => handleTabChange("details")}
                          className={`transition duration-300 ${
                            activeTab === "details"
                              ? "text-neonAqua"
                              : "text-base/60"
                          }`}
                        >
                          More Details
                        </button>
                      </div>

                      <div className="flex items-center relative !mb-6">
                        <div
                          className={`absolute top-0 left-0 ${
                            activeTab === "details"
                              ? "sm:w-24 w-20"
                              : "sm:w-16 w-15"
                          } lg:border-2 border border-neonAqua rounded-full transition-all duration-300 transform ${
                            activeTab === "details"
                              ? "sm:translate-x-[85%] translate-x-[100%]"
                              : "translate-x-0"
                          }`}
                        ></div>

                        <div className="w-full lg:h-[2px] h-[1px] bg-base/10 mt-2"></div>
                      </div>
                    </div>

                    {/* Conditionally rendered content */}
                    <div className="mt-4">
                      {activeTab === "overview" ? (
                        <AnimeOverviewContent
                          animeOverview={animeOverview}
                          isExpanded={isExpanded}
                          setIsExpanded={setIsExpanded}
                          characters={characters}
                        />
                      ) : (
                        <div className=" w-full flex flex-col gap-10 transition-slow">
                          <div className="flex flex-col w-full bg-base/5 4xl:gap-10 gap-6 4xl:px-6 4xl:py-6 xl:p-5 xl:px-4 px-3 py-3 rounded-lg">
                            <ItemPills title="Statistics">
                              <div className="w-full rounded-lg bg-base/8 4xl:p-5 xl:p-4 p-3 flex flex-col gap-2 font-medium tracking-wide">
                                {animeStats?.map(
                                  ({ label, value, className }, index) => (
                                    <div
                                      key={index}
                                      className={`w-full flex justify-between 4xl:text-lg xl:text-default text-sm ${
                                        className || ""
                                      }`}
                                    >
                                      <p>{label}</p>
                                      <p className="!mb-1">{value}</p>
                                    </div>
                                  )
                                )}
                              </div>
                            </ItemPills>

                            <ItemPills title="Information">
                              <div className="w-full rounded-lg bg-base/8 4xl:p-5 xl:p-4 p-3 flex flex-col gap-2">
                                {animeDetails?.map(
                                  ({ label, value }, index) => (
                                    <div
                                      key={index}
                                      className="flex gap-2 4xl:text-lg xl:text-default text-sm"
                                    >
                                      <p className="text-base/60">{label}:</p>
                                      <p className="tracking-wide">
                                        {value || "N/A"}
                                      </p>
                                    </div>
                                  )
                                )}
                              </div>
                            </ItemPills>

                            
                              <>
                                {openingThemes && openingThemes.length > 0 ? (
                                  <>
                                  <ItemPills title="Opening Themes">
                                    <ThemeList
                                      themes={openingThemes}
                                      label="Opening Themes"
                                    />
                                    </ItemPills>
                                    
                                    {animeOverview?.theme?.openings?.length >
                                      visibleOpeningCount && (
                                      <Button
                                        colorType={"tertiary"}
                                        hasIcon={false}
                                        label="Load More"
                                        onClick={() => handleLoadMoreOpenings()}
                                        customClass="z-50 4xl:text-xl text-default text-center w-full border-white/30 rounded-lg gap-5 4xl:py-4 py-3 px-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                                      />
                                    )}
                                  </>
                                ) : (
                                  <p className="text-white/50 text-sm italic">
                                    No opening themes have been added to this
                                    anime.
                                  </p>
                                )}
                              </>
                            

                            
                              <>
                                {endingThemes && endingThemes.length > 0 ? (
                                  <>
                                  <ItemPills title="Ending Themes">
                                    <ThemeList
                                      themes={endingThemes}
                                      label="Ending Themes"
                                    />
                                    </ItemPills>
                                    {animeOverview?.theme?.endings?.length >
                                      visibleEndingCount && (
                                      <Button
                                        colorType={"tertiary"}
                                        hasIcon={false}
                                        label="Load More"
                                        onClick={() => handleLoadMoreEndings()}
                                        customClass="z-40 4xl:text-xl text-default 4xl:!mt-5 !mt-3 text-center w-full border-white/30 rounded-lg gap-5 4xl:py-4 py-3 px-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                                      />
                                    )}
                                  </>
                                ) : (
                                  <p className="text-white/50 text-sm italic">
                                    No ending themes have been added to this
                                    anime.
                                  </p>
                                )}
                              </>
                            
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="hidden lg:block">
                  <AnimeOverviewContent
                    animeOverview={animeOverview}
                    isExpanded={isExpanded}
                    setIsExpanded={setIsExpanded}
                    characters={characters}
                  />
                </div>
                <div id="characters" className="scroll-mt-24"></div>
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
