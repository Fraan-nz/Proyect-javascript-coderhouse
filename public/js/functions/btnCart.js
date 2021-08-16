const cartOpen = $("#cart-open-dsk, #cart-open-mb");
const cartX = $("#cart-close");
const cartContainer = $("#cart-container");
const cart = $(".cart");
const payment = $(".payment");
const paymentX = $("#payment-close");


//Abre carrito
export const open = ()=> {
    cartOpen.on("click", ()=> {
    cartContainer.css("visibility", "visible");
    cart.removeClass("cart--move");
})
}
//Cierra carrito desde X
export const cartClose = ()=> {
    cartX.on("click", ()=> {
        cart.addClass("cart--move");
        setTimeout (()=> {
            cartContainer.css("visibility", "hidden");
        },500);
    })
}
//Cierra pago desde la X
export const paymentClose = ()=> {
    paymentX.on("click", ()=> {
        payment.addClass("payment--hide");
        cartContainer.css("visibility", "hidden");
        cart.addClass("cart--move");
        cart.removeClass("cart--hide");
    })
}
//Cerrar al confirmar
export const closeConfirm = () => {
    payment.addClass("payment--hide");
    cartContainer.css("visibility", "hidden");
    cart.addClass("cart--move");
    cart.removeClass("cart--hide");
}
//Cierra carrito con click fuera de cart
export const closeOut = ()=> {
    $(window).on("click", (e)=> {
        if (e.target.id == cartContainer.attr("id")) {
            if (payment.hasClass("payment--hide")) {
                cart.addClass("cart--move")
                setTimeout (()=> {
                    cartContainer.css("visibility", "hidden");
                    },500);
            } else {
                cart.addClass("cart--move")
                cartContainer.css("visibility", "hidden");
                payment.addClass("payment--hide");
                cart.removeClass("cart--hide");
            }
        }
    })
}
//Boton confirmar compra
export const showPayment = ()=> {
        cart.addClass("cart--hide");
        payment.removeClass("payment--hide");
}