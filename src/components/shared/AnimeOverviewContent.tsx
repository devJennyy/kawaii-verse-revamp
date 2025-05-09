/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ItemPills from "./ItemPills";
import Button from "./Button";

interface Props {
  animeOverview: any;
  isExpanded: boolean;
  setIsExpanded: any;
  characters: any[];
}

const AnimeOverviewContent = ({
  animeOverview,
  isExpanded,
  setIsExpanded,
  characters,
}: Props) => {
  const [visibleCount, setVisibleCount] = useState(15);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  return (
    <div className="text-left flex flex-col 4xl:gap-14 2xl:gap-8 gap-6 relative">
      <div className="flex flex-col gap-1 lg:hidden">
        <p className="xl:text-2xl sm:text-xl text-lg tracking-wide">
          {animeOverview?.title_english || animeOverview?.title}
        </p>
        <p className="xl:text-lg sm:text-default text-sm">
          {animeOverview?.title_japanese}
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 text-start bg-secondaryFill rounded-md">
        <div
          className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
            isExpanded
              ? "max-h-[1000px]"
              : "4xl:max-h-[110px] sm:max-h-[100px] max-h-[90px]"
          }`}
        >
          {animeOverview?.synopsis?.trim() ? (
            <p
              className={`tracking-wide leading-loose opacity-95 ${
                animeOverview?.synopsis.length < 50
                  ? "xl:text-2xl sm:text-xl text-default"
                  : "xl:text-lg sm:text-default text-sm"
              }`}
            >
              {animeOverview.synopsis}
            </p>
          ) : (
            <p className="tracking-wide leading-loose text-white/50 4xl:text-lg xl:text-sm lg:text-[12px] text-sm italic">
              No synopsis has been added for this anime.
            </p>
          )}
        </div>

        {animeOverview?.synopsis?.length > 300 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-left italic"
            aria-expanded={isExpanded}
          >
            <p className="xl:text-lg sm:text-default text-sm transition-slow cursor-pointer hover:text-neonAqua hover:underline underline-offset-4">
              {isExpanded ? "See Less . ." : "See More . ."}
            </p>
          </button>
        )}
      </div>

      {animeOverview?.genres && animeOverview.genres.length > 0 ? (
        <ItemPills
          items={animeOverview.genres}
          isClickable
          onClick={(url) => window.open(url, "_blank")}
        />
      ) : (
        <ItemPills title="Genres">
          <p className="text-white/50 4xl:text-lg xl:text-sm lg:text-[12px] text-sm italic">
            No genres have been added for this anime.
          </p>
        </ItemPills>
      )}

      <ItemPills title="Trailer">
        {animeOverview?.trailer?.embed_url ? (
          <div className="w-full rounded-xl overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src={`${animeOverview.trailer.embed_url}&autoplay=1&mute=1`}
              title="Anime Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="text-white/50 4xl:text-lg xl:text-sm lg:text-[12px] text-sm italic">
            No trailer has been added for this anime.
          </p>
        )}
      </ItemPills>

      {animeOverview?.streaming && animeOverview.streaming.length > 0 ? (
        <ItemPills
          title="Streaming"
          items={animeOverview.streaming}
          isClickable
          onClick={(url) => window.open(url, "_blank")}
        />
      ) : (
        <ItemPills title="Streaming">
          <p className="text-white/50 4xl:text-lg xl:text-sm lg:text-[12px] text-sm italic">
            No streaming links have been added for this anime.
          </p>
        </ItemPills>
      )}

      {animeOverview?.external && animeOverview.external.length > 0 ? (
        <ItemPills
          title="Other Site"
          items={animeOverview.external}
          isClickable
          onClick={(url) => window.open(url, "_blank")}
        />
      ) : (
        <ItemPills title="Other Site">
          <p className="text-white/50 4xl:text-lg xl:text-sm lg:text-[12px] text-sm italic">
            No external links have been added for this anime.
          </p>
        </ItemPills>
      )}

      <ItemPills title="Characters">
        {characters && characters.length > 0 ? (
          <>
            <div className="grid 2xl:grid-cols-5 sm:grid-cols-4 grid-cols-3 4xl:gap-4 sm:gap-3 gap-2">
              {characters.slice(0, visibleCount).map((charData, index) => (
                <div
                  key={index}
                  className="w-full gap-5 lg:rounded-lg rounded-md 4xl:p-3 sm:p-2 p-1 overflow-hidden cursor-pointer bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                >
                  <img
                    src={charData?.character?.images?.jpg?.image_url}
                    alt={charData?.character?.name}
                    className="w-full 4xl:h-[230px] xl:h-[175px] sm:h-[140px] h-[109px] object-cover sm:rounded-md rounded-sm"
                  />
                  <div className="flex flex-col 4xl:text-lg xl:text-default sm:text-sm text-[12px] sm:pt-2 pt-1 tracking-wide">
                    <p className="text-neonAqua font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                      {charData?.character?.name}
                    </p>
                    <p className="opacity-60">{charData?.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < characters.length && (
              <Button
                colorType="tertiary"
                hasIcon={false}
                label="Load More"
                onClick={handleLoadMore}
                customClass="sm:!mt-12 !mt-10 !mx-auto cursor-pointer sm:px-12 sm:py-3 px-8 py-2 w-fit xl:text-xl sm:text-[12px] text-[10px] !my-2 font-medium text-neonAqua hover:bg-neonAqua/10 transition-default"
              />
            )}
          </>
        ) : (
          <p className="text-white/50 4xl:text-lg xl:text-sm lg:text-[12px] text-sm italic">
            No character data has been added for this anime.
          </p>
        )}
      </ItemPills>
    </div>
  );
};

export default AnimeOverviewContent;
