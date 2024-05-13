class sectionChange
{
    static #list = か(".main_list");
    // static #item = か(".main_item_show");
    static #cart = か(".main_cart");
    static #login = か(".login");
    static #ds = "data-show"
    
    // shows main list section and hides the rest
    static showList()
    {
        this.#list.atr(this.#ds, 1)
        // this.#item.atr(this.#ds, 0)
        this.#cart.atr(this.#ds, 0)
        this.#login.atr(this.#ds, 0)
        か("#lmao").sty("display", "block")
    }

    // shows cart section and hides the rest
    static showCart()
    {
        this.#list.gt.childNodes[1].innerHTML = ""
        this.#list.atr(this.#ds, 0)
        // this.#item.atr(this.#ds, 0)
        this.#cart.atr(this.#ds, 1)
        this.#login.atr(this.#ds, 0)
        か("#lmao").sty("display", "none")
    }

    // shows item section and hides the rest
    // static showItem()
    // {
    //     this.#list.gt.childNodes[1].innerHTML = ""
    //     this.#list.atr(this.#ds, 0)
    //     this.#item.atr(this.#ds, 1)
    //     this.#cart.atr(this.#ds, 0)
    // }

    static showLogin()
    {
        this.#list.gt.childNodes[1].innerHTML = ""
        this.#list.atr(this.#ds, 0)
        // this.#item.atr(this.#ds, 0)
        this.#cart.atr(this.#ds, 0)
        this.#login.atr(this.#ds, 1)
        か("#lmao").sty("display", "block")
    }
}