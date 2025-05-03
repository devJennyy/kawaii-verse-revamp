import FilterSortPanel from "@/components/layout/FilterSortPanel";
import AnimeGallery from "@/components/shared/AnimeGallery";
import LoadingStyle from "@/components/ui/LoadingStyle";
import { useState } from "react";

const NewestSeason = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <section id="new" className="w-full">
      {isLoading && <LoadingStyle />}
      <div
        className={`w-full 4xl:max-w-[1920px] max-w-[1280px] !mx-auto 4xl:!my-48 lg:!my-36 sm:!my-24 !my-20 lg:px-5 px-4 transition-slow ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <FilterSortPanel title={{ highlighted: "Newest", normal: "Season" }} />
        <AnimeGallery type={"newest-season"} />
      </div>
    </section>
  );
};

export default NewestSeason;
