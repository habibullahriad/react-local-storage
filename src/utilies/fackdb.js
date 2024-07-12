//use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart;
  //get the shopping cart
  const storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  } else {
    shoppingCart = {};
  }
  //add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in storedCart) {
      delete shoppingCart(id);
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
const deleteShoppingCart = () => {
  localStorage.removeItem("shoppong-cart");
};
export { addToDb, removeFromDb, deleteShoppingCart };
