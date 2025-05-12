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
  const [page] = useState(1);
  const [topCharacters, setTopCharacters] = useState<any[]>([]);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  const fetchTopChars = () => {
    setIsLoading(true);
    Promise.all([
      axios.get(TOP_CHARACTERS.replace("{page}", page.toString()).replace("{q}", '')),
    ])
      .then(([charactersRes]) => {
        setTopCharacters(charactersRes.data.data);
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
        <Leaderboard characterData={topCharacters?.slice(0, 3)} />
        <FavoritesTable />
      </div>
    </section>
  );
};

export default Characters;
