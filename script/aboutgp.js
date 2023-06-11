// слайдер
let slider = document.querySelector('.aboutgp__img__block');
let sliderItem = document.querySelectorAll('.aboutgp__img');
let sliderLine = document.querySelector('.slider__line');

let sliderNext = document.querySelector('.slider__btn__next');
let sliderPrev = document.querySelector('.slider__btn__prev');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderNext.addEventListener('click', nextSlider);
sliderPrev.addEventListener('click', prevSlider);

function nextSlider(){
    sliderCount++;
    console.log(sliderCount);

    if(sliderCount >= sliderItem.length){
        sliderCount = 0;
    }

    rollSlider()
}

function prevSlider(){
    sliderCount--;
    console.log(sliderCount);

    if(sliderCount < 0){
        sliderCount = sliderItem.length-1;
    }

    rollSlider()
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

setInterval(() =>{
    nextSlider()
},5000);


// анимации
const leftP = ScrollReveal({
    distance: '150px',
    duration: 3000,
    delay: 450,
    reset: false,
    easing:'cubic-bezier(.17,.67,.14,1.08)',
    desktop: true,
    mobile: true,      
})
leftP.reveal('.left', {delay:0, origin:'left'})

const leftP2 = ScrollReveal({
    distance: '150px',
    duration: 3000,
    delay: 450,
    reset: false,
})
leftP2.reveal('.left2', {delay:200, origin:'left'})

const rigthP = ScrollReveal({
    distance: '150px',
    duration: 3000,
    delay: 450,
    reset: false,
})
rigthP.reveal('.rigth', {delay:100, origin:'rigth'})

const textTitle = ScrollReveal({
    distance: '100px',
    duration: 1500,
    delay: 450,
    reset: false,
})
textTitle.reveal('.aboutgp__text__title', {delay: 0, origin:'bottom'})

const aboutCont = ScrollReveal({
    distance: '100px',
    duration: 2000,
    delay: 450,
    reset: false,
})
aboutCont.reveal('.aboutgp__info__content', {delay: 400, origin:'bottom'})

const paragraphFirst = ScrollReveal({
    distance: '50px',
    duration: 2500,
    delay: 450,
    reset: false,
})
paragraphFirst.reveal('.aboutgp__info__text__paragraph.first', {delay: 1000, origin:'bottom'})

const paragraphSecond = ScrollReveal({
    distance: '50px',
    duration: 2500,
    delay: 450,
    reset: false,
})
paragraphSecond.reveal('.aboutgp__info__text__paragraph.second', {delay: 1400, origin:'bottom'})

const tl = gsap.timeline()

tl.fromTo('.header__aboutgp__list li',
    {
        opacity: 0,
        y: -30,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
    }
)

    
