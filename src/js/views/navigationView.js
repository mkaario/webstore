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

  addHandlerRouteView(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".nav_element");
      const currentActor = document.querySelector(".main_navigation");
      const route = btn?.dataset.target;

      if (!btn) return;

      handler(currentActor, route, btn);
    });
  }
}

export default new navigationView();
