let hambergerIcon = document.querySelector(".hamberger-icon")
let hamberger = document.querySelector('.hamberger');
let bar = document.querySelector(".bar");
let crossIcon = document.querySelector('.cross-icon');

const myFunc = () => {

    hamberger.style.display = 'block';
}

const close = () => {
    hamberger.style.display = 'none';
    console.log("hiii");
}

crossIcon.addEventListener('click', close);




