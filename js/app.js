const   menuIcon  = document.querySelector('.nav__hamburger');
const   closeIcon  = document.querySelector(".nav__close");
const   nextBtnMob = document.querySelector(".slider-mob__next-btn");
const   prevBtnMob = document.querySelector(".slider-mob__prev-btn");   

/******
 *  Start Events *
  ******/
// Show Navigation menu When click on Menu Icon
menuIcon.addEventListener("click", () => {
    alterClass(document.querySelector(".nav__menu"), "nav__menu--visible", "add");
    addOverlay();
});
// Hide menu Icon When click on Close Icon
closeIcon.addEventListener("click", () => {
    alterClass(document.querySelector(".nav__menu"), "nav__menu--visible", "remove")
    removeOverlay();
});

/** Mobile Slider Events  **/
// Slide to Next Item in Slider
nextBtnMob.addEventListener("click", ()=>slide("next"));
// Slide to Previous Item in Slider
prevBtnMob.addEventListener("click", ()=>slide("previous"));

/*****
**  Main Functions  **
*****/
function alterClass(element, class_name, processName){
    if(processName === "add"){
        element.classList.add(class_name);
    }else if(processName === "remove"){
        if(element.classList.contains(class_name)){
            element.classList.remove(class_name);
        }
    }else if(processName === "toggle"){
        element.classList.toggle(class_name);
    }
}
function addOverlay(){
    if(!document.body.contains(document.querySelector(".overlay"))){
        const overlayElement = document.createElement("div");
        overlayElement.classList.add("overlay");
        document.body.append(overlayElement);
    }
}
function removeOverlay(){
    if(document.body.contains(document.querySelector(".overlay"))){
        document.querySelector(".overlay").remove();
    }
}

function slide(slideTo){
    const sliderBar  = document.querySelector(".slider-mob__bar");
    const slideWidth  = document.querySelector('.slider-mob__item').offsetWidth;
    const sliderItemsNum = Array.from(document.querySelectorAll(".slider-mob__item"))
    if(slideTo === "next"){
        if(sliderBar.scrollLeft < (sliderItemsNum.length - 1) * slideWidth){
            sliderBar.scrollLeft += slideWidth;
        }
    }else if(slideTo === "previous"){
        if(sliderBar.scrollLeft > 0){
            sliderBar.scrollLeft -= slideWidth;
        }
    }
}
function incQty(){
    inpQty.value++;
}
function decQty(){
    if(inpQty.value > 0){
        inpQty.value--;
    }
}