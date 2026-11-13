const html = document.documentElement;
html.dataset.theme = localStorage.getItem("theme") || "light";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  btn?.addEventListener("click", () => {
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
});