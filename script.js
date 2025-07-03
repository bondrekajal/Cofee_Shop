



  // Global cart array and default quantity
  let qty = 1;
  const unitPrice = 99;
  let cart = [];

  // Function to update UI
  function updateUI() {
    document.getElementById('quantity').innerText = qty;
    document.getElementById('totalPrice').innerText = qty * unitPrice;
  }

  // Wait for HTML to load
  document.addEventListener('DOMContentLoaded', () => {
    // Increase button
    document.getElementById('increaseBtn').addEventListener('click', () => {
      qty++;
      updateUI();
    });

    // Decrease button
    document.getElementById('decreaseBtn').addEventListener('click', () => {
      if (qty > 1) qty--;
      updateUI();
    });

    // Add to Cart button (optional logic if you want to use)
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        // Reset quantity and total when modal opens
        qty = 1;
        updateUI();
      });
    });

    // Confirm Order button
    document.getElementById('confirmOrder').addEventListener('click', () => {
      // Add to cart array
      cart.push({
        name: "Coffee",
        price: unitPrice,
        quantity: qty
      });

      alert('Order Successful!');
      qty = 1; // Reset quantity
      updateUI();
      cart = []; // Clear cart after confirm

      // Close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
      if (modal) modal.hide();
    });
  });
