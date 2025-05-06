import {
  FaPlayCircle,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SiApplemusic } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const getSearchUrls = (query: string) => {
  const encoded = encodeURIComponent(query);
  return {
    youtube: `https://www.youtube.com/results?search_query=${encoded}`,
    spotify: `https://open.spotify.com/search/${encoded}`,
    apple: `https://music.apple.com/us/search?term=${encoded}`,
    soundcloud: `https://soundcloud.com/search?q=${encoded}`,
  };
};

const platforms = [
  {
    name: "Spotify",
    urlKey: "spotify",
    Icon: FaSpotify,
    color: "#1DB954",
  },
  {
    name: "Youtube",
    urlKey: "youtube",
    Icon: FaYoutube,
    color: "#FF0000",
  },
  {
    name: "Apple Music",
    urlKey: "apple",
    Icon: SiApplemusic,
    color: "#FC3C44",
  },
  {
    name: "Sound Cloud",
    urlKey: "soundcloud",
    Icon: FaSoundcloud,
    color: "#FF7700",
  },
];

interface ThemeListProps {
  themes: string[];
  label: string;
}

const ThemeList = ({ themes }: ThemeListProps) => { 
  if (!themes || themes.length === 0) return null;

  return (
    <div className="flex flex-col 4xl:gap-4 gap-3">
      {themes.map((theme, index) => {
        const cleanedQuery = theme
          .replace(/^(\d+: )?/, "")
          .replace(/\s?\(eps.*\)$/, "");
        const searchUrls = getSearchUrls(cleanedQuery);

        return (
          <div key={index} className="flex flex-col gap-2">
            <Dialog>
              <DialogTrigger>
                <div className="group w-full bg-base/8 rounded-lg flex justify-start items-center gap-5 4xl:py-5 py-4 px-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default">
                  <div className="w-full max-w-7">
                    <FaPlayCircle className="w-full h-full" />
                  </div>
                  <div className="w-full h-6 relative overflow-hidden">
                    <motion.p
                      className="text-left 4xl:text-lg xl:text-default text-sm whitespace-nowrap absolute"
                      initial={{ x: "100%" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {theme}
                    </motion.p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-main p-5 scale-115">
                <DialogTitle className="tracking-wide text-left lg:text-default sm:text-sm text-[12px] text-white leading-relaxed sm:pr-10 pr-5">
                  {theme}
                </DialogTitle>
                <div className="grid grid-cols-2 4xl:gap-4 gap-2">
                  {platforms?.map(({ name, urlKey, Icon, color }) => (
                    <a
                      key={name}
                      href={searchUrls[urlKey as keyof typeof searchUrls]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-start items-center gap-2 text-base text-[16px] rounded-md px-3 4xl:py-3 lg:py-[10px] py-2 bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua hover:text-neonAqua transition-default"
                    >
                      <Icon
                        className="4xl:text-[28px] lg:text-2xl sm:text-xl"
                        style={{ color }}
                      />
                      <p className="4xl:text-default sm:text-sm text-[12px]">
                        {name}
                      </p>
                    </a>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        );
      })}
    </div>
  );
};

export default ThemeList;
