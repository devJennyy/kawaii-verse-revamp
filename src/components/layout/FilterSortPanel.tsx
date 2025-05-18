/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@radix-ui/react-select";
import { FiSearch } from "react-icons/fi";

type FilterSortPanelProps = {
  title?: {
    highlighted: string;
    normal: string;
  };
  isSearch?: boolean;
  searchKeyword?: string;
  setSearchKeyword?: any;
  searchFunction?: any;
  isSearchPage?: boolean;
  sortBy?: string;
  setSortBy?: any;
  mediaType?: string;
  setMediaType?: any;
};

const FilterSortPanel = ({
  title = { highlighted: "Highlighted", normal: "Normal" },
  isSearch = false,
  searchKeyword,
  setSearchKeyword,
  searchFunction,
  isSearchPage = false,
  sortBy,
  setSortBy,
  mediaType,
  setMediaType,
}: FilterSortPanelProps) => {
  return (
    <div className="flex flex-col lg:gap-5 sm:gap-4 gap-[14px] lg:!my-8 sm:!my-6 !my-5">
      {!isSearch ? (
        <>
          <div className="w-full flex justify-between items-center">
            <p className="4xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold z-20 tracking-wide">
              <span className="text-neonAqua">{title.highlighted}</span>{" "}
              {title.normal}
            </p>
            <div className="flex gap-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="lg:w-[180px] sm:w-[130px] w-[90px]">
                  <SelectValue placeholder="Newest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Newest">Newest</SelectItem>
                  <SelectItem value="Popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectSeparator />
                <SelectTrigger
                  variant="secondary"
                  className="lg:w-[180px] w-[40px]"
                >
                  <div className="lg:block hidden">
                    <SelectValue placeholder="Filter" />
                  </div>
                </SelectTrigger>
                <SelectContent className="lg:!mr-0 !mr-1 p-1">
                  <SelectGroup className="!m-1">
                    <SelectLabel>Media</SelectLabel>
                    <SelectSeparator />
                    <RadioGroup
                      value={mediaType}
                      onValueChange={(value) => setMediaType(value)}
                      className="!mt-3 !ml-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="All" id="media-all" />
                        <Label htmlFor="media-all">All</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Series" id="media-series" />
                        <Label htmlFor="media-series">Series</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Movies" id="media-movies" />
                        <Label htmlFor="media-movies">Movies</Label>
                      </div>
                    </RadioGroup>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-32 lg:border-2 border border-neonAqua rounded-full"></div>
            <div className="w-full lg:h-[2px] h-[1px] bg-base/10"></div>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-between items-center gap-2">
          <div className="w-full transition-slow flex justify-center items-center gap-3 border border-base/20 lg:px-3 lg:py-3 sm:px-2 sm:py-2 py-[7px] px-2 lg:text-sm text-[12px] rounded-sm focus-within:outline outline-neonAqua transition-default group">
            <FiSearch className="text-secondaryBase transition-slow group-focus-within:text-neonAqua text-xl" />
            {isSearchPage ? (
              <>
                <input
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      searchFunction();
                    }
                  }}
                  placeholder="Search anime series or movies"
                  className="w-full text-secondaryBase transition-slow outline-none tracking-wide"
                />
              </>
            ) : (
              <input
                placeholder="Search anime series or movies"
                className="w-full text-secondaryBase transition-slow outline-none tracking-wide"
              />
            )}
          </div>
          <div className="flex gap-1">
            <Select value={mediaType} onValueChange={setMediaType}>
              <SelectTrigger className="lg:w-[180px] sm:w-[130px] w-[40px] py-[9px]">
                <div className="sm:block hidden">
                  <SelectValue placeholder="All" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="series">Series</SelectItem>
                <SelectItem value="movies">Movies</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSortPanel;
