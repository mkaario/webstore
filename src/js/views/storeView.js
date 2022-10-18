import baseView from "./baseView.js";

class storeView extends baseView {
  _parentElement = document.querySelector(".store_wrapper");
  _message = "";

  addHandlerAddItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const shapeType = e.target.closest(".store_item");
      const stid = shapeType?.dataset.type;
      console.log(stid);
      const btn = e.target.closest(".add_item");
      if (!btn) return;
      console.log(e.target);
      handler(btn, stid);
    });
  }

  addHandlerRemoveItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const shapeType = e.target.closest(".store_item");
      const stid = shapeType?.dataset.type;

      const btn = e.target.closest(".remove_item");
      if (!btn) return;
      console.log(e.target);
      handler(btn, stid);
    });
  }

  _generateMarkup() {
    return this._data
      .map(
        (item) =>
          `
        <div class="store_item" data-type="${item.name}">
            
            <h2 class="title">${item.name}s</h2>
            <div class="item_info_block">
              <div class="desc_block">  
                <div class="price"><span class="amount">価格 ${
                  item.price
                }€</span></div>  
                <div class="item_image"><img src="${
                  item.imageUrl
                }"/ alt="a photo of ${item.name}"></div>
                </div>
                <div class="details_block">
                
                <div class="description"><p>${item.description}</p></div>
                <div class="quantity_available">In stock: ${item.quantity}</div>
              </div>
            </div>
            <div class="controls">
              <button class="add_item" aria-label="add this item to cart"><span class="text_wrapper">Add to cart</span></button>
              <div class="in_cart">In cart: ${
                item.quantityOriginal - item.quantity
              }</div>
            </div>
        </div>
        `
      )
      .join("");
  }
}

export default new storeView();
