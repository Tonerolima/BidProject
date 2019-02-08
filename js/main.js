const projectSummary = document.querySelector(".project-summary");
const projectSummary2 = document.querySelector(".project-summary-2");
const requirements = document.querySelector(".requirements-list");
const bundles = document.querySelector(".bundles");
const bundleToggle = document.getElementById("bundle");
const requirementsToggle = document.getElementById("requirements");

const show = elements => {
  elements.forEach(elem => {
    elem.classList.remove("d-0");
  });
};

const hide = elements => {
  elements.forEach(elem => {
    elem.classList.add("d-0");
  });
};

const setActive = (elem, option) => {
  if (option === "add") {
    elem.classList.add("active");
  } else {
    elem.classList.remove("active");
  }
};

document.querySelector(".requirements").addEventListener("click", e => {
  const clicked = e.target;
  clicked.classList.add("active");
  if (clicked.id === "bundle") {
    hide([projectSummary, requirements]);
    show([projectSummary2, bundles]);
    setActive(bundleToggle, "add");
    setActive(requirementsToggle, "remove");
  } else if (clicked.id === "requirements") {
    show([projectSummary, requirements]);
    hide([projectSummary2, bundles]);
    setActive(requirementsToggle, "add");
    setActive(bundleToggle, "remove");
  }
});
