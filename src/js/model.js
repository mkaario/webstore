export const state = {
  login: true,
  shape: {
    name: "",
    price: 1,
  },
  cart: [],
  store: [
    {
      name: "White kintsugi tea bowl",
      quantityOriginal: 120,
      quantity: 120,
      description: "Unique gold restoration, urushi, ceramic.",
      price: 140,
      imageUrl: "3.png",
    },
    {
      name: "Kintsugi tea bowl",
      quantityOriginal: 100,
      quantity: 100,
      description: "Blue wabi sabi, 22K gold.",
      price: 139,
      imageUrl: "4.png",
    },
    {
      name: "Deep dark green restored bowl",
      quantityOriginal: 40,
      quantity: 40,
      description:
        "Kintsugi, restored with real 22K gold, perfect for a wedding gift",
      price: 409,
      imageUrl: "5.png",
    },
    {
      name: "Beige wabi sabi bowl",
      quantityOriginal: 32,
      quantity: 32,
      description:
        "22K gold restoration with the Japanese Kintsukuroi technique.",
      price: 509,
      imageUrl: "6.png",
    },
    {
      name: "Kintsugi wabi sabi bowl",
      quantityOriginal: 80,
      quantity: 80,
      description: "Relief decoration, restoration in gold.",
      price: 399,
      imageUrl: "7.png",
    },
    {
      name: "Kintsugi low serving bowl",
      quantityOriginal: 42,
      quantity: 42,
      description: "Contemporary light gray bowl, gold, ceramic, urushi.",
      price: 310,
      imageUrl: "8.png",
    },
    {
      name: "Kintsugi bowl",
      quantityOriginal: 72,
      quantity: 72,
      description: "Restoration in real gold, small wabi sabi ceramic bowl.",
      price: 389,
      imageUrl: "9.png",
    },
    {
      name: "Kintsugi couples gift",
      quantityOriginal: 12,
      quantity: 12,
      description: "Set of two small bowls restored with 22K gold.",
      price: 340,
      imageUrl: "10.png",
    },
    {
      name: "Kintsugi vase",
      quantityOriginal: 57,
      quantity: 57,
      description:
        "Unique gift representative of resilience, perfect for those who already have everything.",
      price: 509,
      imageUrl: "11.png",
    },
    {
      name: "Kintsugi saucer",
      quantityOriginal: 68,
      quantity: 68,
      description:
        "Contemporary ceramic restored with real gold. Sentimental gift to celebrate a rebirth or a change.",
      price: 249,
      imageUrl: "12.png",
    },
  ],
};

// Esimerkkitarkoitukseen pidet????n state objekti kovakoodattuna ylle. Normaalisti t??m?? tulisi tietty tod. n??k. jostain APIsta JSONina
// ja silloin sen muodostaminen tulisi async fetcheista tyyliin:
// const getJSON = async function(url) {
//   const response = await fetch(url);
//   const data = response.json();
//   ...ja sitten m????ritell????n state.store ko. palikaksi jos sille ei tarvitse tehd?? lis??modifikaatioita
// }??
// T??t?? kutsutaan sitten tietty storeView.renderin ohessa tai suoraan initiss?? tapauksista riippuen

// Muodostetaan karsittu objekti viet??v??ksi cart-arrayhin
export function createCartObject(shapetype, storeindex) {
  return {
    name: shapetype,
    quantity: 1,
    price: state.store[storeindex].price,
  };
}

// Ottaa sis????n currentActorin jonka idea on vain m????ritell?? interaktio headerin kahden expanding osuuden (cart ja menu) v??lill??
// ett?? saadaan hide/show animaatio saumattomaksi - tai mik??li ei ole niist?? kyse niin sitten vain sille voi passaa mink?? tahansa elementin
// jonka se togglaa activeksi
export const toggleVisibility = function (currentActor, btn) {
  const menuActor = document.querySelector(".main_navigation");
  const navElements = document.querySelectorAll(".nav_element");
  const cartActor = document.querySelector(".shopping_cart");
  const cartShader = document.querySelector(".content_shader");
  if (currentActor === menuActor) {
    cartActor.classList.remove("active");
    cartShader.classList.remove("active");
    currentActor.classList.toggle("active");
    if (!btn) return;
    navElements.forEach((el) => el.classList.remove("active"));
    btn.classList.add("active");
  }
  if (currentActor === cartActor) {
    menuActor.classList.remove("active");
    currentActor.classList.toggle("active");
    cartShader.classList.toggle("active");
    return;
  }
  currentActor.classList.toggle("active");
};
