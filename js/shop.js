function addItem() {
    // Fetch the values from the elements
    const inputBox = document.getElementById("cart-title1");
    const inputBox2 = document.getElementById("cart-price1");
    const listContainer = document.getElementById("item-container");

    // Create cart item object
    const cartItem = {
        title: inputBox.innerHTML,
        price: inputBox2.innerHTML,
    };

    // Get existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add new item to cart items array
    cartItems.push(cartItem);

    // Save updated cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Clear input fields (if necessary)
    inputBox.value = "";
    inputBox2.value = "";
}