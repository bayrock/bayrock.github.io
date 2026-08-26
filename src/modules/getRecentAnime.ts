export interface AnimeEntry {
  title: string;
  type: string;
  url: string;
  status: string;
  episodesWatched: number;
  episodesTotal: number;
  image: string | null;
  timestamp: number;
}

const API_URL = "https://api.shojo.me/myanimelist";

export async function getRecentAnime(limit = 10): Promise<{ anime: AnimeEntry[]; timestamp: number }> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`myanimelist fetch failed: ${res.status}`);
  const { anime, timestamp }: { anime: AnimeEntry[]; timestamp: number } = await res.json();

  return { anime: anime.slice(0, limit), timestamp };
}
