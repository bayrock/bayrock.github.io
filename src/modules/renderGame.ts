import type { SteamGame } from './getRecentGames';
import { minutesToHours } from './getTimeConversion';

function escapeHTML(str: string) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]!));
}

export function renderGame(game: SteamGame): string {
  const capsule = game.image ?? `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appId}/header.jpg`;
  const totalHours = Math.round(minutesToHours(game.playtime));
  const recentHours = Math.round(minutesToHours(game.playtimeRecent) * 10) / 10;
  const storeUrl = `https://store.steampowered.com/app/${game.appId}`;

  return `
    <li class="game">
      <a href="${storeUrl}" target="_blank" rel="noopener">
        <img class="game__art" src="${capsule}" alt="${escapeHTML(game.name)} capsule art" loading="lazy" width="120" height="56" onerror="this.onerror=null;this.src='/icons/square.svg';" />
      </a>
      <div class="game__meta">
        <a class="link game__title invert-white" href="${storeUrl}" target="_blank" rel="noopener">${escapeHTML(game.name)}</a>
        <small class="gray">${totalHours} hrs total</small>
        ${game.playtimeRecent > 0 ? `<span class="badge badge--item">${recentHours} hrs / 2wk</span>` : ''}
      </div>
    </li>
  `;
}
