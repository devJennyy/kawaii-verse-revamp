import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSwiper } from "swiper/react";
import { useState, useEffect } from "react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const updateState = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateState);
    swiper.on("reachBeginning", () => setIsBeginning(true));
    swiper.on("reachEnd", () => setIsEnd(true));

    return () => {
      swiper.off("slideChange", updateState);
      swiper.off("reachBeginning");
      swiper.off("reachEnd");
    };
  }, [swiper]);

  return (
    <div className="swiper-nav-btns z-50 w-0">
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className="swiper-button-prev border rounded-full bg-main/50 disabled:opacity-0 disabled:cursor-not-allowed"
      >
        <FiChevronLeft size={24} className="text-white" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className="swiper-button-next border rounded-full bg-main/50 disabled:opacity-0 disabled:cursor-not-allowed"
      >
        <FiChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
