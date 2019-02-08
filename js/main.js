const projectSummary = document.querySelector(".project-summary");
const projectSummary2 = document.querySelector(".project-summary-2");
const requirements = document.querySelector(".requirements-list");
const bundles = document.querySelector(".bundles");

document.querySelector(".requirements").addEventListener("click", e => {
  const clicked = e.target;
  clicked.classList.add("active");
  if (clicked.id === "bundle") {
    document.getElementById("requirements").classList.remove("active");
    projectSummary.classList.add("d-0");
    requirements.classList.add("d-0");
    projectSummary2.classList.remove("d-0");
    bundles.classList.remove("d-0");
  } else if (clicked.id === "requirements") {
    document.getElementById("bundle").classList.remove("active");
    projectSummary.classList.remove("d-0");
    requirements.classList.remove("d-0");
    projectSummary2.classList.add("d-0");
    bundles.classList.add("d-0");
  }
});
