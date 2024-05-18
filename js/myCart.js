function showCartItems() {
    const listContainer = document.getElementById("item-container");

    // Get cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Clear existing items (if any)
    listContainer.innerHTML = '';

    // Render each cart item
    cartItems.forEach(item => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.className = "item-display";
        let h2 = document.createElement("h2");
        h2.innerHTML = item.title;
        let p = document.createElement("p");
        p.innerHTML = item.price;
        let a = document.createElement("a");
        a.href = "./../pages/buy.html";
        let button = document.createElement("button");
        button.innerHTML = "Buy Now";
        a.appendChild(button);

        // Append elements to div
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(a);
        
        // Create and append the close button (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7 ";
        span.classList.add("close-button");

        // Append div and span to li
        li.appendChild(div);
        li.appendChild(span);

        // Append li to listContainer
        listContainer.appendChild(li);
    });
}

// Call function to show cart items when the page loads
window.onload = showCartItems;