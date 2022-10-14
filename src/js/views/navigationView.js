import baseView from "./baseView";

class navigationView extends baseView {
  _parentElement = document.querySelector("header");

  addHandlerToggleMenu(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".menu_btn");
      const currentActor = document.querySelector(".main_navigation");

      if (!btn) return;

      handler(currentActor);
    });
  }
}

export default new navigationView();
