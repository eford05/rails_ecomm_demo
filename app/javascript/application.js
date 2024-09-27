// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

const container = document.getElementById("container");
const overlayContainer = document.getElementById("overlay-container");
const overlayBtn = document.getElementById("overlay-btn");

overlayBtn.addEventListener("click", () => {
  container.classList.toggle("right-panel-active");
  overlayBtn.classList.remove("btn-scaled");
  window.requestAnimationFrame(() => {
    overlayBtn.classList.add("btn-scaled");
  });
});
