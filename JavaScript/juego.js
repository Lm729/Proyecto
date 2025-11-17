const imagenes = document.querySelectorAll('.cuadro');
const zonas = document.querySelectorAll('.zona');
const div = document.getElementById('general');
const titulo = document.querySelector('h2')
const boton = document.createElement('a');
const div2 = document.querySelector('.boton');
let contador = 0;

const estilo = document.querySelector('.reiniciar');

estilo.classList.remove('reiniciar');

imagenes.forEach(function(cuadro) {
    cuadro.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('imagen' , event.target.id);
    });
});

zonas.forEach(function(zona) {
    zona.addEventListener('dragover' , function(event) {
        event.preventDefault();
    });

    zona.addEventListener('drop' , function(event) {
        let IdImagen = event.dataTransfer.getData('imagen');
        let imagen = document.getElementById(IdImagen);
        let parrafo = document.querySelector('p');
        zona.appendChild(imagen);
        imagen.removeAttribute('id');
        parrafo.remove();
        contador ++;
        console.log(contador);

        if (contador === imagenes.length) {
            console.log('Todas la imagenes colocadas');
            estilo.classList.add('reiniciar');
            document.querySelector('.reiniciar').appendChild(boton);
            boton.href = "juego.html";
            boton.textContent = "Reiniciar";
            boton.classList.add('boton');
            zonas.forEach(zona => zona.style.border = 'none');
            div.classList.add('animacion_cuadro');
        };

        /*div.addEventListener('animationend' , function() {
            console.log('La animación termimnó');
            verificacion();
            });*/
        }
    );
});

div.addEventListener('animationend' , function() {
        console.log('La animación termimnó');
        verificacion();
    });

function verificacion () {

        const zonasId = [
            document.getElementById('zona_izquierda') ,
            document.getElementById('zona_centro') , 
            document.getElementById('zona_derecha')
        ]

        const formatoId = ['izquierda' , 'centro' , 'derecha']
        let contadorVerificacion = 0;

        for (let i = 0; i < zonasId.length; i++) {
            console.log(zonasId, [i]);
            console.log('se ejecuta FOR');
            
            const zona = zonasId[i];
                if (!zona) continue;

            const img = zona.querySelector('img');
                if (!img) continue;

                
                /*img.setAttribute('id', formatoId[i]);*/
                 if (img.getAttribute('data-posicion') === formatoId[i]) {
                    contadorVerificacion++;
                }
            
                /*if (img.id === formatoId[i]) {
                    contadorVerificacion ++;
                }*/
            };

            if (contadorVerificacion === zonasId.length) {
                console.log("Aramado correcto");
                animacionBuena();
            }

            else {
                console.log("Armado Incorrecto");
                animacionMala();
            }
};

function animacionBuena() {
    zonas.forEach(zona => zona.remove());
    titulo.innerHTML = "¡Felicitaciones!<br>Puzzle correctamente resuelto";
    titulo.classList.add('animacion_resuelta');
};

function animacionMala() {
    zonas.forEach(zona => zona.remove());
    titulo.innerHTML = "Lo sentimos, Puzzle no resuelto.<br> Prueba otra vez ";
    titulo.classList.add('animacion_resuelta');
};