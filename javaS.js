let offSet = 0; 
// left offset

const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', () => {
    offSet = offSet + 256;
    if (offSet > 768) {
    offSet = 0};
    sliderLine.style.left = -offSet + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    offSet = offSet - 256;
    if (offSet < 0) {
    offSet = 768};
    sliderLine.style.left = -offSet + 'px';
});