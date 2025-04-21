import FilterSortPanel from "@/components/layout/FilterSortPanel";
import AnimeGallery from "@/components/shared/AnimeGallery";

const Popular = () => {
  return (
    <div id="movies" className="w-full max-w-[1920px] !mx-auto !my-48">
      <FilterSortPanel title={{ highlighted: "Popular", normal: "Anime" }} />
      <AnimeGallery type={"popular"} />
    </div>
  );
};

export default Popular;
