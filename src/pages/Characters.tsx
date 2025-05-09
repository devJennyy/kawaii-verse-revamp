import FavoritesTable from "@/components/characters/FavoritesTable";
import Leaderboard from "@/components/characters/Leaderboard";
import LoadingStyle from "@/components/ui/LoadingStyle";
import { useState } from "react";

const Characters = () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  return (
    
    <section id="characters" className="w-full">
    {isLoading && <LoadingStyle />}
    <div
      className={`w-full !mx-auto lg:!my-30 !my-24 transition-slow ${
        isLoading
          ? "opacity-0"
          : "opacity-100 transition-opacity duration-500"
      }`}
    >
      <Leaderboard />
      <FavoritesTable />
    </div>
  </section>
  );
};

export default Characters;
