function printDiv()
{
    if(!isLogin)
    {
        sectionChange.showLogin()
        return;
    }

    let cash = parseInt(prompt("Amount to pay"))

    if(isNaN(cash))
    {
        alert("Invalid input!")
        return;
    }

    か("#cash_amount").text(cash.toLocaleString())

    if(cartClass.cart.length == 0) return;

    let totalPrice = 0;
    let receiptlist = か(".list_items_receipts");

    receiptlist.text("")

    // could've used forEach but it needs to be for loop cuz school lesson rules lmao
    for(let i = 0; i < cartClass.cart.length; i++)
    {
        let quantity = cartClass.cart[i].quantity;
        let price = items[cartClass.cart[i].item].price

        receiptlist.htmlp(insertText.insertReceipt(items[cartClass.cart[i].item].title, quantity, price))

        totalPrice += price*quantity;
    }

    if(cash < totalPrice)
    {
        alert("Insufficient funds!")
        return;
    }

    か("#Total_price_receipt").text(totalPrice.toLocaleString())

    か("#cash_change").text((cash-totalPrice).toLocaleString())

    let nav = か("nav"),
    receipt = か(".receipt")

    か("[data-show]").gAll.forEach(el=>{
        el.setAttribute("data-show", 0)
    })
    
    receipt.atr("data-show", 1)
    nav.atr("data-show", 0)

    print()

    nav.atr("data-show", 1)
    receipt.atr("data-show", 0)

    sectionChange.showCart()
    
}