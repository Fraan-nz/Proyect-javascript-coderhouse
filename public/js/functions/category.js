import {productRender} from "../dinamicViews/renders.js";

const btnAll = $("#all");
const categoryButons = $(".category__btn");


export const categoryMenu = (prod)=> {
    categoryButons.click((e)=> {
        e.preventDefault();
        let filterItems = [];
        prod.forEach(element => {
            if (element.productCategory == e.target.id) {
                filterItems.push(element); }
        })
        activeClass(e);
        productRender(filterItems);
    })
    btnAll.click((e)=> {
        e.preventDefault();
        productRender(prod);
    })
};

const activeClass = (e)=> {
    $(".category__btn").removeClass("category__btn--active");
    $(e.target).addClass("category__btn--active");
}