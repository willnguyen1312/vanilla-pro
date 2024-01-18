import "./rotateCanvas.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const croppedImage = document.getElementById(
  "croppedImage",
) as HTMLImageElement;
const clockWise = document.getElementById("clockwise") as HTMLButtonElement;
const tab = document.getElementById("tab") as HTMLButtonElement;
const counterClockWise = document.getElementById(
  "counterclockwise",
) as HTMLButtonElement;
const ctx = canvas.getContext("2d");

let angleInDegrees = 0;

const image = document.createElement("img");
image.onload = function () {
  ctx!.drawImage(
    image,
    canvas.width / 2 - image.width / 2,
    canvas.height / 2 - image.width / 2,
  );
};
image.src = "/dog.jpeg";

clockWise.onclick = function () {
  angleInDegrees += 90;
  drawRotated(angleInDegrees);
};

counterClockWise.onclick = function () {
  angleInDegrees -= 90;
  drawRotated(angleInDegrees);
};

function drawRotated(degrees: number) {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((degrees * Math.PI) / 180);
  ctx.drawImage(image, -image.width / 2, -image.width / 2);

  const dataURL = canvas.toDataURL();

  croppedImage.src = dataURL;
  ctx.restore();
}

// You just can't do this in a sandboxed browser
tab.addEventListener("click", (event) => {
  // https://stackoverflow.com/questions/64040393/open-a-folder-in-vscode-through-finder-in-macos

  event.preventDefault();
  // Simulate a tab keypress
  const e = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    shiftKey: true,
    keyCode: 9,
  });
  event.target?.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
});
