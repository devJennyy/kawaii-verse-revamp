/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FavoritesTable = ({ searchKey, setSearchKey, handleSearch, topCharacters, page }: any) => {
  return (
    <div className="w-full 3xl:max-w-[1440px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] !mx-auto flex flex-col sm:gap-12 gap-5 xl:!mt-20 sm:!mt-14 !mt-8 3xl:px-0 lg:px-5 px-4">
      <div className="flex sm:gap-3 gap-2 xl:h-14 sm:h-12 h-10">
        <input
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          placeholder="Search Characters..."
          className="w-full h-full tracking-wide sm:pl-5 pl-4 xl:text-default text-sm border border-midnightNavy active:border-neonAqua focus:border-neonAqua xl:rounded-lg rounded-md outline-none transition-default"
        ></input>
        <div onClick={() => handleSearch()} className="w-fit sm:px-5 px-3 h-full bg-midnightNavy border border-midnightNavy hover:bg-neonAqua/10 hover:border-neonAqua active:bg-neonAqua/10 active:border-neonAqua transition-default xl:rounded-lg rounded-md flex justify-center items-center cursor-pointer">
          <FiSearch className="xl:text-2xl text-xl  text-neonAqua" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="4xl:text-3xl xl:text-2xl sm:text-xl tracking-wide">
          Most Favorited
        </p>

        {/* {tableData?.map((item, index) => {
            return (
              <div
                key={index}
                className={`${item.width} flex flex-col gap-3 w-full`}
              >
                {item.hasHeader && (
                  <div className="w-full 3xl:h-14 h-10 bg-midnightNavy flex justify-center items-center">
                    <p className="xl:text-lg text-sm text-neonAqua tracking-wide capitalize">
                      {item.title}
                    </p>
                  </div>
                )}

                {item.type === "rank" &&
                  item?.rank?.map((list, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full xl:h-[120px] h-[90px] bg-midnightNavy/10 flex justify-center items-center"
                      >
                        <p className="xl:text-3xl text-xl font-bold">
                          {list.rank}
                        </p>
                      </div>
                    );
                  })}

                {item.type === "character" &&
                  item?.character?.map((list, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full xl:h-[120px] h-[90px] bg-midnightNavy/10 flex justify-start items-center gap-5 py-4 px-5"
                      >
                        <img
                          src={list.image}
                          alt=""
                          className="xl:w-20 xl:h-20 w-14 h-14 object-cover rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="xl:text-xl text-default">
                            {list.englishName}
                          </p>
                          <p className="xl:text-defeault text-sm">
                            {list.japaneseName}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                {item.type === "favorites" &&
                  item?.favorites?.map((list, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full xl:h-[120px] h-[90px] bg-midnightNavy/10 flex justify-center items-center"
                      >
                        <p className="xl:text-xl text-lg font-bold">
                          {list.count}
                        </p>
                      </div>
                    );
                  })}

                {item.type === "animeography" &&
                  item?.animeography?.map((list, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full xl:h-[120px] h-[90px] bg-midnightNavy/10 flex flex-col justify-center items-center gap-2 px-5"
                      >
                        <a
                          href={list.href}
                          className="w-full xl:text-default text-sm truncate hover:underline underline-offset-4 hover:text-neonAqua transition-default"
                        >
                          {list.title}
                        </a>
                      </div>
                    );
                  })}

                {item.type === "mangaography" &&
                  item?.mangaography?.map((list, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full xl:h-[120px] h-[90px] bg-midnightNavy/10 flex flex-col justify-center items-center gap-2 px-5"
                      >
                        <a
                          href={list.href}
                          className="w-full xl:text-default text-sm truncate hover:underline underline-offset-4 hover:text-neonAqua transition-default"
                        >
                          {list.title}
                        </a>
                      </div>
                    );
                  })}
              </div>
            );
          })} */}

        {/* Header */}
        <div className="xl:!mt-7 !mt-4 w-full flex 3xl:h-14 h-10 transition-slow">
          <div className="w-full xl:max-w-32 lg:max-w-24 md:max-w-32 sm:max-w-24 max-w-16 h-full bg-midnightNavy flex justify-center items-center transition-slow">
            <p className="xl:text-lg text-sm text-neonAqua tracking-wide capitalize">
              Rank
            </p>
          </div>
          <div className="w-full h-full bg-midnightNavy flex lg:justify-center justify-start items-center px-5 transition-slow">
            <p className="xl:text-lg text-sm text-neonAqua tracking-wide capitalize">
              Character
            </p>
          </div>
          <div className="w-full md:max-w-48 sm:max-w-40 max-w-28 h-full bg-midnightNavy flex justify-center items-center transition-slow">
            <p className="xl:text-lg text-sm text-neonAqua tracking-wide capitalize">
              Favorites
            </p>
          </div>
          <div className="hidden w-full 2xl:max-w-72 xl:max-w-52 max-w-40 h-full bg-midnightNavy lg:flex justify-center items-center transition-slow">
            <p className="xl:text-lg text-sm text-neonAqua tracking-wide capitalize">
              Nickname
            </p>
          </div>
          <div className="hidden w-full 2xl:max-w-72 xl:max-w-52 max-w-40 h-full bg-midnightNavy lg:flex justify-center items-center transition-slow">
            <p className="xl:text-lg text-sm text-neonAqua tracking-wide capitalize">
              Affiliation
            </p>
          </div>
        </div>

        {topCharacters?.map((item: any, index: number) => {
          const isEven = index % 2 === 0;
          const baseBg = isEven ? "bg-midnightNavy/10" : "bg-midnightNavy/50";
          const hoverBg = isEven
            ? "hover:bg-midnightNavy/20"
            : "hover:bg-midnightNavy/60";
          const characterNumber = (page - 1) * 25 + (index + 1);

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`w-full flex gap-1 xl:h-[120px] h-[90px] ${baseBg} ${hoverBg} transition-colors duration-300`}
            >
              <Link to={`/character-info?id=${item.mal_id}`} className="w-full flex transition-slow">
                <div className="w-full xl:max-w-32 lg:max-w-24 md:max-w-32 sm:max-w-24 max-w-16 h-full flex justify-center items-center transition-slow">
                  <p className="xl:text-2xl text-xl text-secondary/50 tracking-wide capitalize font-bold">
                    {characterNumber}
                  </p>
                </div>
                <div className="w-full h-full flex justify-start items-center gap-5 py-4 px-5 transition-slow">
                  <img
                    src={item.images.webp.image_url}
                    alt={item.name}
                    className="xl:w-20 xl:h-20 sm:w-14 sm:h-14 w-10 h-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-default xl:text-xl whitespace-nowrap">
                      <span className="block xl:hidden">
                        {item.name.split(" ")[0]}
                      </span>
                      <span className="hidden xl:block whitespace-nowrap">{item.name}</span>
                    </p>

                    <p className="hidden sm:block xl:text-defeault text-sm whitespace-nowrap">
                      {item.name_kanji}
                    </p>
                  </div>
                </div>
                <div className="w-full md:max-w-48 sm:max-w-40 max-w-28 h-full flex justify-center items-center transition-slow">
                  <p className="xl:text-xl font-semibold">
                    {item.favorites.toLocaleString()}
                  </p>
                </div>
                <div className="w-full 2xl:max-w-72 xl:max-w-52 max-w-40 h-full hidden lg:flex flex-col justify-center items-center gap-2 px-5 transition-slow">
                  <p className="w-full text-center capitalize 3xl:text-lg text-default truncate">
                    {item.nicknames[0] || item.name}
                  </p>
                </div>
                <div className="w-full 2xl:max-w-72 xl:max-w-52 max-w-40 h-full hidden lg:flex flex-col justify-center items-center gap-2 px-5 transition-slow">
                  <p className="w-full text-center capitalize 3xl:text-lg text-default truncate">
                    {(() => {
                      const line = item.about
                        ?.split("\n")
                        .find(
                          (line: any) =>
                            line.startsWith("Affiliations:") ||
                            line.startsWith("Affiliation:") ||
                            line.startsWith("Occupation:")
                        );

                      if (!line) return null;

                      const value = line.replace(
                        /(Affiliations?|Occupation):\s*/,
                        ""
                      );
                      return value.split(",")[0].trim();
                    })()}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesTable;
