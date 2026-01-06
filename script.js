document.querySelectorAll("[data-tooltip]").forEach(el => {
  const tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.innerText = el.getAttribute("data-tooltip");
  el.appendChild(tooltip);

  el.addEventListener("mouseenter", () => {
    tooltip.classList.add("show");
  });

  el.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});
