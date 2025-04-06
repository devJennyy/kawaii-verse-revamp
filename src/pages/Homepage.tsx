import Hero from "@/components/home/Hero";
import SeasonalShowcase from "@/components/home/SeasonalShowcase";
import AnimeShowcase from "@/components/shared/AnimeShowcase";

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="3xl:!mt-[-8rem] !mt-[-5rem]">
        <AnimeShowcase type={"newest-season"} delay={1000}/>
        <AnimeShowcase type={"top-anime"} delay={1000}/>
        <SeasonalShowcase />
        <AnimeShowcase type={"movies"} delay={2000}/>
      </div>
    </>
  );
};

export default Homepage;
