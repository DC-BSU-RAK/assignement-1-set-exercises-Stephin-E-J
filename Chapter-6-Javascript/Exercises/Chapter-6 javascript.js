function calculateTotal() {

    const pricePerLiter = parseFloat(document.getElementById('price').value);
    const litersPurchased = parseFloat(document.getElementById('liter').value);
    
    const totalCost = pricePerLiter * litersPurchased;
    
    document.getElementById('totalCost').textContent = 
        `Total cost: $${totalCost.toFixed(2)}`;
}