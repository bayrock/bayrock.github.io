
function getTimeRelative(ts: number) {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    const diffMin = Math.round((ts - Date.now()) / 60000);
    if (Math.abs(diffMin) < 60) return rtf.format(diffMin, 'minute');
    const diffHr = Math.round(diffMin / 60);
    if (Math.abs(diffHr) < 24) return rtf.format(diffHr, 'hour');
    return rtf.format(Math.round(diffHr / 24), 'day');
}

export default getTimeRelative;
