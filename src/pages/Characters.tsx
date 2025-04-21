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
      className={`w-full max-w-[1920px] !mx-auto !my-48 ${
        isLoading
          ? "opacity-0"
          : "opacity-100 transition-opacity duration-500"
      }`}
    >
      <p className="text-white text-[5rem]">Currently Work In Progress!</p>
    </div>
  </section>
  );
};

export default Characters;
