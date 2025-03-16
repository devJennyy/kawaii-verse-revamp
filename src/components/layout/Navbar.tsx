import { navLinks } from "@/constants/navLinks";
import { FiSearch } from "react-icons/fi";
import Button from "../shared/Button";
import { useEffect, useRef, useState } from "react";
import { PiDotsNineBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full sm:h-24 h-15 flex items-center 3xl:px-20 md:px-10 sm:px-8 px-5 border-b border-base/10">
      {/* Web Menu */}
      <div className="hidden w-full xl:flex items-center 3xl:gap-14 gap-5">
        <div className="3xl:!mr-0 !mr-5">
          <img src="/logo/logo-text.svg" alt="logo" />
        </div>

        <div className="w-full 3xl:max-w-[335px] max-w-[260px] h-fit flex justify-center items-center gap-3 border border-base/10 py-3 px-3 rounded-md focus-within:outline outline-neonAqua transition-default group">
          <FiSearch
            size={20}
            className="text-secondaryBase transition-default group-focus-within:text-neonAqua"
          />
          <input
            placeholder="Search anime series or movies"
            className="w-full text-secondaryBase text-sm outline-none"
          />
        </div>

        <ul className="flex justify-center items-center 3xl:gap-8 gap-2">
          {navLinks?.map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center px-6 py-2"
            >
              <a
                href={item.href}
                className="relative font-semibold tracking-wide after:content-[''] after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-neonAqua after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden xl:block">
        <Button colorType={"primary"} />
      </div>

      {/* Dark background overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={() => setShowMenu(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <div className="relative xl:hidden w-full flex justify-between items-center z-30">
        <img src="/logo/logo-text.svg" alt="logo" className="sm:block hidden" />
        <img src="/logo/logo.svg" alt="logo" className="sm:hidden w-6" />

        <div className="flex gap-4">
          <motion.div
            ref={searchRef}
            animate={{ width: isSearchVisible ? "240px" : "45px" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center border border-base/10 sm:py-3 sm:px-3 py-[6px] px-[14px] rounded-md cursor-pointer gap-2 overflow-hidden focus-within:outline outline-neonAqua transition-default"
            onClick={() => setIsSearchVisible(true)}
          >
            <FiSearch
              className={`sm:text-xl text-[16px] ${
                isSearchVisible ? "text-neonAqua" : "text-secondaryBase"
              } shrink-0`}
            />

            <motion.input
              type="text"
              placeholder="Search anime series or movies"
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isSearchVisible ? "100%" : 0,
                opacity: isSearchVisible ? 1 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-secondaryBase text-sm outline-none bg-transparent"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`transition-default ${showMenu ? "text-neonAqua" : ""}`}
          >
            <PiDotsNineBold className="sm:text-[2rem] text-2xl" />
          </button>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-15 right-0 bg-midnightNavy rounded-md p-3 flex flex-col justify-center items-start"
              >
                {navLinks?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full flex justify-start items-center text-neonAqua sm:px-3 sm:py-3 px-2 py-2 active:bg-neonAqua active:text-main focus:bg-neonAqua focus:text-main transition-default sm:rounded-md rounded-sm"
                    >
                      <a href={item.href}>
                        <p className="font-semibold tracking-wide sm:text-[16px] text-sm">
                          {item.label}
                        </p>
                      </a>
                    </li>
                  );
                })}

                <div className="sm:!mt-1 !mt-2">
                  <Button colorType={"secondary"} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
