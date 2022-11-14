/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelectorAll('tr').remove();
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let parentEl = document.getElementById('cart');
  let rowEl = document.createElement('tr');

  for(let i=0; i<Cart.items.length; i++) {
    let productDataEl = document.createElement('td');
    let quantityDataEl = document.createElement('td');
    let removeDataEl = document.createElement('td');
    productDataEl.innerText = Cart.product;
    quantityDataEl.innerText = Cart.quantity;
    removeDataEl.innerText = clearCart('X');
  }
  rowEl.appendChild(productDataEl);
  rowEl.appendChild(quantityDataEl);
  rowEl.appendChild(removeDataEl);
  parentEl.appendChild(rowEl);

  // DONE: Find the table body
  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {

  Cart.removeItem();
  Cart.saveToLocalStorage();
  Cart.renderCart();
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
