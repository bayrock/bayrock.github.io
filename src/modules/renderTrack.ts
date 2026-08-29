
import type { ScrobbleGroup } from './getRecentTracks';
import getTimeRelative from './getTimeRelative';

function escapeHTML(str: string) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]!));
}

export function renderTrack(group: ScrobbleGroup): string {
  const { track, playCount } = group;
  const art = track.image ?? '/icons/circle.svg';
  return `
    <li class="track">
      <img class="track__art circle invert-white" src="${art}" alt="${escapeHTML(track.album)} cover" loading="lazy" width="44" height="44" />
      <div class="track__meta">
        <a class="link track__title invert-white" href="${track.trackUrl}" target="_blank" rel="noopener">${escapeHTML(track.track)}</a>
        <small class="gray">${escapeHTML(track.artist)}</small>
      </div>
      <div class="track__right">
        ${playCount > 1 ? `<span class="badge badge--item">×${playCount}</span>` : ''}
        <time class="gray track__time" data-ts="${track.timestamp}">${getTimeRelative(track.timestamp)}</time>
      </div>
    </li>
  `;
}
