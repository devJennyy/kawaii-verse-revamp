import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

const SeasonalShowcase = () => {
  const seasonalAnime = [
    {
      id: "mitsuri",
      miniBackgroundImage: "/images/demon-slayer.jpeg",
      backgroundImage: "/images/demon-slayer.gif",
      soloCharacter: "/images/mitsuri.png",
    },
    {
      id: "luffy",
      miniBackgroundImage: "/images/one-piece.jpeg",
      backgroundImage: "/images/one-piece.gif",
      soloCharacter: "/images/luffy.png",
    },
    {
      id: "anya",
      miniBackgroundImage: "/images/spy-x-family.jpeg",
      backgroundImage: "/images/spy-x-family.gif",
      soloCharacter: "/images/anya.png",
    },
    {
      id: "power",
      miniBackgroundImage: "/images/chainsaw-man.png",
      backgroundImage: "/images/chainsaw-man.gif",
      soloCharacter: "/images/power.png",
    },
    {
      id: "mash-burnedead",
      miniBackgroundImage: "/images/magic-and-muscles.jpeg",
      backgroundImage: "/images/magic-and-muscles.gif",
      soloCharacter: "/images/mash-burnedead.png",
    },
    {
      id: "yuji",
      miniBackgroundImage: "/images/jujutsu-kaisen.jpg",
      backgroundImage: "/images/jujutsu-kaisen.gif",
      soloCharacter: "/images/yuji.png",
    },
    {
      id: "levi",
      miniBackgroundImage: "/images/attack-on-titan.jpg",
      backgroundImage: "/images/attack-on-titan.gif",
      soloCharacter: "/images/levi.png",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="absolute w-full h-[1000px] bg-[#181A20]"></div>
      <div className="w-[1940px] h-[1200px] relative flex items-center">
        {/* Banner */}
        <Swiper spaceBetween={50}>
          {seasonalAnime?.map((anime, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-[1940px] h-[1200px] relative flex justify-center items-center overflow-visible0">
                  <div
                    className={
                      anime.id === "mitsuri"
                        ? "absolute z-50 left-[12rem] h-[80rem] top-[-4rem] -rotate-6"
                        : anime.id === "mash-burnedead"
                        ? "absolute z-50 left-[25rem] h-[63rem] top-[4rem] rotate-2"
                        : anime.id === "anya"
                        ? "absolute z-50 left-[32.5rem] h-[60rem] top-[5rem]"
                        : anime.id === "power"
                        ? "absolute z-50 left-[29rem] h-[65rem] top-[4rem]"
                        : anime.id === "luffy"
                        ? "absolute z-50 left-[24rem] h-[70rem] top-0"
                        : anime.id === "levi"
                        ? "absolute z-50 left-[16rem] h-[55rem] top-[5rem] rotate-12"
                        : anime.id === "yuji"
                        ? "absolute z-50 left-[28rem] h-[65rem] top-[2rem]"
                        : "opacity-0"
                    }
                  >
                    <img
                      src={anime.soloCharacter}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>

                  {/* <div className="absolute z-50 left-[32rem] h-[60rem] top-[5rem] ">
                    <img
                      src={anime.soloCharacter}
                      alt=""
                      className="w-full h-full"
                    />
                  </div> */}
                  <div className="w-full h-[700px] relative">
                    {/* Left Trapezoid */}
                    <div className="absolute w-[850px] left-0 top-0 flex justify-center items-center">
                      <div
                        className="w-[830px] h-[570px] bg-white/90"
                        style={{
                          clipPath:
                            "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />

                      <div
                        className="absolute w-[810px] h-[555px]"
                        style={{
                          clipPath:
                            "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                          backgroundImage: `url(${anime.miniBackgroundImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "top",
                        }}
                      />

                      <div
                        className="absolute w-[830px] h-[570px] bg-white/60"
                        style={{
                          clipPath:
                            "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                        }}
                      />
                    </div>

                    {/* Right Trapezoid */}
                    <div className="absolute w-[1350px] right-0 bottom-0 flex justify-center items-center">
                      <div
                        className="w-[1345px] h-[565px] bg-white"
                        style={{
                          clipPath:
                            "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        className="w-[1325px] h-[550px] absolute"
                        style={{
                          clipPath:
                            "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                          backgroundImage: `url(${anime.backgroundImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />

                      <div
                        className="absolute w-[1320px] h-[550px] bg-main/10"
                        style={{
                          clipPath:
                            "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Text */}
        <div className="w-full h-[950px] absolute">
          <div className="absolute right-0 top-5 text-right flex flex-col gap-5">
            <p className="text-[5.5rem] uppercase text-neonAqua font-bold leading-none">
              04
            </p>
            <p className="text-3xl uppercase tracking-wide flex gap-2 font-medium">
              <span className="bg-neonAqua px-2 text-main">Seasonal</span>{" "}
              Watchlist
            </p>
          </div>
          <div className="absolute left-0 bottom-10 text-left flex flex-col gap-3 border-l-8 border-neonAqua pl-5">
            <p className="text-5xl uppercase">Demon Slayer</p>
            <p className="text-3xl uppercase tracking-wide opacity-50">
              Kimetsu no Yaiba 鬼滅の刃
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="absolute w-[2400px] flex justify-between 5xl:h-[150px] 4xl:h-[100px] 3xl:h-[89px] 2xl:h-[65px] h-[58px] transition-slow bg-transparent z-30">
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
