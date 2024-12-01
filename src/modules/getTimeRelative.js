import { secondsToMilliseconds } from "./getTimeConversion";

function getTimeRelative(s) {
    const clock = new Date(secondsToMilliseconds(s))
    .toISOString()
    .slice(0, 19)
    .replace("T", ":")
    .replace(/-/g, ":")
    .split(":");

    const time = {
        years: Number(clock[0]) - 1970,
        months: Number(clock[1]) - 1,
        days: Number(clock[2]) - 1,
        hours: Number(clock[3]),
        minutes: Number(clock[4]),
        seconds: Number(clock[5])
    };

    return time;
}

export default getTimeRelative;
