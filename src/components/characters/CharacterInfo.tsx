/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import LoadingStyle from "../ui/LoadingStyle";
import ErrorMessage from "../ui/ErrorMessage";
import axios from "axios";
import {
  GET_CHARACTER_INFO,
  GET_CHARACTER_VOICE_ACTORS,
} from "@/constants/api";
import { Link, useLocation } from "react-router";
import ItemPills from "../shared/ItemPills";
import Button from "../shared/Button";
import CharacterOverviewContent from "../shared/CharacterOverviewContent";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CharacterInfo = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [characterInfo, setCharacterInfo] = useState<any>();
  const [voiceActor, setVoiceActor] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);
  const animeography = characterInfo?.anime?.slice(0, visibleCount) || [];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const [activeTab, setActiveTab] = useState("overview");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const animeStats = [
    {
      label: "Favorites",
      value: characterInfo?.favorites,
      className: "text-neonAqua",
    },
    { label: "Role", value: characterInfo?.anime[0].role },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    console.log(searchParams);
    if (id) {
      fetchCharacterInfo(id);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      setCharacterInfo(null);
    }
  }, [location.search]);

  const fetchCharacterInfo = (animeId: any) => {
    setIsLoading(true);
    Promise.all([
      axios.get(GET_CHARACTER_INFO.replace("{id}", animeId)),
      axios.get(GET_CHARACTER_VOICE_ACTORS.replace("{id}", animeId)),
    ])
      .then(([infoRes, voiceActorRes]) => {
        setCharacterInfo(infoRes.data.data);
        setVoiceActor(voiceActorRes.data.data);
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

  return (
    <div className="w-full flex justify-center relative !mb-20">
      {isLoading && <LoadingStyle />}

      {characterInfo ? (
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
                characterInfo?.anime[0]?.anime.images.jpg.large_image_url ||
                characterInfo?.anime[1]?.anime.images.jpg.large_image_url
              }
              alt={characterInfo?.nicknames[0]}
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
                    src={characterInfo?.images?.jpg?.image_url}
                    alt={characterInfo?.name}
                    className="w-full 4xl:h-[707px] xl:h-[484px] h-[394px] object-cover object-center rounded-xl"
                  />
                </div>

                <div className="flex flex-col w-full bg-base/5 4xl:gap-10 gap-6 4xl:px-6 4xl:py-6 xl:p-5 xl:px-4 px-3 py-3 rounded-lg">
                  <ItemPills title="Information">
                    <div className="w-full rounded-lg bg-base/8 4xl:p-5 xl:p-4 p-3 flex flex-col gap-2 font-medium tracking-wide">
                      {animeStats?.map(({ label, value, className }, index) => (
                        <div
                          key={index}
                          className={`w-full flex justify-between 4xl:text-lg xl:text-default text-sm ${
                            className || ""
                          }`}
                        >
                          <p>{label}</p>
                          <p className="!mb-1">{value.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </ItemPills>

                  {animeography && animeography.length > 0 ? (
                    <>
                      <ItemPills title="Animeography">
                        <div className="flex flex-col 4xl:gap-4 gap-3">
                          {animeography.map((item: any, index: any) => {
                            return (
                              <Link to={`/anime-overview?id=${item.anime.mal_id}`}
                                key={index}
                                className="tracking-wide group w-full bg-base/8 rounded-lg flex justify-start items-start gap-5 p-2 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                              >
                                <div className="w-full max-w-20 h-24 overflow-hidden rounded-sm">
                                  <img
                                    src={item.anime.images.jpg.image_url}
                                    alt={item.anime.title}
                                    className="object-cover object-center w-full max-w-full h-full rounded-sm border-5 border-secondary/10"
                                  />
                                </div>
                                <div className="w-full flex flex-col justify-between">
                                  <p className="text-left 4xl:text-lg xl:text-default text-sm line-clamp-2">
                                    {item.anime.title}
                                  </p>
                                  <p className="text-left 4xl:text-lg xl:text-default text-sm !mt-1">
                                    Role: {item.role}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </ItemPills>

                      {characterInfo?.anime?.length > visibleCount && (
                        <Button
                          colorType={"tertiary"}
                          hasIcon={false}
                          label="Load More"
                          onClick={handleLoadMore}
                          customClass="4xl:text-xl lg:text-default text-sm text-center w-full border-white/30 rounded-lg gap-5 4xl:py-4 py-3 px-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                        />
                      )}
                    </>
                  ) : (
                    <p className="text-white/50 4xl:text-lg xl:text-sm text-[12px] italic mt-2">
                      No anime roles found for this character.
                    </p>
                  )}
                </div>
              </div>

              {/* Right Content */}
              <div className="4xl:w-[1190px] xl:w-[900px] w-full flex flex-col gap-6">
                {/* Top */}
                <div className="hidden lg:flex flex-col justify-end text-left 4xl:leading-tight 4xl:h-[37em] xl:h-[26.5rem] h-[22rem] 4xl:!pb-14 pb-5 4xl:gap-5 gap-2">
                  <p
                    className={`w-full xl:max-w-full max-w-[600px] 4xl:pr-0 xl:pr-5 pr-0 ${
                      characterInfo?.name
                        ? characterInfo?.name.length > 40
                          ? "4xl:text-[55px] xl:text-[35px] text-[30px] leading-normal"
                          : "4xl:text-[90px] xl:text-[65px] text-[45px] leading-tight"
                        : "4xl:text-[90px] xl:text-[65px] text-[45px] leading-tight"
                    }`}
                  >
                    {characterInfo?.name || characterInfo?.nicknames[0]}
                  </p>

                  <p
                    className={`w-full 4xl:max-w-full xl:max-w-[700px] max-w-[600px] ${
                      characterInfo?.name_kanji?.length > 30
                        ? "xl:text-[25px] text-[20px]"
                        : "4xl:text-[30px] xl:text-2xl text-xl"
                    } !my-3`}
                  >
                    {characterInfo?.name_kanji}
                  </p>

                  <div className="flex flex-col items-start 4xl:gap-5 gap-3 4xl:!mt-14 xl:!mt-7 !mt-4">
                    <p className="4xl:text-2xl xl:text-xl font-medium">
                      Voice Actors
                    </p>
                    <div className="flex 4xl:gap-4 gap-2 items-center">
                      {voiceActor && voiceActor.length > 0 ? (
                        <>
                          {voiceActor.slice(0, 3).map((voiceActor, index) => (
                            <button
                              key={index}
                              className="4xl:w-16 4xl:h-16 xl:w-11 xl:h-11 w-9 h-9 rounded-full overflow-hidden border-2 border-transparent hover:border-neonAqua transition-default cursor-pointer"
                              title={voiceActor.person.name}
                            >
                              <img
                                src={voiceActor.person.images.jpg.image_url}
                                alt={voiceActor.person.name}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}

                          {voiceActor.length > 3 && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="cursor-pointer">
                                  <div
                                    onClick={() => {
                                      setTimeout(() => {
                                        document
                                          .getElementById("voice-actors")
                                          ?.scrollIntoView({
                                            behavior: "smooth",
                                          });
                                      }, 100);
                                    }}
                                    className="4xl:w-16 4xl:h-16 xl:w-11 xl:h-11 w-9 h-9 rounded-full flex items-center justify-center bg-transparent border-2 4xl:text-lg xl:text-default text-sm border-neonAqua hover:bg-neonAqua/10 transition-default cursor-pointer text-neonAqua font-semibold"
                                  >
                                    {`+${voiceActor.length - 3}`}
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
                          No voice actors available to preview.
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
                        characterInfo?.anime[0]?.anime.images.jpg.large_image_url ||
                        characterInfo?.anime[1]?.anime.images.jpg.large_image_url
                      }
                      alt={characterInfo?.name}
                      className="w-full sm:h-[300px] h-[280px] object-cover object-center transition-slow"
                    />
                    <div className="absolute inset-0 sm:h-[301px] h-[281px] bg-gradient-to-t from-main to-main/60 transition-slow" />
                  </div>

                  <div className="z-30 !mt-28 lg:px-0 sm:px-5 px-4 !mx-auto sm:w-[640px] w-full">
                    <div className="flex items-end gap-5">
                      <img
                        src={characterInfo?.images?.jpg?.image_url}
                        alt={characterInfo?.name}
                        className="sm:w-[195px] sm:h-[274px] w-[145px] h-[224px] object-cover rounded-md"
                      />

                      <div className="flex flex-col gap-2 !mb-2">
                        <p
                          className={`line-clamp-2 ${
                            characterInfo?.name
                              ? characterInfo?.name.length > 30
                                ? "sm:text-4xl text-2xl leading-8"
                                : "sm:text-3xl text-[28px] leading-9"
                              : "text-[28px] leading-9"
                          }`}
                        >
                          {characterInfo?.name || characterInfo?.nickname[0]}
                        </p>
                        <p className="sm:text-xl text-sm line-clamp-1">
                          {characterInfo?.name_kanji}
                        </p>

                        <div className="flex flex-col gap-2 !mt-4">
                          <p className="sm:text-default text-sm">
                            Voice Actors
                          </p>
                          <div className="flex gap-1 items-center">
                            {voiceActor?.length > 0 ? (
                              voiceActor.slice(0, 3).map((actor, index) => (
                                <button
                                  key={index}
                                  className="sm:w-9 sm:h-9 w-7 h-7 rounded-full overflow-hidden border-2 border-transparent hover:border-neonAqua transition-default cursor-pointer"
                                  title={actor.person.name}
                                >
                                  <img
                                    src={actor.person.images.jpg.image_url}
                                    alt={actor.person.name}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))
                            ) : (
                              <p className="text-white/50 text-sm italic">
                                No voice actors available.
                              </p>
                            )}

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="cursor-pointer">
                                  {voiceActor.length > 3 && (
                                    <div
                                      onClick={() =>
                                        document
                                          .getElementById("voice-actors-mobile")
                                          ?.scrollIntoView({
                                            behavior: "smooth",
                                          })
                                      }
                                      className="sm:w-9 sm:h-9 w-7 h-7 rounded-full flex items-center justify-center bg-transparent border-2 4xl:text-lg xl:text-default text-[10px] border-neonAqua hover:bg-neonAqua/10 transition-default cursor-pointer text-neonAqua font-semibold"
                                    >
                                      {`+${voiceActor.length - 3}`}
                                    </div>
                                  )}
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-[12px] py-[2px] px-1 tracking-wide">
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
                        <CharacterOverviewContent
                          characterOverview={characterInfo}
                          isExpanded={isExpanded}
                          setIsExpanded={setIsExpanded}
                          voiceActor={voiceActor}
                          charactersWrapperId="voice-actors-mobile"
                        />
                      ) : (
                        <div className="flex flex-col w-full bg-base/5 4xl:gap-10 gap-6 4xl:px-6 4xl:py-6 xl:p-5 xl:px-4 px-3 py-3 rounded-lg">
                          <ItemPills title="Information">
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
                                    <p className="!mb-1">
                                      {value.toLocaleString()}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          </ItemPills>

                          {animeography && animeography.length > 0 ? (
                            <>
                              <ItemPills title="Animeography">
                                <div className="flex flex-col 4xl:gap-4 gap-3">
                                  {animeography.map((item: any, index: any) => {
                                    return (
                                      <Link to={`/anime-overview?id=${item.anime.mal_id}`}
                                        key={index}
                                        className="z-40 tracking-wide group w-full bg-base/8 rounded-lg flex justify-start items-start gap-5 p-2 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                                      >
                                        <div className="w-full sm:max-w-20 max-w-16 sm:h-24 h-20 overflow-hidden rounded-sm">
                                          <img
                                            src={
                                              item.anime.images.jpg.image_url
                                            }
                                            alt={item.anime.title}
                                            className="object-cover object-top w-full h-full rounded-sm border-5 border-secondary/10"
                                          />
                                        </div>
                                        <div className="w-full flex flex-col justify-between">
                                          <p className="text-left 4xl:text-lg xl:text-default text-sm line-clamp-2">
                                            {item.anime.title}
                                          </p>
                                          <p className="text-left 4xl:text-lg xl:text-default text-sm !mt-1">
                                            Role: {item.role}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </ItemPills>

                              {characterInfo?.anime?.length > visibleCount && (
                                <Button
                                  colorType={"tertiary"}
                                  hasIcon={false}
                                  label="Load More"
                                  onClick={handleLoadMore}
                                  customClass="z-40 4xl:text-xl lg:text-default text-sm text-center w-full border-white/30 rounded-lg gap-5 4xl:py-4 py-3 px-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                                />
                              )}
                            </>
                          ) : (
                            <p className="text-white/50 4xl:text-lg xl:text-sm text-[12px] italic mt-2">
                              No anime roles found for this character.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="hidden lg:block">
                  <CharacterOverviewContent
                    characterOverview={characterInfo}
                    isExpanded={isExpanded}
                    setIsExpanded={setIsExpanded}
                    voiceActor={voiceActor}
                    charactersWrapperId="voice-actors"
                  />
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

export default CharacterInfo;
