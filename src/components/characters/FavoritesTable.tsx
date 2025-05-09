import { tableData } from "@/constants/tableData";
import { FiSearch } from "react-icons/fi";

const FavoritesTable = () => {
  return (
    <div className="w-full 3xl:max-w-[1440px] max-w-[1280px] !mx-auto flex flex-col gap-12 xl:!mt-20 !mt-14 3xl:px-0 lg:px-5 px-4">
      <div className="flex gap-3 xl:h-14 h-12">
        <input
          placeholder="Search Characters..."
          className="w-full h-full tracking-wide pl-5 xl:text-default text-sm border border-midnightNavy active:border-neonAqua focus:border-neonAqua xl:rounded-lg rounded-md outline-none transition-default"
        ></input>
        <div className="w-fit px-5 h-full bg-midnightNavy border border-midnightNavy hover:bg-neonAqua/10 hover:border-neonAqua transition-default xl:rounded-lg rounded-md flex justify-center items-center cursor-pointer">
          <FiSearch className="xl:text-2xl text-xl  text-neonAqua" />
        </div>
      </div>

      <div className="flex flex-col xl:gap-8 gap-5">
        <p className="4xl:text-3xl xl:text-2xl sm:text-xl tracking-wide">
          Most Favorited
        </p>

        <div className="hidden lg:flex gap-1 w-full">
          {tableData?.map((item, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default FavoritesTable;
