import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import NewestRelease from "./NewestRelease";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section>
        <Hero />
        <NewestRelease />
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
