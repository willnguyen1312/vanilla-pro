import { GALA } from "./first";

console.log(GALA);

const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  console.log("Button clicked");
});
