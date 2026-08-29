import type { Anime } from './getRecentAnime';
import escapeHTML from './escapeHTML';

export function renderAnime(anime: Anime): string {
  const statusClass = anime.status === 'Watching' ? 'badge--watching' : 'badge--planned';
  const showProgress = anime.episodesTotal > 1;

  return `
    <li class="anime">
      <img class="anime__art ${anime.image || 'invert-black'}" src="${anime.image || '/icons/square.svg'}" alt="${escapeHTML(anime.title)} cover" loading="lazy" width="42" height="60" />
      <div class="anime__meta">
        <a class="link anime__title invert-white" href="${anime.url}" target="_blank" rel="noopener">${escapeHTML(anime.title)}</a>
        <small class="gray">${escapeHTML(anime.type)}</small>
      </div>
      <div class="anime__right">
        <span class="badge badge--item ${statusClass}">${escapeHTML(anime.status)}</span>
        ${showProgress ? `<small class="gray anime__progress">${anime.episodesWatched}/${anime.episodesTotal} eps</small>` : ''}
      </div>
    </li>
  `;
}
