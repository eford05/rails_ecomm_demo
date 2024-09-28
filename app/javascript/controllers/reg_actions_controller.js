import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="reg-actions"
export default class extends Controller {
  static targets = ["container", "btn"];
  connect() {}

  toggleFormActions = () => {
    this.containerTarget.classList.toggle("right-panel-active");
    this.btnTarget.classList.remove("btn-scaled");
    window.requestAnimationFrame(() => {
      this.btnTarget.classList.add("btn-scaled");
    });
  };
}
