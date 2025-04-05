import Hero from "@/components/home/Hero";
import SeasonalShowcase from "@/components/home/SeasonalShowcase";
import AnimeShowcase from "@/components/shared/AnimeShowcase";

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="!mt-[-8rem]">
        <AnimeShowcase type={"newest-season"} />
        <AnimeShowcase type={"top-anime"} />
        <SeasonalShowcase />
        <AnimeShowcase type={"movies"} />
      </div>
    </>
  );
};

export default Homepage;
