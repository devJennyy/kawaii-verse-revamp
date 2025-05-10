const Leaderboard = () => {
  return (
    <div className="w-full !mx-auto flex justify-center border-b border-base/10">
      <div className="w-full 3xl:max-w-[1440px] max-w-[1280px] flex justify-between items-end 3xl:px-0 lg:px-5 px-4 transition-slow">
        <img src="/images/rem.png" alt="rem-render" className="sm:block hidden opacity-60 3xl:h-[460px] xl:h-[400px] lg:h-[300px] md:h-[220px] h-[200px] transition-slow" />
        <div className="w-full 3xl:h-[180px] xl:h-[160px] lg:h-[140px] sm:h-[90px] h-[80px] bg-[#181D27] lg:rounded-t-4xl rounded-t-2xl flex justify-center items-end transition-slow">
          {/* Left */}
          <div className="w-full flex flex-col items-center">
            <div className="3xl:!mb-[-4rem] xl:!mb-[-3rem] lg:!mb-[-2.5rem] !mb-[-1.5rem] 3xl:border-5 border-3 border-neonAqua 3xl:w-[150px] 3xl:h-[150px] xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] rounded-full overflow-hidden transition-slow">
              <img
                src="/images/lelouch.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full 3xl:h-[180px] xl:h-[160px] lg:h-[140px] sm:h-[90px] h-[80px] lg:rounded-t-4xl rounded-t-2xl flex flex-col justify-end items-center 3xl:gap-2 lg:gap-1 transition-slow">
              <p className="3xl:text-xl xl:text-lg lg:text-default text-[12px] font-medium">Levi Ackerman</p>
              <p className="3xl:text-2xl xl:text-xl lg:text-lg text-[12px] font-bold text-neonAqua lg:!mb-8 sm:!mb-5 !mb-3">173,662</p>
            </div>
          </div>

          {/* Mid */}
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center sm:gap-3 gap-2 3xl:!mb-[-5rem] xl:!mb-[-4rem] lg:!mb-[-3.5rem] sm:!mb-[-2.5rem] !mb-[-1.8rem] z-30 transition-slow">
              <img
                src="/images/crown.svg"
                alt="crown"
                className="3xl:w-[60px] xl:w-[50px] lg:w-[35px] sm:w-[25px] w-[20px] h-full object-cover transition-slow"
              />
              <div className="3xl:border-5 border-3 border-neonAqua 3xl:w-[180px] 3xl:h-[180px] xl:w-[150px] xl:h-[150px] lg:w-[120px] lg:h-[120px] sm:w-[85px] sm:h-[85px] w-[75px] h-[75px] rounded-full overflow-hidden transition-slow">
                <img
                  src="/images/lelouch.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-full 3xl:h-[250px] xl:h-[220px] lg:h-[190px] sm:h-[130px] h-[110px] bg-[#1F2635] lg:rounded-t-4xl rounded-t-2xl flex flex-col justify-center items-center 3xl:gap-3 lg:gap-2 gap-1 transition-slow">
              <p className="3xl:text-xl xl:text-lg lg:text-default text-[12px] font-medium 3xl:!mt-18 lg:!mt-13 sm:!mt-8 !mt-6">Lamperouge, Lelouch</p>
              <p className="3xl:text-2xl xl:text-xl lg:text-lg text-[12px] font-bold text-neonAqua">173,662</p>
              <p className="3xl:text-lg xl:text-default lg:text-sm sm:text-[10px] text-[9px] font-normal tracking-wide">
                Top Most Favorite
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="w-full flex flex-col items-center">
            <div className="3xl:!mb-[-4rem] xl:!mb-[-3rem] lg:!mb-[-2.5rem] !mb-[-1.5rem] 3xl:border-5 border-3 border-neonAqua 3xl:w-[150px] 3xl:h-[150px] xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] rounded-full overflow-hidden transition-slow">
              <img
                src="/images/lelouch.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full 3xl:h-[180px] xl:h-[160px] lg:h-[140px] sm:h-[90px] h-[80px] lg:rounded-t-4xl rounded-t-2xl flex flex-col justify-end items-center 3xl:gap-2 lg:gap-1 transition-slow">
              <p className="3xl:text-xl xl:text-lg lg:text-default text-[12px] font-medium">Levi Ackerman</p>
              <p className="3xl:text-2xl xl:text-xl lg:text-lg text-[12px] font-bold text-neonAqua lg:!mb-8 sm:!mb-5 !mb-3">173,662</p>
            </div>
          </div>
        </div>
        <img src="/images/ram.png" alt="ram-render" className="sm:block hidden opacity-60 3xl:h-[460px] xl:h-[400px] lg:h-[300px] md:h-[220px] h-[200px] transition-slow" />
      </div>
    </div>
  );
};

export default Leaderboard;
