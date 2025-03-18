// Modal functionality
function openModal(rank, price) {
  const modal = document.getElementById('purchaseModal');
  document.getElementById('modalTitle').innerText = `Confirm Your Purchase: ${rank}`;
  document.getElementById('modalPrice').innerText = `Price: $${price.toFixed(2)} USD`;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('purchaseModal');
  modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('purchaseModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// PayPal Integration (Example Placeholder)
function loadPayPalButtons() {
  if (typeof paypal !== 'undefined') {
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: document.getElementById('modalPrice').innerText.split('$')[1].split(' ')[0] }
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Transaction completed by ' + details.payer.name.given_name);
          closeModal();
        });
      }
    }).render('#paypal-button-container');
  }
}

// Ensure PayPal buttons load on modal open
openModal = (function(originalOpenModal) {
  return function(rank, price) {
    originalOpenModal(rank, price);
    loadPayPalButtons();
  };
})(openModal);
