//script run with defer
document.getElementById("btnWin").addEventListener("click", openWin);

function openTab(ev) {
  console.log("open a tab");
  let win = window.open("tab.html", null);
  win.onload = (ev) => {
    win.document.body.style.backgroundColor = "#999";
    setTimeout(() => {
      win.close();
    }, 2500);
  };
}

function openWin(ev) {
  console.log("open a popup window");
  // let win = window.open(
  //   'win.html',
  //   null,
  //   'popup,width=400,height=400,left=300,top=500, noopener'
  // );
  let win = window.open(
    "",
    null,
    "popup,width=400,height=400,left=300,top=500"
  );
  win.document.write(
    "<html><head><title>Sample</title></head><body>Sample</body></html>"
  );
  // win.onload = () => {
  // let timmy = setInterval(() => {
  //   let w = Math.random() * parseInt(window.screen.availWidth);
  //   let h = Math.random() * parseInt(window.screen.availHeight);
  //   win.resizeTo(w, h);
  // }, 1000);

  // setTimeout(() => {
  //   clearInterval(timmy);
  //   win.close();
  // }, 6000);
  // };
}
