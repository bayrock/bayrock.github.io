export interface SteamGame {
  appId: number;
  name: string;
  playtime: number;       // minutes, all-time
  playtimeRecent: number; // minutes, last 2 weeks
  image: string | null;
}

const API_URL = "https://api.shojo.me/steam";

export async function getRecentGames(limit = 10): Promise<{ games: SteamGame[]; timestamp: number }> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`steam fetch failed: ${res.status}`);
  const { games, timestamp }: { games: SteamGame[]; timestamp: number } = await res.json();

  const sorted = [...games].sort((a, b) => b.playtimeRecent - a.playtimeRecent);

  return { games: sorted.slice(0, limit), timestamp };
}
