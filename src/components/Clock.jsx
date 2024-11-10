import { createSignal, onCleanup } from "solid-js";

function Clock() {
  const [time, setTime] = createSignal(getESTTime());

  function getESTTime() {
    const now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/New_York",
    }).format(now);
  }

  const interval = setInterval(() => setTime(getESTTime()), 1000);
  onCleanup(() => clearInterval(interval));

  return (
    <Show when={time()} fallback={<small>00:00</small>}>
      <small>{time()}</small>
    </Show>
  );
}

export default Clock;
