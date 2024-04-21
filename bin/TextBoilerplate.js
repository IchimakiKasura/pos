class insertText
{
    // Cart Item Template
    static insertCartItem(itemNo, image, itemName, itemPrice, itemTotalPrice, itemID, quantity)
    {
        return `
<div class="mc" data-itemNo="${itemNo}">
    <img src="${image}">
    <p class="cart_title">${itemName}</p>
    <p class="cart_price">₱${itemPrice.toLocaleString()}</p>
    <label for="cart_quantity">Quantity:</label>
    <input id="cart_quantity" onchange="cartClass.change(this.parentElement)" type="number" value="${quantity}" min="1" max="99">
    <p class="cart_total_price">₱${itemTotalPrice.toLocaleString()}</p>
    <button onclick="cartClass.removeItem('${itemID}', this.parentElement)">REMOVE</button>
</div>`

    }

    // Item List Template
    static insertItemLists(itemNo, itemImage, itemName, itemPrice)
    {
        return `
<div class="item" data-itemNumber="${itemNo}" title="${itemName}" onclick="showSelection.showItem(${itemNo})">
    <img src="${itemImage}" alt="item_image">
    <p class="title">${itemName}</p>
    <p class="price">₱${itemPrice.toLocaleString()}</p>
</div>`

    }

    // Print Receipt Template
    static insertReceipt(itemTitle, itemQuantity, itemPrice)
    {
        return `
        <div class="list_receipt">
            <h3 class="list_receipt_title">${itemTitle}</h3>
            <h4><span id="receipt_quantity">${itemQuantity}</span>x</h4>
            <h3 class="list_receipt_price">₱${itemPrice.toLocaleString()}</h3>
        </div>`

    }
}