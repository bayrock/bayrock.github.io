export interface TypingBestEntry {
  acc: number;
  consistency: number;
  raw: number;
  wpm: number;
  language: string;
  timestamp: number;
}

export interface TypingKeyboard {
  model: string | null;
  switches: string | null;
  layout: string | null;
}

export interface TypingProfile {
  name: string | null;
  xp: number;
  keyboard: TypingKeyboard;
}

export interface TypingData {
  qwerty: {
    stats: { completedTests: number; startedTests: number; timeTyping: number };
    bests: { words?: Record<string, TypingBestEntry[]>; time?: Record<string, TypingBestEntry[]> };
    streak: number;
    maxStreak: number;
  };
  profile: TypingProfile;
  timestamp: number;
}

const API_URL = "https://api.shojo.me/monkeytype";

export async function getTypingStats(): Promise<TypingData> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`monkeytype fetch failed: ${res.status}`);
  return await res.json();
}
