const s = 1000,
  m = s * 60,
  h = m * 60,
  d = h * 24,
  y = d * 365;

function counting() {
  const days = document.getElementById("days"),
    hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    timeNow = new Date().getTime(),
    setDate = new Date("05/05/2025").getTime(),
    diff = setDate - timeNow;

  days.innerText = Math.floor(diff / d);
  hours.innerText = Math.floor((diff % d) / h);
  minutes.innerText = Math.floor((diff % h) / m);
  seconds.innerText = Math.floor((diff % m) / s);
}
setInterval(() => {
  counting();
}, 1000);
