import FilterSortPanel from '@/components/layout/FilterSortPanel'
import AnimeGallery from '@/components/shared/AnimeGallery'

const NewestSeason = () => {
  return (
    <div id="movies" className="w-full max-w-[1920px] !mx-auto !my-48">
      <FilterSortPanel title={{ highlighted: "Newest", normal: "Season" }} />
      <AnimeGallery type={"newest-season"} />
    </div>
  )
}

export default NewestSeason
