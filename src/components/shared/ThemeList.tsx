import {
    FaPlayCircle,
    FaSoundcloud,
    FaSpotify,
    FaYoutube,
  } from "react-icons/fa";
  import { SiApplemusic } from "react-icons/si";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  
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
  
  const ThemeList = ({ themes, label }: ThemeListProps) => {
    if (!themes || themes.length === 0) return null;
  
    return (
      <div className="flex flex-col gap-6 mt-6">
        <h2 className="text-xl font-bold text-left">{label}</h2>
  
        {themes.map((theme, index) => {
          const cleanedQuery = theme
            .replace(/^(\d+: )?/, "")
            .replace(/\s?\(eps.*\)$/, "");
          const searchUrls = getSearchUrls(cleanedQuery);
  
          return (
            <div key={index} className="flex flex-col gap-2">
              <Dialog>
                <DialogTrigger>
                  <div className="group w-full bg-base/8 rounded-lg flex justify-start items-center gap-5 p-4 cursor-pointer hover:text-neonAqua hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua transition-default">
                    <div className="w-full max-w-7">
                      <FaPlayCircle className="w-full h-full" />
                    </div>
                    <p className="text-left">{theme}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-main px-8 scale-115">
                  <DialogHeader>
                    <DialogTitle className="text-base text-lg !mt-2 pr-5">
                      {theme}
                    </DialogTitle>
                    <DialogDescription>
                      <div className="grid grid-cols-2 gap-4 !mt-5">
                        {platforms?.map(({ name, urlKey, Icon, color }) => (
                          <a
                            key={name}
                            href={searchUrls[urlKey as keyof typeof searchUrls]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-start items-center gap-2 text-base text-[16px] rounded-md px-3 py-3 bg-base/10 hover:bg-neonAqua/10 border border-transparent hover:border-neonAqua hover:text-neonAqua transition-default"
                          >
                            <Icon size={28} style={{ color }} />
                            <p>{name}</p>
                          </a>
                        ))}
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ThemeList;
  