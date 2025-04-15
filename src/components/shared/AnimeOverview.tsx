const AnimeOverview = () => {
  return (
    <div className="w-full flex justify-center relative !mb-20">
      <div className="w-full h-[945px] absolute overflow-hidden">
        <img
          src="/images/jujutsu-kaisen.jpg"
          alt=""
          className="w-full h-full object-cover object-top absolute inset-0 z-0 blur-[1px] scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      </div>
      <div className="w-3/6 z-30 !mt-[23rem]">
        <div className="w-full flex gap-20">
          {/* Right Content */}
          <div className="w-full max-w-[477px] flex flex-col gap-10">
            <img
              src="/images/chainsaw-man.png"
              alt=""
              className="w-full h-[707px] object-cover object-center rounded-xl"
            />

            <div className="flex flex-col gap-10 w-full bg-base/10 p-6 rounded-lg">
              <div className="flex flex-col items-start gap-4">
                <p className="text-xl">Favorites</p>
                <div className="w-full h-20 bg-white rounded-lg"></div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="text-xl">Details</p>
                <div className="w-full h-64 bg-white rounded-lg"></div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <p className="text-xl">Animeography</p>
                <div className="w-full h-32 bg-white rounded-lg"></div>
                <div className="w-full h-32 bg-white rounded-lg"></div>
                <div className="w-full h-32 bg-white rounded-lg"></div>
              </div>
            </div>
          </div>


          {/* Left Content */}
          <div className="w-full flex flex-col gap-26 !mt-20">
            {/* Top */}
            <div className="flex flex-col items-start">
              <p className="text-[90px]">The Chainsaw Man</p>
              <p className="text-2xl">
                Japanese Title, Tokyo Ghoul - 2014 - 24 mins
              </p>

              <div className="flex 4xl:gap-6 3xl:gap-4 gap-3 5xl:h-[130px] 4xl:h-[75px] 3xl:h-[64px] h-[44px] 5xl:!mt-12 4xl:!mt-10 !mt-6">
                <button className="5xl:px-36 4xl:px-20 3xl:px-18 px-12 w-fit h-full flex justify-center items-center 4xl:border-2 3xl:border-2 border border-neonAqua text-neonAqua rounded-full cursor-pointer hover:bg-neonAqua hover:text-main transition-default">
                  <p className="uppercase 5xl:text-[38px] 4xl:text-[20px] 3xl:text-lg text-sm font-normal">
                    Watch Now
                  </p>
                </button>
                <button className="w-[70px] bg-white rounded-full"></button>
                <button className="w-[70px] bg-white rounded-full"></button>
              </div>

              <div className="flex flex-col items-start gap-5 !mt-10">
                <p className="text-2xl">Authors</p>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-white"></div>
                  <div className="w-16 h-16 rounded-full bg-white"></div>
                  <div className="w-16 h-16 rounded-full bg-white"></div>
                  <div className="w-16 h-16 rounded-full bg-white"></div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="text-2xl text-left flex flex-col gap-20">
              <div className="flex flex-col gap-8">
                <p className="tracking-wide leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  does eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed does eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <div className="flex gap-4">
                  <div className="w-[100px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[150px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[120px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[120px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[150px] h-[47px] rounded-xl bg-white"></div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <p>Trailer</p>
                <div className="w-full h-[462px] bg-white rounded-2xl"></div>
              </div>

              <div className="flex flex-col gap-5">
                <p>Streaming</p>
                <div className="flex gap-4">
                  <div className="w-[100px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[150px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[120px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[120px] h-[47px] rounded-xl bg-white"></div>
                  <div className="w-[150px] h-[47px] rounded-xl bg-white"></div>
                </div>

                <div className="flex flex-col gap-5">
                  <p>Other Site</p>
                  <div className="flex gap-4">
                    <div className="w-[100px] h-[47px] rounded-xl bg-white"></div>
                    <div className="w-[150px] h-[47px] rounded-xl bg-white"></div>
                    <div className="w-[120px] h-[47px] rounded-xl bg-white"></div>
                    <div className="w-[120px] h-[47px] rounded-xl bg-white"></div>
                    <div className="w-[150px] h-[47px] rounded-xl bg-white"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <p>Characters</p>
                <div className="grid grid-cols-5 gap-5">
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] gap-5 rounded-xl bg-white"></div>
                  <div className="w-full h-[230px] rounded-xl bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeOverview;
