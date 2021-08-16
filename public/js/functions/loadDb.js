//import {productRender} from "../dinamicViews/renders.js";
import { categoryMenu } from "./category.js";
import {productRender} from "../dinamicViews/renders.js";

//Utilizo la base de datos para renderizar cada producto existente
export const loadDb = ()=> {
    $.getJSON("./db/products.json", (prod)=> {
        productRender(prod);
        categoryMenu(prod);
    })
}