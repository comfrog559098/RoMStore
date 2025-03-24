// Modal functionality
function openModal(rank, price) {
  const modal = document.getElementById('purchaseModal');
  document.getElementById('modalTitle').innerText = `Confirm Your Purchase: ${rank}`;
  document.getElementById('modalPrice').innerText = `Price: $${price.toFixed(2)} USD`;

  const modalImage = document.getElementById('modalImage');
  const imagePath = `${rank.toLowerCase().replace('+', 'plus')}.png`;
  modalImage.src = imagePath;
  modalImage.alt = rank;

  modal.style.display = 'block';
}


// Modal functionality
const hostedButtonIds = {
  'VIP': 'Z8YGYJ7ZTJUSW',
  'MVP': 'NNFXSE62NU76E',
  'MVP+': 'S4WUWB98TUYZN'
};

function openModal(rank, price) {
  const modal = document.getElementById('purchaseModal');
  document.getElementById('modalTitle').innerText = `Confirm Your Purchase: ${rank}`;
  document.getElementById('modalPrice').innerText = `Price: $${price.toFixed(2)} USD`;

  const modalImage = document.getElementById('modalImage');
  const imagePath = `${rank.toLowerCase().replace('+', 'plus')}.png`;
  modalImage.src = imagePath;
  modalImage.alt = rank;

  modal.style.display = 'block';

  // Clear previous buttons and render the appropriate PayPal button
  const paypalContainer = document.getElementById('paypal-button-container');
  paypalContainer.innerHTML = '';

  if (hostedButtonIds[rank]) {
    paypal.HostedButtons({
      hostedButtonId: hostedButtonIds[rank]
    }).render('#paypal-button-container');
  } else {
    console.error('No hostedButtonId found for this rank.');
  }
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