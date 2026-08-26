
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

export interface Tracks {
  songs: ScrobbleGroup[];
  timestamp: number
}

const API_URL = "https://api.shojo.me/lastfm";

export async function getRecentTracks(limit = 10): Promise<{songs: ScrobbleGroup[], timestamp: number}> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`lastfm fetch failed: ${res.status}`);
  const { tracks, timestamp }: { tracks: LastFmTrack[], timestamp: number } = await res.json();

  const songs: ScrobbleGroup[] = [];
  for (const t of tracks) {
    const prev = songs.at(-1);
    if (prev && prev.track.artist === t.artist && prev.track.track === t.track) {
      prev.playCount++;
    } else {
      songs.push({ track: t, playCount: 1 });
    }
  }

  return {songs: songs.slice(0, limit), timestamp};
}
