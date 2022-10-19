import * as model from "./model.js";

import aboutView from "./views/aboutView.js";
import contactView from "./views/contactView.js";
import storeView from "./views/storeView.js";
import headerView from "./views/headerView.js";
import navigationView from "./views/navigationView.js";
import cartView from "./views/cartView.js";
import modalView from "./views/modalView.js";

// Kontrolloi storeViewissä ja cartViewissä objektien lisäystä cart-arrayhin ja staten päivittämistä.
// Ottaa sisään stid:n (toimii item id:nä josta voidaan kaivaa indeksi storeen etc.), kts. storeView.js ja cartView.js jossa on ko. funktion listenerit
// Note: shapeType muuttuja on siltä ajalta kun store myi vielä tehtävänannon mukaisia kolmioita, neliöitä ja ympyröitä :)
const controlAddItem = function (stid) {
  const shapeType = stid;

  const storeIndex = model.state.store.findIndex(
    (item) => item.name === shapeType
  );
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

  populateCart(model.state.cart); // Alempana on tehty funktiomuotoon populate sekä cartille että storelle mikäli haluaisi oikeammassa versiossa toteuttaa populaten aikana muitakin asioita. Tähän tarkoitukseen ylläolevat renderit toimivat kuitenkin mielestäni hyvin.
};

// Sama kuin yllä, mutta poistetaan itemeitä yksitellen.
const controlRemoveItem = function (stid) {
  const shapeType = stid;
  for (const item of model.state.store) {
    if (item.name === shapeType && item.quantity < 1000) {
      item.quantity++;
      break;
    }
  }
  storeView.update(model.state.store);
  if (model.state.cart.some((item) => item.name === shapeType)) {
    const itemIndex = model.state.cart.findIndex(
      (item) => item.name === shapeType
    );
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
};

// Poistetaan kaikki instanssit itemistä cartista ja päivitetään state.store vastaamaan oikeaa tilannetta.
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
  model.state.cart = model.state.cart.filter(function (item) {
    return item.name !== shapeType;
  });
  cartView.render(model.state.cart);
  storeView.render(model.state.store);
  headerView.render(model.state.cart);
};

const populateStore = function (data) {
  storeView.render(data);
};

const populateCart = function (data) {
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

const controlRoutes = function (currentActor, route, btn) {
  model.toggleVisibility(currentActor, btn);
  switch (route) {
    case "about":
      aboutView.render();
      controlMainNavigation(currentActor);
      break;
    case "contact":
      contactView.render();
      controlMainNavigation(currentActor);
      break;
    case "store":
      storeView.render(model.state.store);
      controlMainNavigation(currentActor);
      break;
  }
};

const init = function () {
  headerView.addHandlerToggleCart(controlVisibility);
  navigationView.addHandlerToggleMenu(controlMainNavigation);
  navigationView.addHandlerRouteView(controlRoutes);
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
