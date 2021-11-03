const header = document.querySelector("header");

const text = document.querySelector(".text__explain");

const cursor = document.querySelector(".cursor");

function handleMenu() {
  let currentH = window.scrollY;
  const h2 = text.querySelector("h2");
  const h6 = text.querySelector("h6");
  let strong = document.createElement("strong");
  let strong2 = document.createElement("strong");
  let strong3 = document.createElement("strong");
  if (currentH > 100) {
    header.classList.add("scrollHeader");
  } else {
    header.classList.remove("scrollHeader");
  }
  console.log(window.scrollY);
  if (currentH < 4100) {
    text.classList.add("fixedTxt");
    text.classList.remove("stopTxt");
  } else {
    text.classList.remove("fixedTxt");
    text.classList.add("stopTxt");
  }

  if (currentH < 900) {
    h2.innerText =
      "Eyes rest from an afternoon in the sun. Smooth textures feel coolon bare feet and skin.";
    strong.innerText = "Kitsune sofa";
    strong2.innerText = "armchair";
    strong3.innerText = "I-O coffee table (steel base)";
    console.dir(strong);
    h6.innerHTML = `Featuring ${strong.outerHTML} , ${strong2.outerHTML} and ${strong3.outerHTML}`;
  } else if (currentH < 1800) {
    h2.innerText = "A sip of cocktail brings back memories of the beach.";
    strong.innerText = "Portobello armchair and foot stool (wood base)";
    h6.innerHTML = `Featuring ${strong.outerHTML}`;
  } else if (currentH < 2700) {
    h2.innerText =
      "Sunset is a good time to gather. Evening light bathes the space in warm tones and colours.";
    strong.innerText = "Copal sofa";
    strong2.innerText = "Fromage poufs";
    h6.innerHTML = `Featuring ${strong.outerHTML} and ${strong2.outerHTML}`;
  } else if (currentH < 3600) {
    h2.innerText =
      "The kitchen table is resplendent with local market treasures. Sit down together for a moment of escape.";
    strong.innerText = "Figura chairs";
    strong2.innerText = "Itamae table";
    h6.innerHTML = `Featuring ${strong.outerHTML} and ${strong2.outerHTML}`;
  } else if (currentH < 5000) {
    h2.innerText =
      "Morning coffee with a tropical twist. Unusual tastes surprise the senses.";
    strong.innerText = "Nuef daybed";
    h6.innerHTML = `Featuring ${strong.outerHTML}`;
  }
}

window.addEventListener("scroll", handleMenu);

window.addEventListener("mousemove", handleCursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function handleCursor(e) {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY - scrollY + "px";
}
