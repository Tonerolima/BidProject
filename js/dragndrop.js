var dragged;

function showPlusIcon(e) {
  const text = e.target.querySelector("p");
  const icon = e.target.querySelector("img");
  if (text) text.classList.add("d-0");
  if (icon) icon.classList.remove("d-0");
}
function hidePlusIcon(e) {
  const text = e.target.querySelector("p");
  const icon = e.target.querySelector("img");
  if (text) text.classList.remove("d-0");
  if (icon) icon.classList.add("d-0");
}

function dragstart(e) {
  dragged = e.target;
  e.dataTransfer.dropEffect = "move";
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  showPlusIcon(e);
}

function dragleave(e) {
  hidePlusIcon(e);
}

function drop(e) {
  e.preventDefault();
  hidePlusIcon(e);
  dragged.parentNode.removeChild(dragged);
  const count = e.target.querySelector(".task-count");
  const level = e.target.querySelector(".task-level");

  const value = Number(count.getAttribute("data-count"));
  count.setAttribute("data-count", `${Number(value + 1)}`);
  count.textContent = value + 1 !== 1 ? "Tasks" : "Task";
  level.textContent =
    value < 4
      ? "Complexity Level: Easy"
      : value < 8
      ? "Complexity Level: Moderate"
      : "Complexity Level: Hard";
}
