

let accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        accordion.classList.toggle('active');
    })
})


function changeIcon1() {
    var Image_Id = document.getElementById('minus-icon-1');
    if (Image_Id.src.match("assets/images/icon-plus.svg")) {
        Image_Id.src = "assets/images/icon-minus.svg";
    }
    else {
        Image_Id.src = "assets/images/icon-plus.svg";
    }
}

function changeIcon2() {
    var Image_Id = document.getElementById('plus-icon-2');
    if (Image_Id.src.match("assets/images/icon-plus.svg")) {
        Image_Id.src = "assets/images/icon-minus.svg";
    }
    else {
        Image_Id.src = "assets/images/icon-plus.svg";
    }
}

function changeIcon3() {
    var Image_Id = document.getElementById('plus-icon-3');
    if (Image_Id.src.match("assets/images/icon-plus.svg")) {
        Image_Id.src = "assets/images/icon-minus.svg";
    }
    else {
        Image_Id.src = "assets/images/icon-plus.svg";
    }
}

function changeIcon4() {
    var Image_Id = document.getElementById('plus-icon-4');
    if (Image_Id.src.match("assets/images/icon-plus.svg")) {
        Image_Id.src = "assets/images/icon-minus.svg";
    }
    else {
        Image_Id.src = "assets/images/icon-plus.svg";
    }
}