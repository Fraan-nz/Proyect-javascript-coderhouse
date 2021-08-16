const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section"); //Array con cada imagen
let sliderSectionLast = sliderSection[sliderSection.length-1]; //Última foto del array

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin",sliderSectionLast); //Pongo la ultima imagen del array al inicio

const Next = () => {
    let sliderSectionFirst = document.querySelectorAll (".slider__section")[0];
    slider.style.marginLeft = "-200%"; //Aplico margin para que el slider se mueva a la derecha
    slider.style.transition = "all 0.5s";
    setTimeout(() => { //al terminar de mover el slider, muevo la primera img al final
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
};

const Prev = () => {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0"; //Margin 0 quita el margin puesto en el css
    slider.style.transition = "all 0.5s";
    setTimeout(()=> {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
};

const sliderAuto = () => {
    setInterval(() => {
        Next()
    }, 6000);
};

btnRight.addEventListener("click", ()=> Next());
btnLeft.addEventListener("click", ()=> Prev());
sliderAuto();

export {Next,Prev,sliderAuto}; 
