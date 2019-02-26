const tags = [
  "Design",
  "iOS",
  "Web",
  "3 Pages",
  "3D",
  "Sketch",
  "UI/UX",
  "Marketting",
  "Profiles",
  "Hybrid",
  "Location",
  "Algorithm",
  "Payments",
  "In App Pur.",
  "Coding",
  "Search",
  "Logo",
  "Android",
  "Coding",
  "Gaming",
  "Sprite"
];

const tagWrapper = document.querySelector(".tags");

tags.forEach(tag => {
  const button = document.createElement("button");
  button.setAttribute("class", "tag d-f justify-content-c align-items-c");
  button.setAttribute("draggable", "true");
  button.setAttribute("ondragstart", "dragstart(event)");
  button.appendChild(document.createTextNode(tag));

  tagWrapper.appendChild(button);
});
