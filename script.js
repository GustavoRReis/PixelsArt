let colorPalette = document.getElementById('color-palette');
let cor1 = colorPalette.firstElementChild;
cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'blue';
cor3.style.backgroundColor = 'yellow';
cor4.style.backgroundColor = 'red';

let black = document.getElementById('black').classList.toggle('selected');

colorPalette.addEventListener('click', function (event) {
    for (let i = 0; i < colorPalette.children.length; i++) {
        colorPalette.children[i].classList.remove('selected')
    }
    event.target.classList.toggle('selected')
}
)



function pintarPixels() {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', function (ev) {
            let selecionarCor = document.querySelector('.selected');
            ev.target.style.backgroundColor = selecionarCor.style.backgroundColor;
        })

    }
}
pintarPixels();


let pixels = document.querySelectorAll('.pixel');
let button = document.querySelector('#clear-board');


function limparGrade() {
    button.addEventListener('click', function () {
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = 'white';

        }
    });
}
limparGrade();