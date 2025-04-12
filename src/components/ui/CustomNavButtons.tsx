import { RefObject } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper as SwiperType } from "swiper";

type NavButtonsProps = {
  swiperRef: RefObject<SwiperType | null>;
};

const CustomNavButtons = ({ swiperRef }: NavButtonsProps) => {
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="flex 5xl:gap-9 4xl:gap-6 3xl:gap-4 gap-3 5xl:h-[150px] 4xl:h-[100px] 3xl:h-[80px] 2xl:h-[65px] h-[58px] transition-slow">
      <button
        onClick={handlePrev}
        className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[80px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow"
      >
        <FiChevronLeft className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
      </button>
      <button
        onClick={handleNext}
        className="5xl:w-[150px] 4xl:w-[100px] 3xl:w-[80px] 2xl:w-[65px] w-[58px] h-full flex justify-center items-center rounded-full 5xl:border-3 4xl:border-2 border hover:bg-secondaryBase/20 bg-white/10 cursor-pointer transition-slow"
      >
        <FiChevronRight className="5xl:text-[55px] 4xl:text-[36px] 3xl:text-[32px] text-[23px]" />
      </button>
    </div>
  );
};

export default CustomNavButtons;
