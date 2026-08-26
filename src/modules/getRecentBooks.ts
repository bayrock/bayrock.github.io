export interface Book {
  guid: string;
  status: string;
  title: string;
  author: string;
  bookUrl: string;
  authorUrl: string | null;
  image: string | null;
  rating: number | null;
  reviewUrl: string;
  timestamp: number;
}

const API_URL = "https://api.shojo.me/goodreads";

export async function getRecentBooks(limit = 10): Promise<{ books: Book[]; timestamp: number }> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`goodreads fetch failed: ${res.status}`);
  const { books, timestamp }: { books: Book[]; timestamp: number } = await res.json();

  return { books: books.slice(0, limit), timestamp };
}
