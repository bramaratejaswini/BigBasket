let searchform = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchform.classList.toggle("active");
};

let shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingcart.classList.toggle("active");
};
