import FilterSortPanel from "@/components/layout/FilterSortPanel";

const Movies = () => {
  return (
    <div id="movies" className="w-full max-w-[1920px] !mx-auto !my-48">
      <FilterSortPanel />
      {/* <AnimeGallery type={"movies"} /> */}
    </div>
  );
};

export default Movies;
