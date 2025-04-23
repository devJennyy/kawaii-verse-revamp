import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsGridFill } from "react-icons/bs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@radix-ui/react-select";
import { FaList } from "react-icons/fa";
import { useState } from "react";

type FilterSortPanelProps = {
  title?: {
    highlighted: string;
    normal: string;
  };
};

const FilterSortPanel = ({ title = { highlighted: "Highlighted", normal: "Normal" } }: FilterSortPanelProps) => {
  const [active, setActive] = useState<"grid" | "list">("grid");
  const [mediaType, setMediaType] = useState("default");

  return (
    <div className="flex flex-col gap-5 !my-12">
      <div className="w-full flex justify-between items-center">
        <p className="4xl:text-4xl text-3xl font-bold z-20 tracking-wide">
          <span className="text-neonAqua">{title.highlighted}</span> {title.normal}
        </p>
        <div className="flex gap-1">
          {/* Sorting */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Newest</SelectItem>
              <SelectItem value="dark">Popularity</SelectItem>
            </SelectContent>
          </Select>

          {/* Filter */}
          <Select>
            <SelectSeparator />
            <SelectTrigger variant="secondary" className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
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
                      className={mediaType === "compact" ? "opacity-50 cursor-not-allowed" : ""}
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
                      className={mediaType === "compact" ? "opacity-50 cursor-not-allowed" : ""}
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
                      className={mediaType === "compact" ? "opacity-50 cursor-not-allowed" : ""}
                    >
                      Finished Airing
                    </Label>
                  </div>
                </RadioGroup>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Layout Toggle */}
          <div className="!ml-1 flex justify-between items-center border w-[95px] rounded-sm border-base/20 overflow-hidden p-[5px]">
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
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-32 border-2 border-neonAqua rounded-full"></div>
        <div className="w-full h-[2px] bg-base/10"></div>
      </div>
    </div>
  );
};

export default FilterSortPanel;
