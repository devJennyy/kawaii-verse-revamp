import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SeasonalShowcase = () => {
  return (
    <div className="w-full h-[68rem] flex flex-col justify-center items-center relative bg-[#181A20]">
      <div className="w-[1940px] h-[700px] absolute">
        <div className="w-full h-full relative">
          {/* Highlight Img */}
          <div className="absolute z-30 left-[12rem] h-[80rem] top-[-25rem] -rotate-6">
            <img src="/images/mitsuri.png" alt="" className="w-full h-full" />
          </div>
          {/* Left Trapezoid */}
          <div className="absolute w-[850px] left-0 top-0 flex justify-center items-center">
            <div
              className="w-[830px] h-[570px] bg-white/30"
              style={{
                clipPath: "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Blur Bg */}
            <div
              className="absolute w-[800px] h-[550px]"
              style={{
                clipPath: "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                backgroundImage: "url('/images/demon-slayer.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />

            {/* Overlay */}
            <div
              className="absolute w-[830px] h-[570px] bg-white/60"
              style={{
                clipPath: "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
              }}
            />
          </div>

          {/* Right Trapezoid */}
          <div className="absolute w-[1350px] right-0 bottom-0 flex justify-center items-center">
            <div
              className="w-[1345px] h-[565px] bg-white"
              style={{
                clipPath: "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="w-[1320px] h-[550px] absolute"
              style={{
                clipPath: "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                backgroundImage: "url('/images/demon-slayer.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Overlay */}
            <div
              className="absolute w-[1320px] h-[550px] bg-main/10"
              style={{
                clipPath: "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
              }}
            />
          </div>
          <div className="absolute right-0 top-[-9rem] text-right flex flex-col gap-3">
            <p className="text-[5rem] uppercase text-neonAqua font-bold leading-none">04</p>
            <p className="text-3xl uppercase tracking-wide flex gap-2 font-medium">
            <span className="bg-neonAqua px-2 text-main">Seasonal</span> Watchlist
            </p>
          </div>
          <div className="absolute left-0 bottom-[-2rem] text-left flex flex-col gap-3 border-l-8 border-neonAqua pl-5">
            <p className="text-5xl uppercase">Demon Slayer</p>
            <p className="text-3xl uppercase tracking-wide opacity-50">
              Kimetsu no Yaiba 鬼滅の刃
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
        <div className="w-full flex justify-between px-58 5xl:h-[150px] 4xl:h-[100px] 3xl:h-[89px] 2xl:h-[65px] h-[58px transition-slow">
          <button className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[89px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow">
            <FiChevronLeft className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
          </button>
          <button className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[89px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow">
            <FiChevronRight className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
          </button>
        </div>
       
    </div>
  );
};

export default SeasonalShowcase;
