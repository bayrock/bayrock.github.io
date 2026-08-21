// src/lib/lastfm.ts
export interface LastFmTrack {
  artist: string;
  track: string;
  trackUrl: string;
  album: string;
  image: string | null;
  timestamp: number;
}

export interface ScrobbleGroup {
  track: LastFmTrack;
  playCount: number;
}

const API_URL = "https://api.shojo.me/lastfm";

export async function getRecentTracks(limit = 25): Promise<ScrobbleGroup[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`lastfm fetch failed: ${res.status}`);
  const { tracks }: { tracks: LastFmTrack[] } = await res.json();

  const groups: ScrobbleGroup[] = [];
  for (const t of tracks) {
    const prev = groups.at(-1);
    if (prev && prev.track.artist === t.artist && prev.track.track === t.track) {
      prev.playCount++;
    } else {
      groups.push({ track: t, playCount: 1 });
    }
  }
  return groups.slice(0, limit);
}
