import { openMenu } from "./functions/navigationMenu.js";
import * as slider from "./functions/slider.js";
import {loadDb} from "./functions/loadDb.js";
import { keylocalstorage } from "./functions/keyLocalStorage.js";
import { countCart } from "./functions/countCart.js";
import {cartRender} from "./dinamicViews/renders.js";
import {open,cartClose,paymentClose,closeOut} from "./functions/btnCart.js";
import {formMask} from "./functions/validateForm.js"


//Toggle menu navegacion
openMenu();
//Slider
slider.Next();
slider.Prev();
slider.sliderAuto();
//Cargar y mostrar productos del Json
loadDb();
//Recuperar localStorage
keylocalstorage();
//Mostrar productos del carrito
$("#cart-open-dsk, #cart-open-mb").on("click",()=>{
    cartRender();
})
countCart();
//Carrito open/close
open();
cartClose();
paymentClose();
closeOut();
//Mascaras tarjeta de crédito
formMask();

