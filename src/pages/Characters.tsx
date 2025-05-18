/* eslint-disable @typescript-eslint/no-explicit-any */
import FavoritesTable from "@/components/characters/FavoritesTable";
import Leaderboard from "@/components/characters/Leaderboard";
import LoadingStyle from "@/components/ui/LoadingStyle";
import { TOP_CHARACTERS } from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [topCharacters, setTopCharacters] = useState<any[]>([]);
  const [top3Characters, setTop3Characters] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchChar, setSearchChar] = useState<boolean>(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  const fetchTopChars = () => {
    // setSearchChar(false);
    setIsLoading(true);

    if (!searchKey) {
      setSearchChar(false);
    }

    Promise.all([
      axios.get(TOP_CHARACTERS.replace("{page}", searchKey ? '1' : page.toString()).replace("{q}", searchKey ? `q=${searchKey}&` : "")),
    ])
      .then(([charactersRes]) => {
        setTopCharacters(charactersRes.data.data);
        if(page === 1 && !searchKey) {
          setTop3Characters(charactersRes.data.data.slice(0, 3));
        }
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 0);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }

  const handleSearch = () => {
    fetchTopChars();
    setSearchChar(true);
  }

  useEffect(() => {
    fetchTopChars();
  }, [page])

  return (
    <section id="characters" className="w-full">
      {isLoading && <LoadingStyle />}
      <div
        className={`w-full !mx-auto lg:!my-30 sm:!my-24 !my-45 transition-slow ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <Leaderboard characterData={top3Characters} />
        <FavoritesTable searchKey={searchKey} setSearchKey={setSearchKey} handleSearch={handleSearch} topCharacters={topCharacters} page={page} />
        {!searchChar && <div className="w-full flex justify-center items-center">
            {page > 1 && <button
            onClick={() => {
              setPage((prevPage) => prevPage - 1);
            }}
            className="bg-primary text-white px-4 py-2 rounded-lg mt-4 hover:bg-secondary transition-colors duration-300"
          >
            Prev
          </button>}

          <button
            onClick={() => {
              setPage((prevPage) => prevPage + 1);
            }}
            className="bg-primary text-white px-4 py-2 rounded-lg mt-4 hover:bg-secondary transition-colors duration-300"
          >
            Next
          </button>

        </div>}
      </div>
    </section>
  );
};

export default Characters;
