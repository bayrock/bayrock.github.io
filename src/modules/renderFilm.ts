import type { LetterboxdFilm } from './getRecentFilms';
import stripHTML from './stripHTML';

export function renderFilm(film: LetterboxdFilm): string {
  const starPercent = (film.rating / 5) * 100;

  return `
    <li class="film">
      <a href="${film.url}" target="_blank" rel="noopener">
        <img class="film__poster" src="${film.image ?? '/images/poster-placeholder.svg'}" alt="${stripHTML(film.title)} poster" loading="lazy" width="90" height="135" />
      </a>
      <div class="film__meta">
        <a class="link film__title invert-white" href="${film.url}" target="_blank" rel="noopener">${stripHTML(film.title)} <small class="gray">(${film.year})</small></a>
        <div class="film__rating" style="--rating: ${starPercent}%">
          <span class="film__rating-track">☆☆☆☆☆</span>
          <span class="film__rating-fill">★★★★★</span>
        </div>
        <div class="film__badges">
          ${film.rewatch ? `<span class="badge badge--item">rewatch</span>` : ''}
          ${film.liked ? `<span class="badge badge--item accent">♥ liked</span>` : ''}
        </div>
        <small class="gray film__date">${film.watchedDate}</small>
      </div>
    </li>
  `;
}
