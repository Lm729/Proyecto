window.addEventListener('scroll' , function () {
    const divHistoria = document.querySelector('#historia');
    const divJuego = document.querySelector('#juego');

    console.log(scrollY);
    

    if (window.scrollY >= 298) {
        divHistoria.classList.add('historia');
        divJuego.classList.add('juego');
    }

    else {
        divHistoria.classList.remove('historia');
        divJuego.classList.remove('juego');
    }
});