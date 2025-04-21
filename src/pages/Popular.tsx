import FilterSortPanel from "@/components/layout/FilterSortPanel";
import AnimeGallery from "@/components/shared/AnimeGallery";
import LoadingStyle from "@/components/ui/LoadingStyle";
import { useState } from "react";

const Popular = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <section id="popular" className="w-full">
      {isLoading && <LoadingStyle />}
      <div
        className={`w-full max-w-[1920px] !mx-auto !my-48 ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <FilterSortPanel title={{ highlighted: "Popular", normal: "Anime" }} />
        <AnimeGallery type={"popular"} />
      </div>
    </section>
  );
};

export default Popular;
