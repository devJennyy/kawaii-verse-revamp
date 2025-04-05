import Hero from "@/components/home/Hero";
import SeasonalShowcase from "@/components/home/SeasonalShowcase";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AnimeShowcase from "@/components/shared/AnimeShowcase";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div>
        {/* <Hero /> */}
        <div className="flex flex-col gap-20 4xl:px-20 px-12 !mt-[-8rem] z-20 pb-48">
          {/* <AnimeShowcase type={"newest-season"} />
          <AnimeShowcase type={"top-anime"} /> */}
        </div>
        <SeasonalShowcase />
        <div className="flex flex-col gap-20 4xl:px-20 px-12 !mt-[-8rem] z-20 pt-56 pb-30">
          {/* <AnimeShowcase type={"movies"} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
