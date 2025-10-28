/*
1) Crear un evento por Div padre 1,2 y 3.
2) Manejar las animaciones por clase añadidas por el evento a base de scroll.
3) Las animaciones deben tener: animation-name: ;
    animation-duration: 4s y 3s;
    animation-timing-function: cubic-bezier.
    animation-fill-mode: forwards;
4) Cambiar las clases y unirlas en ccs.
5) Usar el id para no perder los estilos.
*/
window.addEventListener('scroll' , function () {
    const historia = document.querySelector("#historia_img");
    const div = document.querySelector("#hijo1");

    if (window.scrollY >= window.innerHeight *0.1) {
        historia.classList.add('img1');
    }
});