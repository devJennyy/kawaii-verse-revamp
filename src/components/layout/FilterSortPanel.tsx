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
import { useState } from "react";
// import { FaList } from "react-icons/fa";
// import { BsGridFill } from "react-icons/bs";
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
};

const FilterSortPanel = ({
  title = { highlighted: "Highlighted", normal: "Normal" },
  isSearch = false,
  searchKeyword,
  setSearchKeyword,
  searchFunction,
  isSearchPage = false,
}: FilterSortPanelProps) => {
  // const [active, setActive] = useState<"grid" | "list">("grid");
  const [mediaType, setMediaType] = useState("default");

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
              {/* Sorting */}
              <Select>
                <SelectTrigger className="lg:w-[180px] sm:w-[130px] w-[90px]">
                  <SelectValue placeholder="Newest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>

              {/* Filter */}
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
                <SelectContent className="lg:!mr-0 !mr-1">
                  <SelectGroup className="!m-1">
                    <SelectLabel>Media</SelectLabel>
                    <SelectSeparator />
                    <RadioGroup
                      value={mediaType}
                      onValueChange={(value) => setMediaType(value)}
                      className="!mt-3 !ml-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="media-all" />
                        <Label htmlFor="media-all">All</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="media-series" />
                        <Label htmlFor="media-series">Series</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="media-movies" />
                        <Label htmlFor="media-movies">Movies</Label>
                      </div>
                    </RadioGroup>
                  </SelectGroup>

                  <SelectGroup className="!m-1 !mt-5">
                    <SelectLabel>Status</SelectLabel>
                    <SelectSeparator />
                    <RadioGroup defaultValue="default" className="!mt-3 !ml-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="default"
                          id="status-all"
                          disabled={mediaType === "compact"}
                        />
                        <Label
                          htmlFor="status-all"
                          className={
                            mediaType === "compact"
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }
                        >
                          All
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="comfortable"
                          id="status-current"
                          disabled={mediaType === "compact"}
                        />
                        <Label
                          htmlFor="status-current"
                          className={
                            mediaType === "compact"
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }
                        >
                          Currently Airing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="compact"
                          id="status-finished"
                          disabled={mediaType === "compact"}
                        />
                        <Label
                          htmlFor="status-finished"
                          className={
                            mediaType === "compact"
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }
                        >
                          Finished Airing
                        </Label>
                      </div>
                    </RadioGroup>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Layout Toggle */}
              {/* <div className="!ml-1 flex justify-between items-center border w-[95px] rounded-sm border-base/20 overflow-hidden p-[5px]">
                <button
                  onClick={() => setActive("grid")}
                  className={`w-1/2 h-full flex justify-center items-center cursor-pointer rounded-[4px] hover:text-base transition-default ${
                    active === "grid" ? "bg-base/10" : "text-base/70"
                  }`}
                >
                  <BsGridFill size={18} />
                </button>
                <button
                  onClick={() => setActive("list")}
                  className={`w-1/2 h-full flex justify-center items-center cursor-pointer rounded-[4px] hover:text-base transition-default ${
                    active === "list" ? "bg-base/10" : "text-base/70"
                  }`}
                >
                  <FaList size={18} />
                </button>
              </div> */}
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
                    console.log("SSSS");
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
            {/* Sorting */}
            <Select>
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

            {/* Layout Toggle */}
            {/* <div className="!ml-1 flex justify-between items-center border lg:w-[95px] sm:w-[80px] w-[60px] rounded-sm border-base/20 overflow-hidden lg:p-[5px] p-1">
              <button
                onClick={() => setActive("grid")}
                className={`w-1/2 h-full flex justify-center items-center cursor-pointer rounded-[4px] hover:text-base transition-default ${
                  active === "grid" ? "bg-base/10" : "text-base/70"
                }`}
              >
                <BsGridFill className="sm:text-lg text-sm" />
              </button>
              <button
                onClick={() => setActive("list")}
                className={`w-1/2 h-full flex justify-center items-center cursor-pointer rounded-[4px] hover:text-base transition-default ${
                  active === "list" ? "bg-base/10" : "text-base/70"
                }`}
              >
                <FaList className="sm:text-lg text-sm" />
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSortPanel;
