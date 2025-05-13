/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ItemPills from "./ItemPills";
import Button from "./Button";

interface Props {
  characterOverview: any;
  isExpanded: boolean;
  setIsExpanded: any;
  voiceActor: any[];
}

const CharacterOverviewContent = ({
  characterOverview,
  isExpanded,
  setIsExpanded,
  voiceActor,
}: Props) => {
  const [visibleCount, setVisibleCount] = useState(15);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  const aboutText = characterOverview?.about?.trim() || "";
  const aboutParagraphs = aboutText.split(/\n\s*\n/); // split by double newlines (paragraphs)

  const isContentAvailable = Boolean(aboutText);
  const showSeeMoreButton = aboutParagraphs.length > 2;

  return (
    <div className="text-left flex flex-col 4xl:gap-14 2xl:gap-8 gap-6 relative">
      <div className="w-full flex flex-col gap-4 text-start bg-secondaryFill rounded-md">
        <div>
          {isContentAvailable ? (
            <p
              className={`tracking-wide leading-loose opacity-95 whitespace-pre-wrap ${
                aboutParagraphs.length < 2
                  ? "xl:text-2xl sm:text-xl text-default"
                  : "xl:text-lg sm:text-default text-sm"
              }`}
            >
              {(isExpanded
                ? aboutParagraphs
                : aboutParagraphs.slice(0, 2)
              ).join("\n\n")}
            </p>
          ) : (
            <p className="tracking-wide leading-loose text-white/50 4xl:text-lg xl:text-sm lg:text-[12px] text-sm italic">
              No details have been added for this anime.
            </p>
          )}

          {showSeeMoreButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-left italic mt-4"
              aria-expanded={isExpanded}
            >
              <p className="xl:text-lg sm:text-default text-sm transition-slow cursor-pointer hover:text-neonAqua hover:underline underline-offset-4">
                {isExpanded ? "See Less . ." : "See More . ."}
              </p>
            </button>
          )}
        </div>
      </div>

      <ItemPills title="Voice Actors">
        {voiceActor && voiceActor.length > 0 ? (
          <>
            <div className="grid 2xl:grid-cols-5 sm:grid-cols-4 grid-cols-3 4xl:gap-4 sm:gap-3 gap-2">
              {voiceActor.slice(0, visibleCount).map((actorData, index) => (
                <div
                  key={index}
                  className="w-full gap-5 lg:rounded-lg rounded-md 4xl:p-3 sm:p-2 p-1 overflow-hidden cursor-pointer bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default"
                >
                  <img
                    src={actorData?.person?.images?.jpg?.image_url}
                    alt={actorData?.person?.name}
                    className="w-full 4xl:h-[230px] xl:h-[175px] sm:h-[140px] h-[109px] object-cover sm:rounded-md rounded-sm"
                  />
                  <div className="flex flex-col 4xl:text-lg xl:text-default sm:text-sm text-[12px] sm:pt-2 pt-1 tracking-wide">
                    <p className="text-neonAqua font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                      {actorData?.person?.name}
                    </p>
                    <p className="opacity-60">{actorData?.language}</p>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < voiceActor.length && (
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

export default CharacterOverviewContent;
