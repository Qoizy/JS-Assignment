const body = document.querySelector("body");

body.style.fontFamily = `"Comic Sans MS", cursive`;
body.style.fontStyle = "normal";
body.style.fontOpticalSizing = "auto";

const app = document.getElementById("app");

app.style.width = "100vw";
app.style.height = "100vh";
app.style.width = "100svw";
app.style.height = "100svh";
app.style.display = "flex";
app.style.justifyContent = "center";
app.style.alignItems = "center";
app.style.backgroundColor = "grey";

const parentDiv = document.createElement("div");

parentDiv.style.display = "flex";
parentDiv.style.flexDirection = "column";
parentDiv.style.gap = "0.2rem";
parentDiv.style.backgroundColor = "#f9f9f9";
parentDiv.style.padding = "0.6rem";
parentDiv.style.borderRadius = "0.5rem";

const spanTag1 = document.createElement("span");
const spanTag2 = document.createElement("span");

spanTag1.textContent = ` " `;
spanTag2.textContent = ` " `;

spanTag1.style.color = "blue";
spanTag2.style.color = "blue";
spanTag1.style.fontSize = "1.5rem";
spanTag2.style.fontSize = "1.5rem";

spanTag1.style.marginBottom = "-0.8rem";
spanTag2.style.marginBottom = "-0.2rem";

const pTag = document.createElement("p");

pTag.style.fontSize = "1.5rem";
pTag.textContent =
  "See you on the other side where will discuss events in JavaScript. May the force be with you.";

parentDiv.append(spanTag1);
parentDiv.append(pTag);
parentDiv.append(spanTag2);

app.append(parentDiv);
