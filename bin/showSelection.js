class showSelection
{
    static showItem(item)
    {
        sectionChange.showItem()
        current_item_selected = item;
    
        か("#item_current").src(items[item].image);
        か(".info_title").text(items[item].title);
        か(".info_price").text("₱"+items[item].price.toLocaleString());
        か("#quantity").val(1);
    }

    static showCart()
    {
        sectionChange.showCart()
        let cartList = か(".list_scroll");
        let totalPrice = か("#price")
        let tempPrice = 0;

        か(".placeholder").sty("display", cartClass.cart.length == 0 ? "block" : "none");

        cartList.text("")

        // forEach is easier but teacher needs for loop :P
        for(let i = 0; i < cartClass.cart.length; i++)
        {
            let quantity = cartClass.cart[i].quantity;
            let price = items[cartClass.cart[i].item].price
            let itemTotalPrice = price*quantity

            cartList.htmlp(insertText.insertCartItem(i, items[cartClass.cart[i].item].image, items[cartClass.cart[i].item].title, price, itemTotalPrice, cartClass.cart[i].id, quantity))

            tempPrice += itemTotalPrice
        }

        totalPrice.text(tempPrice.toLocaleString())
    }

    static showList()
    {
        const list_section = か(".main_item_list");

        list_section.text("")

        for(let i = 0; i < items.length; i++)
        {
            let temp = insertText.insertItemLists(i, items[i].image, items[i].title, items[i].price)
            list_section.htmlp(temp);
        }

        sectionChange.showList()

        try {
            か("#addtoCart").rmevt()
        } catch {}
    }
}

か(document).evt("DOMContentLoaded", showSelection.showList)

// DEBUG
// showCart()