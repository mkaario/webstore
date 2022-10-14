import baseView from "./baseView";

class modalView extends baseView {
  _parentElement = document.querySelector(".modal");
  addHandlerExitModal(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".close");
      if (!btn) return;
      const targetElement = document.querySelector(".modal");
      handler(targetElement);
    });
  }

  _generateMarkup() {
    return `
        <div class="message">
            <p>Giev job pls :)</p>
            <button class="close"><img src="close.png"/></button>
        </div>
    `;
  }
}

export default new modalView();
