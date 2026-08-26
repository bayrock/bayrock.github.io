// src/modules/getBookLabel.ts
import type { Book } from './getRecentBooks';

export function getBookLabel(book: Book): string {
  if (book.rating !== null) return 'rated';
  return book.status.replace(/^is\s+/, '');
}

export function isActivelyReading(book: Book): boolean {
  return book.status === 'is currently reading' || book.status === 'started reading';
}
