import FilterSortPanel from "@/components/layout/FilterSortPanel";
import AnimeGallery from "@/components/shared/AnimeGallery";
import LoadingStyle from "@/components/ui/LoadingStyle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Popular = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Popularity");
  const [mediaType, setMediaType] = useState("All");
  const navigate = useNavigate();
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  useEffect(() => {
      if(sortBy === "Newest"){
        navigate("/newest-season");
      }
    }, [sortBy])

  return (
    <section id="popular" className="w-full">
      {isLoading && <LoadingStyle />}
      <div
        className={`w-full 4xl:max-w-[1920px] max-w-[1280px] !mx-auto xl:!mt-16 lg:!mt-10 !mt-5 !py-10 lg:px-5 px-4 transition-slow ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <FilterSortPanel mediaType={mediaType} setMediaType={setMediaType} sortBy={sortBy} setSortBy={setSortBy} title={{ highlighted: "Popular", normal: "Anime" }} />
        <AnimeGallery mediaType={mediaType} type={"popular"} />
      </div>
    </section>
  );
};

export default Popular;
