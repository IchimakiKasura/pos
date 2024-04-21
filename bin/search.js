か("#searchbar").evt("keyup", k=>{
    
    let target = k.currentTarget;
    let list = か(".main_item_list");

    list.text("")

    for(let i = 0; i < items.length; i++)
        if(items[i].tags.toLowerCase().match(target.value.toLowerCase()) || items[i].title.toLowerCase().match(target.value.toLowerCase()))
            list.htmlp(insertText.insertItemLists(i, items[i].image, items[i].title, items[i].price))
})