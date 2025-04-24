import Hero from "@/components/home/Hero";
import SeasonalShowcase from "@/components/home/SeasonalShowcase";
import AnimeShowcase from "@/components/shared/AnimeShowcase";
import LoadingStyle from "@/components/ui/LoadingStyle";
import { useState } from "react";

const Homepage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <section className="w-full">
      {isLoading && <LoadingStyle />}

      <div
        className={`${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <Hero />
        <div className="3xl:!mt-[-8rem] !mt-[-5rem]">
          <AnimeShowcase type={"newest-season"} delay={2000} />
          <AnimeShowcase type={"top-anime"} delay={3000} />
          <SeasonalShowcase />
          <AnimeShowcase type={"movies"} delay={5000} />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
