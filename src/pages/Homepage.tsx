import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section>
        <Hero />
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
