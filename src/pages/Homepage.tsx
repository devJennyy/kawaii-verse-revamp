import Hero from "@/components/home/Hero";
import SeasonalShowcase from "@/components/home/SeasonalShowcase";
import AnimeShowcase from "@/components/shared/AnimeShowcase";

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="3xl:!mt-[-8rem] !mt-[-5rem]">
        <AnimeShowcase type={"newest-season"} delay={2000}/>
        <AnimeShowcase type={"top-anime"} delay={3000}/>
        <SeasonalShowcase />
        <AnimeShowcase type={"movies"} delay={4000}/>
      </div>
    </>
  );
};

export default Homepage;
