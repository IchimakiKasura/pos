let current_item_selected;

function addToCartAnimation()
{
    let placeholder = か(".cart_add_notif");
        placeholder.sty("opacity", 1)
        placeholder.sty("display","block")

    setTimeout(()=>{
        placeholder.sty("opacity", 0)
        setTimeout(()=>{
            placeholder.sty("display","none")
        }, 1100)
    }, 1000)
}