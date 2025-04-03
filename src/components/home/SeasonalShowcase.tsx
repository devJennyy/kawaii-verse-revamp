/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

const SeasonalShowcase = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [seasonalAnime, setSeasonalAnime] = useState<any[]>([]);
  const fetchSeasonalAnime = () => {
    setLoading(true);
    axios
      .get("SEASONAL_ANIME")
      .then((res) => {
        setSeasonalAnime(res.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log("Oops! something went wrong", err);
      });
  };

  useEffect(() => {
    fetchSeasonalAnime();
  }, []);

  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="absolute w-full h-[1000px] bg-[#181A20]"></div>
      <div className="w-[1940px] h-[1200px] relative flex items-center">
        {/* Banner */}
        <Swiper>
          {seasonalAnime?.map((anime, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-[1940px] h-[1200px] relative flex justify-center items-center overflow-visible0">
                  <div className="absolute z-50 left-[12rem] h-[80rem] top-[-4rem] -rotate-6 ">
                    <img
                      src="/images/mitsuri.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full h-[700px] relative">
                    {/* Left Trapezoid */}
                    <div className="absolute w-[850px] left-0 top-0 flex justify-center items-center">
                      <div
                        className="w-[830px] h-[570px] bg-white/30"
                        style={{
                          clipPath:
                            "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />

                      <div
                        className="absolute w-[800px] h-[550px]"
                        style={{
                          clipPath:
                            "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                          backgroundImage: `url(${anime.images.jpg.large_image_url})`,
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
                        className="w-[1320px] h-[550px] absolute"
                        style={{
                          clipPath:
                            "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                          backgroundImage: `url(${anime.images.jpg.large_image_url})`,
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
          <SwiperSlide>
            <div className="w-[1940px] h-[1200px] relative flex justify-center items-center overflow-visible0">
              <div className="absolute z-50 left-[12rem] h-[80rem] top-[-4rem] -rotate-6 ">
                <img
                  src="/images/mitsuri.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="w-full h-[700px] relative">
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

                  <div
                    className="absolute w-[800px] h-[550px]"
                    style={{
                      clipPath: "polygon(0% 0%, 0% 100%, 67% 100%, 100% 0%)",
                      backgroundImage: "url('/images/demon-slayer.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                  />

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

                  <div
                    className="absolute w-[1320px] h-[550px] bg-main/10"
                    style={{
                      clipPath: "polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
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
