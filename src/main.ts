// import "./style.css";
// /* Some variables for adding and removing content */
// const newContent =
//   "This is some new content<br><br><br><br>Look! The height changed!";
// let content = "";

// /** This is the main content in this fiddle.
//  *  The ResizeObserver will invoke the callback when any of those
//  *. elements' dimensions change. `entries` contains all elements being observed
//  *  https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
//  */
// const childElementObserver = new ResizeObserver((entries) => {
//   if (!entries) return;
//   const child = entries[0]; // Can observe multiple elements but we are only using this observer for one (childElement)
//   const parent = document.querySelector("#parentElement") as HTMLDivElement;
//   parent.style.height = `${child.contentRect.height}px`;
// });

// const child = document.querySelector("#childElement") as HTMLDivElement;
// childElementObserver.observe(child); // Observing the child element

// /* Listeners for the buttons to add or remove content so the child container resizes */
// function moreContent() {
//   content = content + newContent;
//   child.innerHTML = content;
//   console.log("MORE", content);
// }

// function lessContent() {
//   content = content.slice(0, content.length - newContent.length);
//   child.innerHTML = content;
//   console.log("LESS", content);
// }

// const moreContentButton = document.getElementById(
//   "more-content"
// ) as HTMLButtonElement;
// moreContentButton.addEventListener("click", moreContent);

// const lessContentButton = document.getElementById(
//   "less-content"
// ) as HTMLButtonElement;
// lessContentButton.addEventListener("click", lessContent);

import "./B";

const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  alert("Hello click from button");
});

window.addEventListener("click", () => {
  alert("Hello click!");
});
