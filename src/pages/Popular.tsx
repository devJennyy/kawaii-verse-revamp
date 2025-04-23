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
        className={`lg:block hidden w-full 4xl:max-w-[1920px] max-w-[1280px] !mx-auto 4xl:!my-48 !my-36 px-5 transition-slow ${
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
