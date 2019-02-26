function dragstart(e) {
  e.dataTransfer.setData("text/plain", "True");
  e.dataTransfer.dropEffect = "move";
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  const text = e.target.querySelector("p");
  const icon = e.target.querySelector("img");
  if (text) text.classList.add("d-0");
  if (icon) icon.classList.remove("d-0");
}

function dragleave(e) {
  const text = e.target.querySelector("p");
  const icon = e.target.querySelector("img");
  if (text) text.classList.remove("d-0");
  if (icon) icon.classList.add("d-0");
}

function drop(e) {
  e.preventDefault();
  console.log("dropped");
}
