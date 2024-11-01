

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        let accordionBtn = accordion.querySelector('button');
        accordion.classList.toggle('active');
        if (accordionBtn.textContent === '-') {
            accordionBtn.textContent = '+';
        } else {
            accordionBtn.textContent = '-';
        }
    })
})

function imageFun() {
    var Image_Id = document.getElementById('plus-icon');
    if (Image_Id.src.match("icon-plus.svg")) {
        Image_Id.src = "icon-minus.svg";
    }
    else {
        Image_Id.src = "icon-plus.svg";
    }
}