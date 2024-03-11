import "./angle.css";

const output = document.querySelector(".output") as HTMLHeadElement;

window.addEventListener("mousemove", (e) => {
  const w = window.innerWidth / 2;
  const h = window.innerHeight / 2;

  const x = e.clientX;
  const y = e.clientY;

  const deltaX = w - x;
  const deltaY = h - y;

  const rad = Math.atan2(deltaY, deltaX);

  let deg = Math.round(rad * (180 / Math.PI));

  if (deg < 0) {
    deg = (deg + 360) % 360;
  }

  output.innerText = `${deg}°`;
});
