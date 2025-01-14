document.getElementById('add-btn').addEventListener('click', () => {
    const productName = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
  
    if (productName && quantity > 0 && price >= 0) {
      alert(`Added ${quantity} x ${productName} at ${price} each.`);
    } else {
      alert('Please fill in valid product details.');
    }
  });
  
  document.getElementById('generate-invoice-btn').addEventListener('click', () => {
    alert('Invoice generated!');
  });
  