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
<div class="item" data-itemNumber="${itemNo}" title="${itemName}" onmouseleave="resetQuantity(this)">
    <img src="${itemImage}" alt="item_image">
    <p class="title">${itemName}</p>
    <p class="price">₱${itemPrice.toLocaleString()}</p>
    <br>
    <div class="item_misc">
        <div class="item_quantity">
            <button onclick="cartClass.decrease(${itemNo})">-</button>
            <input id="quantity_${itemNo}" type="number" max="99" mind="1" value="1" >
            <button onclick="cartClass.increase(${itemNo})">+</button>
        </div>
        <button class="atc" onclick="cartClass.addToCart(${itemNo})">Add To Cart</button>
    </div>
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