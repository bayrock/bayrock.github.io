import type { AnimeEntry } from './getRecentAnime';

function escapeHTML(str: string) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]!));
}

export function renderAnime(entry: AnimeEntry): string {
  const statusClass = entry.status === 'Watching' ? 'badge--watching' : 'badge--planned';
  const showProgress = entry.episodesTotal > 1;

  return `
    <li class="anime">
      <img class="anime__art" src="${entry.image ?? '/icons/square.svg'}" alt="${escapeHTML(entry.title)} cover" loading="lazy" width="42" height="60" />
      <div class="anime__meta">
        <a class="link anime__title invert-white" href="${entry.url}" target="_blank" rel="noopener">${escapeHTML(entry.title)}</a>
        <small class="gray">${escapeHTML(entry.type)}</small>
      </div>
      <div class="anime__right">
        <span class="badge badge--item ${statusClass}">${escapeHTML(entry.status)}</span>
        ${showProgress ? `<small class="gray anime__progress">${entry.episodesWatched}/${entry.episodesTotal} eps</small>` : ''}
      </div>
    </li>
  `;
}
