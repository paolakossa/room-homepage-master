const   menuIcon  = document.querySelector('.nav__hamburger');
const   closeIcon  = document.querySelector(".nav__close");
const     nextBtnMob = document.querySelector(".slider-mob__next-btn");
const     prevBtnMob = document.querySelector(".slider-mob__prev-btn"); 
const     nextBtnDes = document.querySelector(".slider-desk__next-btn");
const    prevBtnDes = document.querySelector(".slider-desk__prev-btn");  



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

//** Mobile Slider Events  **/
// Slide to Next Item in Slider
nextBtnMob.addEventListener("click", ()=>slide("next"));
// Slide to Previous Item in Slider
prevBtnMob.addEventListener("click", ()=>slide("previous"));

/** Desktop Slider Events  **/
// Slide to Next Item in Slider
nextBtnDes.addEventListener("click", ()=>slides("next"));
// Slide to Previous Item in Slider
prevBtnDes.addEventListener("click", ()=>slides("previous"));
    

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

function slides(slideTos){
    const sliderBars  = document.querySelector(".slider-desk__bar");
    const slideWidths  = document.querySelector('.slider-desk__item').offsetWidth;
    const sliderItemsNums = Array.from(document.querySelectorAll(".slider-desk__item"))
    if(slideTos === "next"){
        if(sliderBars.scrollLeft < (sliderItemsNums.length - 1) * slideWidths){
            sliderBars.scrollLeft += slideWidths;
        }
    }else if(slideTos === "previous"){
        if(sliderBars.scrollLeft > 0){
            sliderBars.scrollLeft -= slideWidths;
        }
    }
}