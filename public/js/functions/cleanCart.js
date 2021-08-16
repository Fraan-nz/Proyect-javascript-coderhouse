import { orderList } from "./keyLocalStorage.js";

//Funcion para limpiar el carrito
export const clean = ()=> {
    localStorage.removeItem('Order');
    orderList.length = 0
}