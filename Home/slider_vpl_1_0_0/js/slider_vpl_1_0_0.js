const slides = [{
        link: 'images/slider_vpl_1_0_0-pic1.jpg',
    },
    {
        link: 'images/slider_vpl_1_0_0-pic2.jpg',
    },

];
let slideIndex = 0;

start();

function start() {
    showSlider(slides);
    changeSlide(0);
}

function showSlider(slides) {
    let sliderContent = document.querySelector('.slider_vpl_1_0_0__content');
    let slider = document.querySelector('.slider_vpl_1_0_0__control');

    /* display/slides holder */
    let display = document.createElement("div");
    display.setAttribute('class', 'display');

    /* dots/indicators controls holder */
    let dots = document.createElement("div");
    dots.setAttribute('class', 'slider_vpl_1_0_0__dots');

    for (let i = 0; i < slides.length; i++) {
        let slide = `
            <div class="slider_vpl_1_0_0__item">
                <img width="900" height="300" src="${slides[i].link}" alt="" />
            </div>
        `;
        let dot = `<span class="slider_vpl_1_0_0__dot" onclick="showDirect(${i})"></span>`;
        display.innerHTML += slide;
        dots.innerHTML += dot;
    }
    slider.appendChild(display);
    sliderContent.appendChild(dots);
}


function changeSlide(n) {
    showDirect(slideIndex += n);
    setTimeout(() => {
        changeSlide(slideIndex++)
    }, 7000)

}

function showDirect(n) {
    slideIndex = n;
    let i, x = document.getElementsByClassName("slider_vpl_1_0_0__item");
    let dots = document.getElementsByClassName("slider_vpl_1_0_0__dot");

    if (n > x.length - 1) slideIndex = 0;
    if (n < 0) slideIndex = x.length - 1;
    for (i = 0; i <= x.length - 1; i++) {
        x[i].style.display = "none";
        slideIndex === i ? dots[slideIndex].style.backgroundColor = "#f7941e" : dots[i].style.backgroundColor = "#dedede"
    }
    x[slideIndex].style.display = "block";
}