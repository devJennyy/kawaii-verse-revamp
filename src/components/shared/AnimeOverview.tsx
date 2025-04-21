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

        setIsLoading(false);
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
      {isLoading && (
        <div className="!my-48 text-[5rem]">Waiting for data...</div>
      )}

      {animeOverview ? (
        <>
          <div className="w-full h-[945px] absolute overflow-hidden">
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
          <div className="w-4/7 z-30 !mt-[23rem]">
            <div className="w-full flex gap-20">
              {/* Left Content */}
              <div className="w-full max-w-[477px] flex flex-col gap-10">
                <div className="bg-base/5 rounded-xl overflow-hidden">
                  <img
                    src={animeOverview?.images?.jpg?.large_image_url}
                    alt={animeOverview?.title}
                    className="w-full h-[707px] object-cover object-center rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-10 w-full bg-base/5 p-6 rounded-lg">
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-xl">Statistics</p>
                    <div className="w-full rounded-lg bg-base/8 p-5 text-xl flex flex-col gap-2">
                      {animeStats.map(({ label, value, className }, index) => (
                        <div
                          key={index}
                          className={`w-full flex justify-between ${
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
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-xl">Information</p>
                    <div className="w-full rounded-lg bg-base/8 p-5 text-xl flex flex-col gap-2">
                      {animeDetails.map(({ label, value }, index) => (
                        <div key={index} className="flex gap-2">
                          <p className="text-base/60">{label}:</p>
                          <p className="tracking-wide">{value || "N/A"}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ThemeList
                    themes={animeOverview?.theme?.openings || []}
                    label="Opening Themes"
                  />

                  <ThemeList
                    themes={animeOverview?.theme?.endings || []}
                    label="Ending Themes"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full flex flex-col !mt-14">
                {/* Top */}
                <div className="flex flex-col text-left leading-tight h-[35rem]">
                  <p
                    className={`${
                      animeOverview?.title_english
                        ? animeOverview?.title_english.length > 30
                          ? "text-[55px]"
                          : "text-[90px]"
                        : "text-[90px]"
                    }`}
                  >
                    {animeOverview?.title_english || animeOverview?.title}
                  </p>

                  <p
                    className={`${
                      animeOverview?.title_japanese?.length > 30
                        ? "text-[25px]"
                        : "text-[30px]"
                    } !mt-5`}
                  >
                    {animeOverview?.title_japanese}
                  </p>

                  <button className="5xl:h-[130px] 4xl:h-[75px] 3xl:h-[64px] h-[44px] 5xl:!mt-12 4xl:!mt-10 !mt-6 5xl:px-36 4xl:px-20 3xl:px-18 px-12 w-fit flex justify-center items-center 4xl:border-2 3xl:border-2 border text-main border-neonAqua rounded-full cursor-pointer bg-neonAqua hover:bg-neonAqua/10 hover:text-neonAqua transition-default">
                    <p className="uppercase 5xl:text-[38px] 4xl:text-[20px] 3xl:text-lg text-sm font-medium tracking-wide">
                      Watch Now
                    </p>
                  </button>

                  <div className="flex flex-col items-start gap-5 !mt-14">
                    <p className="text-2xl">Main Characters</p>
                    <div className="flex gap-4 items-center">
                      {visibleCharacters.map((charData) => (
                        <button
                          key={charData.character.mal_id}
                          className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent hover:border-neonAqua transition-default cursor-pointer"
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
                                className="w-16 h-16 rounded-full flex items-center justify-center bg-transparent border-2 text-lg  border-neonAqua hover:bg-neonAqua/10 transition-default cursor-pointer text-neonAqua font-semibold "
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
                <div className="text-2xl text-left flex flex-col gap-14">
                  <div className="flex flex-col gap-8">
                    <p
                      className={`tracking-wide leading-loose opacity-95 ${
                        animeOverview?.synopsis &&
                        animeOverview.synopsis.length < 120
                          ? "text-3xl"
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
                  </div>

                  <>
                    {animeOverview?.trailer?.embed_url && (
                      <div className="w-full rounded-xl overflow-hidden aspect-video mt-4">
                        <iframe
                          className="w-full h-full"
                          src={`${animeOverview.trailer.embed_url}`}
                          title="Anime Trailer"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}

                    <ItemPills
                      title="Watch Online"
                      items={[
                        ...(animeOverview.external || []),
                        ...(animeOverview.trailer?.url
                          ? [
                              {
                                name: "Trailer on YouTube",
                                url: animeOverview.trailer.url,
                              },
                            ]
                          : []),
                        ...(animeOverview.url
                          ? [{ name: "MyAnimeList", url: animeOverview.url }]
                          : []),
                      ]}
                      isClickable
                      onClick={(url) => window.open(url, "_blank")}
                    />
                  </>

                  <div className="flex flex-col gap-8">
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
                  </div>

                  <div
                    id="characters"
                    className="flex flex-col gap-5 scroll-mt-24"
                  >
                    <p>Characters</p>
                    <div className="grid grid-cols-5 gap-5">
                      {characters?.map((charData, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full bg gap-5 rounded-xl p-3 overflow-hidden cursor-pointer bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                          >
                            <img
                              src={charData?.character?.images?.jpg?.image_url}
                              alt={charData?.character?.name}
                              className="w-full h-[240px] object-cover rounded-lg"
                            />
                            <div className="flex flex-col gap-1 text-[16px] pt-2 tracking-wide">
                              <p className="text-neonAqua font-semibold">
                                {charData?.character?.name}
                              </p>
                              <p>{charData?.role}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        !isLoading && (
          <div className="!my-48 text-[5rem]">
            Invalid Anime or No Anime Found!
          </div>
        )
      )}
    </div>
  );
};

export default AnimeOverview;
