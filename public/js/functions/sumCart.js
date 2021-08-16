export let sumaTotal = 0;

//Funcion para sumar los elementos del carrito (los tomo desde el localstorage)
export const sumTot = ()=> {
    sumaTotal = 0; //Vuelvo a poner la variable en 0 para que no se sume en cada iteracion
    (JSON.parse(localStorage.getItem("Order"))).forEach(element =>
        sumaTotal += element.productPrice)
    return sumaTotal
    }