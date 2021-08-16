export var orderList = [];

//Recuperar local storage
export const keylocalstorage = ()=> {
    if (JSON.parse(localStorage.getItem("Order")) != null) {
        orderList = JSON.parse(localStorage.getItem("Order"));
    }
    return orderList
}