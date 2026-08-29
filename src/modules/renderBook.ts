import type { Book } from './getRecentBooks';
import { getBookLabel, isActivelyReading } from './getBookLabel';
import escapeHTML from './escapeHTML';

export function renderBook(book: Book): string {
  const label = getBookLabel(book);
  const statusClass = isActivelyReading(book) ? 'badge--watching' : 'badge--planned';
  const stars = book.rating !== null
    ? `<small class="gray">${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}</small>`
    : '';

  return `
    <li class="book">
      <a href="${book.bookUrl}" target="_blank" rel="noopener">
        <img class="book__cover ${book.image || 'invert-black'}" src="${book.image || '/icons/square.svg'}" alt="${escapeHTML(book.title)} cover" loading="lazy" width="50" height="75" />
      </a>
      <div class="book__meta">
        <a class="link book__title invert-white" href="${book.bookUrl}" target="_blank" rel="noopener">${escapeHTML(book.title)}</a>
        <small class="gray">${escapeHTML(book.author)}</small>
        <div class="book__right">
          <span class="badge badge--item ${statusClass}">${escapeHTML(label)}</span>
          ${stars}
        </div>
      </div>
    </li>
  `;
}
