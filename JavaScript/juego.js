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
        const IdiImagen = event.dataTransfer.getData('imagen');
        const imagen = document.getElementById(IdiImagen);
        console.log("Se soltó en:", event.target);
        zona.appendChild(imagen);
        imagen.removeAttribute('id');
        imagen.classList.add('animacion');
    });
});