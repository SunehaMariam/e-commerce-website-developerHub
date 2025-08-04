document.addEventListener("DOMContentLoaded", function () {
  let cartCount = document.querySelectorAll('.cart-left .cart-main').length;

  function updateCartCount() {
    document.getElementById("cartCount").textContent = cartCount;
    document.querySelector('.heading h3').textContent = `My Cart (${cartCount})`;
  }

  // Remove button inside cart
  function attachRemoveHandler(button) {
    button.addEventListener('click', function () {
      const item = button.closest('.cart-main');
      if (item) {
        item.remove();
        cartCount--;
        updateCartCount();
      }
    });
  }

  document.querySelectorAll('.remove').forEach(attachRemoveHandler);

  // Back to shop
  document.querySelector('.back').addEventListener('click', () => {
    window.location.href = 'product-preview.html';
  });

  // Move to cart from Save for Later
  document.querySelectorAll('.icon-button').forEach(button => {
    button.addEventListener('click', function () {
      const card = button.closest('.related-card');

      // Already moved? Prevent duplicate
      if (card.dataset.moved === "true") return;
      card.dataset.moved = "true";

      const newItem = document.createElement('div');
      newItem.className = 'cart-main';
      newItem.innerHTML = `
        <div class="cart-item">
          <img src="${card.querySelector('img').src}" alt="Product" />
          <div class="cart-1">
            <p>${card.querySelectorAll('p')[0].textContent}</p>
            <p>${card.querySelectorAll('p')[1].textContent}</p>
            <p>Size: medium, Color: blue, Material: Plastic<br>Seller: Artel Market</p>
            <button class="remove">Remove</button>
            <span>Save for later</span>
          </div>
        </div>
        <div class="item-price">
          <select class="qty">
            <option>Qty: 1</option>
            <option>Qty: 2</option>
            <option>Qty: 3</option>
            <option>Qty: 4</option>
          </select>
          <p>${card.querySelectorAll('p')[1].textContent}</p>
        </div>
      `;

      // Add to cart section
      const cartLeft = document.querySelector('.cart-left');
      cartLeft.insertBefore(newItem, document.querySelector('.cart-buttons'));

      // Remove from save for later
      card.remove();

      // Attach remove handler to new item
      attachRemoveHandler(newItem.querySelector('.remove'));

      cartCount++;
      updateCartCount();
    });
  });

  // Initial count
  updateCartCount();
});
