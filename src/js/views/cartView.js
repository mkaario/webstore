import baseView from "./baseView.js";

class cartView extends baseView {
  _parentElement = document.querySelector(".shopping_cart");
  _message = "";

  addHandlerAddItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const shapeType = e.target.closest(".cart_item");
      const stid = shapeType?.dataset.type;
      const btn = e.target.closest(".add_item");
      if (!btn) return;
      handler(stid);
    });
  }

  addHandlerRemoveItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const shapeType = e.target.closest(".cart_item");
      const stid = shapeType?.dataset.type;

      const btn = e.target.closest(".remove_item");
      if (!btn) return;
      handler(stid);
    });
  }

  addHandlerDeleteItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const shapeType = e.target.closest(".cart_item");
      const stid = shapeType?.dataset.type;

      const btn = e.target.closest(".delete_item");
      if (!btn) return;
      handler(stid);
    });
  }

  addHandlerToCheckout(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn_checkout");
      if (!btn) return;
      const targetElement = document.querySelector(".modal");
      handler(targetElement);
    });
  }

  addHandlerCloseCart(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".close_cart");
      if (!btn) return;
      const currentActor = document.querySelector(".shopping_cart");
      handler(currentActor);
    });
  }

  _generateMarkup() {
    const totalPrice = this._data.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    if (this._data.length === 0) {
      return `<div class="message">You have no items in your cart.</div>`;
    } else {
      return this._data
        .map(
          (item) =>
            `
      <div class="cart_item" data-type="${item.name}">
          <div class="item_name"><p>${item.name}</p></div>
          <div class="item_quantity">
            <button class="cart_button add_item">+</button>
            <p>${item.quantity}</p>
            <button class="cart_button remove_item">-</button>
            <button class="delete_item"><img src="delete_x.png"/></button>
          </div>
      </div>
      `
        )
        .join("")
        .concat(
          `
        <div class="cart_footer">
          <div class="total_price">
            Total: <span class="price">${totalPrice}</span>€
          </div>
          <div class="checkout">
            <button class="btn_checkout"><span class="text_wrapper">Checkout</span></button>
          </div>
          <div class="close">
            <button class="close_cart"><img src="close_dark.png"/></button>
          </div>
        </div>`
        );
    }
  }
}

export default new cartView();
