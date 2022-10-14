import * as model from "./model.js";
import storeView from "./views/storeView.js";
import headerView from "./views/headerView.js";
import navigationView from "./views/navigationView.js";
import cartView from "./views/cartView.js";
import modalView from "./views/modalView.js";

const controlAddItem = function (btn, stid) {
  console.log("calling controlAddItem");
  console.log(btn, stid);
  const shapeType = stid;

  console.log(model.state.store);
  const storeIndex = model.state.store.findIndex(
    (item) => item.name === shapeType
  );
  console.log("i + type " + shapeType, storeIndex); // these work
  const cartObject = model.createCartObject(shapeType, storeIndex);
  if (model.state.store[storeIndex].quantity > 0) {
    if (model.state.cart.some((item) => item.name === shapeType)) {
      const itemIndex = model.state.cart.findIndex(
        (item) => item.name === shapeType
      );
      if (itemIndex > -1) {
        model.state.cart[itemIndex].quantity++;
      }
    } else {
      model.state.cart.push(cartObject);
    }
    for (const item of model.state.store) {
      if (item.name === shapeType && item.quantity > 0) {
        item.quantity--;
        break;
      }
    }
  }

  storeView.update(model.state.store);
  headerView.render(model.state.cart);
  populateCart(model.state.cart);
  console.log(model.state.store[storeIndex].quantity);
};

const controlRemoveItem = function (btn, stid) {
  console.log("calling controlRemoveItem");
  console.log(btn, stid);
  const shapeType = stid;
  for (const item of model.state.store) {
    if (item.name === shapeType && item.quantity < 1000) {
      item.quantity++;
      break;
    }
  }
  console.log(model.state.store);
  storeView.update(model.state.store);
  if (model.state.cart.some((item) => item.name === shapeType)) {
    const itemIndex = model.state.cart.findIndex(
      (item) => item.name === shapeType
    );
    console.log(itemIndex);
    if (itemIndex > -1 && model.state.cart[itemIndex].quantity > 0) {
      model.state.cart[itemIndex].quantity--;
      if (model.state.cart[itemIndex].quantity === 0)
        model.state.cart = model.state.cart.filter(
          (item) => item.name !== shapeType
        );
    }
  }
  headerView.render(model.state.cart);
  populateCart(model.state.cart);
  // NTS, remove object if it is the last instance of the item which is removed
  console.log(model.state.cart);
};

const controlDeleteItem = function (stid) {
  const shapeType = stid;
  const itemIndex = model.state.cart.findIndex(
    (item) => item.name === shapeType
  );
  const itemStoreIndex = model.state.store.findIndex(
    (item) => item.name === shapeType
  );
  model.state.store[itemStoreIndex].quantity =
    model.state.store[itemStoreIndex].quantity +
    model.state.cart[itemIndex].quantity;
  console.log("delete " + shapeType, itemIndex);
  model.state.cart = model.state.cart.filter(function (item) {
    return item.name !== shapeType;
  });
  cartView.render(model.state.cart);
  storeView.render(model.state.store);
  headerView.render(model.state.cart);
};

const populateStore = function (data) {
  console.log(data);
  storeView.render(data);
};

const populateCart = function (data) {
  console.log("popCartfunc");
  cartView.render(data);
};

const controlVisibility = function (element) {
  model.toggleVisibility(element);
};

const controlModal = function (element) {
  modalView.render();
  controlVisibility(element);
};

const controlMainNavigation = function (element) {
  controlVisibility(element);
};

const init = function () {
  headerView.addHandlerToggleCart(controlVisibility);
  navigationView.addHandlerToggleMenu(controlMainNavigation);
  storeView.addHandlerAddItem(controlAddItem);
  storeView.addHandlerRemoveItem(controlRemoveItem);
  cartView.addHandlerAddItem(controlAddItem);
  cartView.addHandlerRemoveItem(controlRemoveItem);
  cartView.addHandlerDeleteItem(controlDeleteItem);
  cartView.addHandlerToCheckout(controlModal);
  cartView.addHandlerCloseCart(controlVisibility);
  modalView.addHandlerExitModal(controlVisibility);
  populateStore(model.state.store);
  populateCart(model.state.cart);
};

init();
