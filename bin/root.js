let current_item_selected, isLogin;

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

// resets quantity when hovered
function resetQuantity(element = new Element)
{
    element.querySelector("input").value = 1
}

か(document).evt("DOMContentLoaded", showSelection.showList)