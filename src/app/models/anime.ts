export interface Anime {
  mal_id: number;
  url: string;
  approved: boolean;
  titles: {type: string; title: string}[];
  images: {
    jpg: { image_url: string; large_image_url: string; small_image_url: string; },
    jpeg: { image_url: string; large_image_url: string; small_image_url: string; },
  };
  title: string;
  type: string | "TV";
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
  };
  duration: string;
  rating: string;
  score: number;
  score_by: number;
  rank: number;
  popularity: number;
  synopsis: string;
  season: "fall" | "winter" | "spring" | "summer";
  genres: {mal_id: number; type: string; name: string; url: string}[];
  explicit_genres:  {mal_id: number; type: string; name: string; url: string}[];
  themes: {mal_id: number; type: string; name: string; url: string}[]
}