//Funcion para contar elementos en el carrito
export const countCart = ()=> {
    if (JSON.parse(localStorage.getItem("Order"))> "0") {
        
        $(".cart__count").show().html(JSON.parse(localStorage.getItem("Order")).length)

    } else {
        $(".cart__count").hide()
    }
}