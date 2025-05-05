export const GET_TOP_ANIME = "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&limit=5";
export const NEWEST_SEASON = "https://api.jikan.moe/v4/seasons/now?filter=tv&order_by=start_date&sort=desc&limit=25&page={page}";
export const TOP_ANIME = "https://api.jikan.moe/v4/top/anime?type=tv&order_by=start_date&sort=desc&limit=25&page={page}";
export const LONG_WEEKEND_WATCHLIST = "https://api.jikan.moe/v4/anime?order_by=popularity&sort=asc&limit=7";
export const GET_OVERVIEW = "https://api.jikan.moe/v4/anime/{id}/full";
export const GET_CHARACTERS = "https://api.jikan.moe/v4/anime/{id}/characters";
export const SEARCH_ANIME = "https://api.jikan.moe/v4/anime?q={searchKey}"


export const getPopularMoviesUrl = (width: number): string => {
  let limit;
  if (width >= 2560) {
    limit = 14;
  } else if (width >= 1440) {
    limit = 12;
  } else {
    limit = 15;
  }

  return `https://api.jikan.moe/v4/top/anime?type=movie&order_by=start_date&sort=desc&limit=${limit}`;
};


export const seasonalAnime = [
  {
    id: "mitsuri",
    miniBackgroundImage: "/images/demon-slayer.jpeg",
    backgroundImage: "/images/demon-slayer.gif",
    soloCharacter: "/images/mitsuri.png",
    englishTitle: "Demon Slayer",
    japaneseTitle: "鬼滅の刃, Kimetsu no Yaiba",
    href: ""
  },
  {
    id: "luffy",
    miniBackgroundImage: "/images/one-piece.jpeg",
    backgroundImage: "/images/one-piece.gif",
    soloCharacter: "/images/luffy.png",
    englishTitle: "One Piece",
    japaneseTitle: "ワンピース, Wan Pīsu",
    href: ""
  },
  {
    id: "anya",
    miniBackgroundImage: "/images/spy-x-family.jpeg",
    backgroundImage: "/images/spy-x-family.gif",
    soloCharacter: "/images/anya.png",
    englishTitle: "Spy X Family",
    japaneseTitle: "スパイファミリー, Supai Famirī",
    href: ""
  },
  {
    id: "power",
    miniBackgroundImage: "/images/chainsaw-man.png",
    backgroundImage: "/images/chainsaw-man.gif",
    soloCharacter: "/images/power.png",
    englishTitle: "Chainsaw Man",
    japaneseTitle: "チェンソーマン, Chensōman",
    href: ""
  },
  {
    id: "mash-burnedead",
    miniBackgroundImage: "/images/magic-and-muscles.jpeg",
    backgroundImage: "/images/magic-and-muscles.gif",
    soloCharacter: "/images/mash-burnedead.png",
    englishTitle: "Magic & Muscles",
    japaneseTitle: "マッシュル, Mashle",
    href: ""
  },
  {
    id: "yuji",
    miniBackgroundImage: "/images/jujutsu-kaisen.jpg",
    backgroundImage: "/images/jujutsu-kaisen.gif",
    soloCharacter: "/images/yuji.png",
    englishTitle: "Sorcery Battle",
    japaneseTitle: "呪術廻戦, Jujutsu Kaisen",
    href: ""
  },
  {
    id: "levi",
    miniBackgroundImage: "/images/attack-on-titan.jpg",
    backgroundImage: "/images/attack-on-titan.gif",
    soloCharacter: "/images/levi.png",
    englishTitle: "Attack on Titan",
    japaneseTitle: "進撃の巨人, Shingeki no Kyojin",
    href: ""
  },
];

  