export const GET_TOP_ANIME = "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&limit=5";
export const NEWEST_SEASON = "https://api.jikan.moe/v4/seasons/now?{type}order_by=start_date&sort=desc&limit=25&page={page}";
export const TOP_ANIME = "https://api.jikan.moe/v4/top/anime?{type}order_by=start_date&sort=desc&limit=25&page={page}";
export const LONG_WEEKEND_WATCHLIST = "https://api.jikan.moe/v4/anime?order_by=popularity&sort=asc&limit=7";
export const GET_OVERVIEW = "https://api.jikan.moe/v4/anime/{id}/full";
export const GET_CHARACTERS = "https://api.jikan.moe/v4/anime/{id}/characters";
export const SEARCH_ANIME = "https://api.jikan.moe/v4/anime?q={searchKey}{type}";
export const TOP_CHARACTERS = "https://api.jikan.moe/v4/characters?{q}order_by=favorites&sort=desc&page={page}";
export const GET_CHARACTER_INFO = "https://api.jikan.moe/v4/characters/{id}/full";
export const GET_CHARACTER_VOICE_ACTORS = "https://api.jikan.moe/v4/characters/{id}/voices";


export const getPopularMoviesUrl = (width: number): string => {
  let limit;
  if (width >= 2560) {
    limit = 14;
  } else if (width >= 1024) {
    limit = 15;
  } else {
    limit = 5;
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
    mal_id: "55701"
  },
  {
    id: "luffy",
    miniBackgroundImage: "/images/one-piece.jpeg",
    backgroundImage: "/images/one-piece.gif",
    soloCharacter: "/images/luffy.png",
    englishTitle: "One Piece",
    japaneseTitle: "ワンピース, Wan Pīsu",
    mal_id: "61393"
  },
  {
    id: "anya",
    miniBackgroundImage: "/images/spy-x-family.jpeg",
    backgroundImage: "/images/spy-x-family.gif",
    soloCharacter: "/images/anya.png",
    englishTitle: "Spy X Family",
    japaneseTitle: "スパイファミリー, Supai Famirī",
    mal_id: ""
  },
  {
    id: "power",
    miniBackgroundImage: "/images/chainsaw-man.png",
    backgroundImage: "/images/chainsaw-man.gif",
    soloCharacter: "/images/power.png",
    englishTitle: "Chainsaw Man",
    japaneseTitle: "チェンソーマン, Chensōman",
    mal_id: "59027"
  },
  {
    id: "mash-burnedead",
    miniBackgroundImage: "/images/magic-and-muscles.jpeg",
    backgroundImage: "/images/magic-and-muscles.gif",
    soloCharacter: "/images/mash-burnedead.png",
    englishTitle: "Magic & Muscles",
    japaneseTitle: "マッシュル, Mashle",
    mal_id: "55813"
  },
  {
    id: "yuji",
    miniBackgroundImage: "/images/jujutsu-kaisen.jpg",
    backgroundImage: "/images/jujutsu-kaisen.gif",
    soloCharacter: "/images/yuji.png",
    englishTitle: "Sorcery Battle",
    japaneseTitle: "呪術廻戦, Jujutsu Kaisen",
    mal_id: "59654"
  },
  {
    id: "levi",
    miniBackgroundImage: "/images/attack-on-titan.jpg",
    backgroundImage: "/images/attack-on-titan.gif",
    soloCharacter: "/images/levi.png",
    englishTitle: "Attack on Titan",
    japaneseTitle: "進撃の巨人, Shingeki no Kyojin",
    mal_id: "59571"
  },
];

  