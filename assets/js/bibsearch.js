import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("bibsearch");
  if (!input) return;

  const filterItems = (value) => {
    const searchTerm = value.trim().toLowerCase();
    // textContent includes authors inside collapsed details elements.
    document.querySelectorAll(".bibliography > li").forEach((entry) => {
      const text = entry.textContent.replace(/\s+/g, " ").toLowerCase();
      entry.classList.toggle("unloaded", !text.includes(searchTerm));
    });

    document.querySelectorAll("ol.bibliography").forEach((list) => {
      const empty = !list.querySelector(":scope > li:not(.unloaded)");
      list.classList.toggle("unloaded", empty);
      const heading = list.previousElementSibling;
      if (heading?.matches("h2.bibliography, h3.bibliography")) {
        heading.classList.toggle("unloaded", empty);
      }
    });

    document.querySelectorAll(".publication-section").forEach((section) => {
      section.hidden = !section.querySelector(".bibliography > li:not(.unloaded)");
    });

    const noResults = document.getElementById("publication-no-results");
    if (noResults) noResults.hidden = Boolean(document.querySelector(".bibliography > li:not(.unloaded)"));

    if (window.CSS?.highlights) {
      highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li:not(.unloaded)" });
    }
  };

  const updateFromHash = () => {
    try {
      input.value = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      input.value = "";
    }
    filterItems(input.value);
  };

  let timeoutId;
  input.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => filterItems(input.value), 300);
  });
  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();
});
