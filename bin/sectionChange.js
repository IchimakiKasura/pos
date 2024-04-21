class sectionChange
{
    static #list = か(".main_list");
    static #item = か(".main_item_show");
    static #cart = か(".main_cart");
    static #ds = "data-show"
    
    static showList()
    {
        this.#list.atr(this.#ds, 1)
        this.#item.atr(this.#ds, 0)
        this.#cart.atr(this.#ds, 0)
    }

    static showCart()
    {
        this.#list.gt.childNodes[1].innerHTML = ""
        this.#list.atr(this.#ds, 0)
        this.#item.atr(this.#ds, 0)
        this.#cart.atr(this.#ds, 1)
    }

    static showItem()
    {
        this.#list.gt.childNodes[1].innerHTML = ""
        this.#list.atr(this.#ds, 0)
        this.#item.atr(this.#ds, 1)
        this.#cart.atr(this.#ds, 0)
    }
}