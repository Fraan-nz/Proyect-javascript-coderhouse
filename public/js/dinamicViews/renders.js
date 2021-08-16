import {orderList} from "../functions/keyLocalStorage.js";
import { sumTot, sumaTotal } from "../functions/sumCart.js";
import { countCart } from "../functions/countCart.js";
import { clean } from "../functions/cleanCart.js";
import { showPayment } from "../functions/btnCart.js";

const prodContainer = $("#products-container"); //Contenedor donde se renderizan los productos
const cartItems = $("#cart-items"); //Contenedor de items del carrito


//RENDER PRODUCTOS
const productRender = (data)=> { //data = elementos del json
    let prodFragment = $(document.createDocumentFragment());
    data.forEach(element => {
        //Div para cada producto
        let prodDiv = document.createElement('div');
        $(prodDiv).addClass("product")
        prodDiv.innerHTML= (`
            <img src="${element.productImg}" alt="prodImg" class="product__img">
            <span class="product__name">${element.productName}</span>
            <span class="product__desc">${element.productDesc}</span>
            <span class="product__price">$ ${element.productPrice}</span>
            `)
        //Boton y Evento para cada producto
        let btn = document.createElement('button');
        $(btn).addClass("product__btn")
                .html("Comprar")
                .appendTo(prodDiv)
                .click(()=> {
                    orderList.push(element); //Guardo el elemento seleccionado en orderList
                    localStorage.setItem("Order", JSON.stringify(orderList)); //Actualizo localStorage
                    countCart();
                })
        //Agrego cada div en el fragment
        prodFragment.append(prodDiv);
    });
    //Agrego fragment con los productos al html
    prodContainer.html(prodFragment);
}


//RENDER CARRITO
const cartRender = () => {
    let cartFragment = $(document.createDocumentFragment());
    if (localStorage.getItem("Order") == null) {  //Compruebo si localStorage no esta vacío
        cartFragment.append(`
            <span class="cart__empty">Su carrito esta vacío</span>
            `)
    
    }else {
        sumTot(); //Sumo elementos del carrito
        orderList.forEach( element => {
        let cartDiv = document.createElement('div'); //div que contiene cada producto
        $(cartDiv).addClass("cart__item")
        cartDiv.innerHTML+=(`
            <img src="${element.productImg}" alt="prodImg" class="cart-p__img">
            <span class="cart-p__name">${element.productName}</span>
            <span class="cart-p__price">$ ${element.productPrice}</span>
            `)
        //Boton y Evento para cada producto del carrrito
        let btn = document.createElement('span');
        $(btn).addClass("cart__btn")
                .html(`<i class="fas fa-times-circle"></i>`)
                .appendTo(cartDiv)
                .click(()=> {
                    orderList.splice(orderList.indexOf(element),1); //Busco indice del elemento y lo elimino de cartList
                    if (orderList.length > 0){
                        localStorage.setItem("Order", JSON.stringify(orderList)); //Actualizo local storage
                    } else {
                        localStorage.removeItem('Order');
                    } //Elimino si no hay nada
                    cartRender(); //Vuelvo a renderizar cada vez que elimino un item
                    countCart();
                })
                cartFragment.html(cartDiv);
    });
    //Muestro la suma total
    cartFragment.append(`<span class="cart__total">Total $ ${sumaTotal}</span>`)
    //Creo boton para vaciar el carrito
    let cleanBtn = document.createElement('button');
        $(cleanBtn).addClass("clean__btn")
                .html("Vaciar Carrito")
                .appendTo(cartFragment)
                .click(()=> {
                    clean();
                    countCart();
                    cartRender();
                })
    //Creo boton para confirmar la compra
    let confirmBtn = document.createElement('button');
        $(confirmBtn).addClass("confirm__btn")
                .html("Comprar")
                .appendTo(cartFragment)
                .click(()=> {
                    showPayment();
                })
    }
    //Agrego fragment con los productos al html del carrito
    cartItems.html(cartFragment);
};



export {productRender,cartRender}