class cartClass
{
    static cart = []

    // Add selected items to cart
    static addToCart(selected_item)
    {
        // checks for duplicate so it can just add the quantity
        let isDuplicate = false;
        let qty = か(`#quantity_${selected_item}`);
        this.cart.forEach(item=>{
            if(item.item == selected_item)
            {
                item.quantity = parseInt(item.quantity) + parseInt(qty.val());
                isDuplicate = true;
            }
        })
        if(isDuplicate)
        {
            showSelection.showList()
            addToCartAnimation()
            return;
        }

        // push the selected item onto cart array
        this.cart.push({
            id: crypto.randomUUID(), // generate random ID for removing item purpose
            item: selected_item,
            quantity: qty.val()
        })
    
        // set the total items on cart icon
        か("#cartTotal").text(this.cart.length);
        qty.val(1)
    
        // goes back to main page
        showSelection.showList()
        addToCartAnimation()
    }

    // the function name speaks for itself
    static removeItem(id, element)
    {
        // lmao
        // this.cart.forEach((item,index)=>{
        //     if(item.id === id)
        //         this.cart.splice(index, 1)
        // })
        for(let i = 0; i < this.cart.length; i++)
            if(this.cart[i].id === id)
            this.cart.splice(i, 1)

        element.remove()

        か("#cartTotal").text(this.cart.length)
        か(".placeholder").sty("display", this.cart.length == 0 ? "block" : "none");
        this.refreshPrice()
    }

    // changes the item price value when quantity is increased
    static change(element)
    {
        element.childNodes[11].innerText = `₱${(element.childNodes[5].innerText.replace(/₱|,/g, "") * element.childNodes[9].value).toLocaleString()}`;
        this.cart[element.getAttribute("data-itemNo")].quantity = element.childNodes[9].value;
        this.refreshPrice()
    }

    // refreshes the price value
    static refreshPrice()
    {
        let tempPrice = 0;
        let allPrice = か(".cart_total_price").gAll

        allPrice.forEach(prices=>{
            tempPrice += parseInt(prices.innerText.replace(/₱|,/g,""))
        })

        か("#price").text(tempPrice.toLocaleString())
    }

    // decrease price
    static decrease(itemNo)
    {
        let qty = か(`#quantity_${itemNo}`)
        let num = parseInt(qty.val());
        if(num >= 2)
            qty.val(num+-1)
    }

    // increase price
    static increase(itemNo)
    {
        let qty = か(`#quantity_${itemNo}`)
        let num = parseInt(qty.val());
        if(num <= 98)
            qty.val(num+=1)
    }
}