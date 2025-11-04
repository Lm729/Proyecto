const imagenes = document.querySelectorAll('.cuadro');
const zonas = document.querySelectorAll('.zona');

imagenes.forEach(cuadro => {
    cuadro.addEventListener('dragstart' , event => {
        event.dataTransfer.setData('imagen' , event.target.id);
    });
});

zonas.forEach(zona => {
    zona.addEventListener('dragover' , event => {
        event.preventDefault();
    });
    
    zona.addEventListener('drop' , event => {
        let IdiImagen = event.dataTransfer.getData('imagen');
        let imagen = document.getElementById(IdiImagen);
        let parrafo = document.querySelector('p');
        console.log("Se soltó en:", event.target);
        zona.appendChild(imagen);
        imagen.removeAttribute('id');
        parrafo.remove();
        //Comprobar si todo esta bien
        //llamar a la funcion comprobar
        //Si esta mal llamar a la funcion animacion-falsa y la funcion reacer
        //llamar a la funcion animacion-correcta
    });
});1
//Crear una Funcion que utilice este codigo:
/*imagen.classList.add('animacion');*/