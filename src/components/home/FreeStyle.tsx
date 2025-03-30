import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FreeStyle = () => {
  return (
    <div className="w-full h-[75rem] flex flex-col justify-center items-center relative bg-[#181A20]">
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
          <div className="absolute right-0 text-right flex flex-col gap-3 border-r-8 border-neonAqua pr-5">
            <p className="text-5xl uppercase">Demon Slayer</p>
            <p className="text-3xl uppercase tracking-wide opacity-50">
              Kimetsu no Yaiba 鬼滅の刃
            </p>
          </div>
          <div className="absolute left-0 bottom-[-1rem] text-left flex flex-col gap-3 border-l-8 border-neonAqua pl-5">
            <p className="text-5xl uppercase">Demon Slayer</p>
            <p className="text-3xl uppercase tracking-wide opacity-50">
              Kimetsu no Yaiba 鬼滅の刃
            </p>
          </div>
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="w-full flex justify-start items-end 5xl:h-[150px] 4xl:h-[100px] 3xl:h-[89px] 2xl:h-[65px] h-[58px] 5xl:gap-16 4xl:gap-13 3xl:gap-8 2xl:gap-7 gap-6 5xl:pr-30 pr-10 transition-slow z-40">
        <div className="flex 5xl:gap-9 4xl:gap-6 3xl:gap-4 gap-3 h-full transition-slow">
          <button className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[89px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow">
            <FiChevronLeft className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
          </button>
          <button className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[89px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow">
            <FiChevronRight className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
          </button>
        </div>
        <div className="h-full 5xl:w-[1437px] 4xl:w-[953px] 3xl:w-[723px] 2xl:w-[537px] w-[480px] flex justify-center items-center transition-slow">
          <div className="5xl:h-1 4xl:h-[3px] 3xl:h-[2px] h-[1px] w-full bg-white transition-slow"></div>
        </div>
        <p className="h-full 5xl:text-[124px] 4xl:text-[86px] 3xl:text-[64px] 2xl:text-[48px] text-[44px] font-bold flex items-center transition-slow text-neonAqua">
          04
        </p>
      </div>
    </div>
  );
};

export default FreeStyle;
