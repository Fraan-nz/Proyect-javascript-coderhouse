import {CurrentUser} from "./currentUser.js"
import {closeConfirm} from "./btnCart.js"
import {modal} from "../dinamicViews/modalAlert.js"
import {clean} from "./cleanCart.js"
import { countCart } from "./countCart.js";

const payConfirm = $("#payConfirm");
//Inputs formulario
const numberCard = $("#numberCard");
const nameCard = $("#nameCard");
const dateCard = $("#dateCard");
const cvvCard = $("#cvvCard");
//Div creditcard
const showNumber = $("#showNumber");
const showName = $("#showName");
const showDate = $("#showDate");
const showCvv = $("#showcvv");

//Mascara para inputs
export const formMask = ()=> {
    $(document).ready(()=>{
    numberCard.mask("0000 0000 0000 0000", {placeholder:"#### #### #### ####"});
    nameCard.mask("NNNNNNNNNNNNNNNNNNNN", {placeholder:"FRANCO NUÑEZ",translation: {'N': {pattern: /[A-Za-z- ]/}}});
    dateCard.mask("00/VZ", {placeholder:"MM/YY",translation:  {'V': {pattern: /[2]/},'Z': {pattern: /[1-7]/}}});
    cvvCard.mask("000X",{placeholder:"####",translation:  {'X': {pattern: /[0-9]/, optional: true}}});
})
}
//Mostrar valores
numberCard.on("keyup",()=>{
    showNumber.text(numberCard.masked());
    if (numberCard.masked() == "") {
        showNumber.text("#### #### #### ####");
    }
})
nameCard.on("keyup",()=>{
    nameCard.val(nameCard.val().toUpperCase());
    showName.text(nameCard.val());
    if (nameCard.masked() == "") {
        showName.text("FRANCO NUÑEZ");
    }
})
dateCard.on("keyup",()=>{
    showDate.text(dateCard.masked());
    if (dateCard.masked() == "") {
        showDate.text("MM/AA");
    }
})
cvvCard.on("keyup",()=>{
    showCvv.text(cvvCard.masked());
    if (cvvCard.masked() == "") {
        showCvv.text("####");
    }
})
//Boton confirmar compra
payConfirm.on("click",(e)=>{
    e.preventDefault();
    while (numberCard.val().length == 19 && 
    nameCard.val().length > 3 && 
    dateCard.val().length == 5 &&  
    cvvCard.val().length > 2) {
        let currentUser = new CurrentUser (numberCard.masked(),nameCard.masked(),dateCard.masked(),cvvCard.masked());
        sessionStorage.setItem("User", JSON.stringify(currentUser));
        numberCard.val("");
        nameCard.val("");
        dateCard.val("");
        cvvCard.val("");
        showNumber.text("#### #### #### ####");
        showName.text("FRANCO NUÑEZ");
        showDate.text("MM/AA");
        showCvv.text("####");
        closeConfirm();
        modal();
        clean();
        countCart();
    }
})

