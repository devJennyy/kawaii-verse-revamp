import { socialButtons } from "@/constants/footerData";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center py-7 px-10 border-t border-base/10">
      <div className="flex md:flex-row flex-col justify-between items-center w-full text-[12px] sm:text-lg tracking-wider font-light sm:gap-0 gap-8">
        <p className="md:hidden mt-4">Designed & Developed by Jenny Pieloor</p>
        <div className="flex justify-between items-center w-full sm:mt-5 mt-0 font-medium">
          <button className="flex justify-start items-center sm:w-[230px] gap-[3px] hover:gap-[6px] duration-100 active:text-white/60 transition-default">
            <a href="https://github.com/devJennyy/kawaii-verse-revamp" target="_blank">
              Visit repository
            </a>
            <GoArrowUpRight className="md:!mt-[5px] text-[15px] sm:text-[24px]" />
          </button>
          <p className="md:block hidden">
            Designed & Developed by Jenny Pieloor <span className="text-neonAqua">Powered by Jikan API</span>
          </p>
          <div className="flex md:gap-3 gap-2">
            {socialButtons?.map(
              ({ url, id, icon: Icon, size, smSize, className }) => (
                <a
                  href={url}
                  target="_blank"
                  key={id}
                  className={`flex justify-center items-center ${className} rounded-full border hover:border-white/60 hover:text-white/60 active:scale-95 transition-default`}
                >
                  <Icon size={size} className="md:block hidden" />
                  <Icon size={smSize} className="md:hidden" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
