function calculateTotal() { /*The function calculateTotal() is used for calculating the values */
    /**The const tag also known as constant is used to prevent other users from changing it */
    const pricePerLiter = parseFloat(document.getElementById('price').value);
    const litersPurchased = parseFloat(document.getElementById('liter').value);
    
    const totalCost = pricePerLiter * litersPurchased;
    
    document.getElementById('totalCost').textContent = 
        `Total cost: $${totalCost.toFixed(2)}`;
}