import getPlural from "./getPlural";
import getTimeRelative from "./getTimeRelative";

function getTimeString(s) {
    const { years, months, days, hours, minutes, seconds } = getTimeRelative(s);

    const yearsAgo = years > 0 ? getPlural("year", years) : "";
    const monthsAgo = months > 0 ? getPlural("month", months) : "";
    const weeksAgo = days > 6 ? getPlural("week", Math.floor(days / 7)) : "";
    const daysAgo = days > 0 ? getPlural("day", days) : "";
    const hoursAgo = hours > 0 ? getPlural("hour", hours) : "";
    const minutesAgo = minutes > 0 ? getPlural("minute", minutes) : "";
    const secondsAgo = seconds > 0 ? getPlural("second", seconds) : "";

    let timeAgo = "";
    if (secondsAgo) timeAgo = secondsAgo;
    if (minutesAgo) timeAgo = minutesAgo;
    if (hoursAgo) timeAgo = hoursAgo;
    if (daysAgo) timeAgo = daysAgo;
    if (weeksAgo) timeAgo = weeksAgo;
    if (monthsAgo) timeAgo = monthsAgo;
    if (yearsAgo) timeAgo = yearsAgo;

    return `${timeAgo} ago`;
}

export default getTimeString;
