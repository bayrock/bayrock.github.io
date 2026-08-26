export interface LetterboxdFilm {
  title: string;
  year: number;
  url: string;
  watchedDate: string;
  rewatch: boolean;
  rating: number;
  liked: boolean;
  tmdbId: number;
  image: string | null;
  timestamp: number;
}

const API_URL = "https://api.shojo.me/letterboxd";

export async function getRecentFilms(limit = 10): Promise<{ films: LetterboxdFilm[]; timestamp: number }> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`letterboxd fetch failed: ${res.status}`);
  const { films, timestamp }: { films: LetterboxdFilm[]; timestamp: number } = await res.json();

  return { films: films.slice(0, limit), timestamp };
}
