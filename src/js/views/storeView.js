import baseView from "./baseView.js";

class storeView extends baseView {
  _parentElement = document.querySelector(".store_wrapper");
  _message = "";

  addHandlerAddItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const shapeType = e.target.closest(".store_item");
      const stid = shapeType?.dataset.type;
      const btn = e.target.closest(".add_item");
      if (!btn) return;
      handler(stid);
    });
  }

  addHandlerRemoveItem(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const shapeType = e.target.closest(".store_item");
      const stid = shapeType?.dataset.type;

      const btn = e.target.closest(".remove_item");
      if (!btn) return;
      handler(stid);
    });
  }

  _generateMarkup() {
    const headerMarkup = `
      <section class="content_header">
        <div class="ingress">
          Kintsugi (金継ぎ, "golden joinery"), also known as kintsukuroi
          (金繕い, "golden repair"), is the Japanese art of repairing broken
          pottery by mending the areas of breakage with lacquer dusted or mixed
          with powdered gold, silver, or platinum.
        </div>
        <div class="hanko">
          <img src="hanko_1.png" alt="" />
        </div>
      </section>
    `;
    const storeItemsMarkup = this._data
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
    return headerMarkup.concat(storeItemsMarkup);
  }
}

export default new storeView();
