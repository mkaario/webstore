import baseView from "./baseView.js";

class headerView extends baseView {
  _parentElement = document.querySelector(".shop_btn");

  addHandlerToggleCart(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".shop_btn");
      if (!btn) return;
      const currentActor = document.querySelector(".shopping_cart");
      handler(currentActor);
    });
  }

  _generateMarkup() {
    const totalAmount = this._data.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    return `
   
      <img src="cart.png" /><span class="item_total">${totalAmount}</span>

    `;
  }
}

export default new headerView();
