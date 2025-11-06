const imagenes = document.querySelectorAll('.cuadro');
const zonas = document.querySelectorAll('.zona');
const div = document.getElementById('general');
const titulo = document.querySelector('h2')
const boton = document.createElement('a');
const div2 = document.querySelector('.boton');
let contador = 0;

const estilo = document.querySelector('.reiniciar');

estilo.classList.remove('reiniciar');

/*imagenes.forEach(cuadro => {
    cuadro.addEventListener('dragstart' , event => {
        event.dataTransfer.setData('imagen' , event.target.id);
    });
});*/

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
        /*console.log("Se soltó en:", event.target);*/
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
            /*const div = document.getElementById('general');*/
            div.classList.add('animacion_cuadro');
            /*titulo.remove();*/
        };

        div.addEventListener('animationend' , function() {
            console.log('La animación termimnó');
            verificacion();
            //funcion finalBueno
            /*zonas.forEach(zona => zona.remove());
            titulo.innerHTML = "¡Felicitaciones!<br>Puzzle correctamente resuelto";
            titulo.classList.add('animacion_resuelta');
            //funcion finalMalo
            zonas.forEach(zona => zona.remove());
            titulo.innerHTML = "Lo sentimos, Puzzle no resuelto.<br> Prueba otra vez ";
            titulo.classList.add('animacion_resuelta');*/
            });
        /*const div = document.getElementById('general');
        div.classList.add('animacion');*/

    function verificacion () {
        imagen.setAttribute('id' , 'izquierda');
        imagen.setAttribute('id' , 'centro');
        imagen.setAttribute('id' , 'derecha');
        const zonas = [
            document.getElementById('zona_izquierda') ,
            document.getElementById('zona_centro') , 
            document.getElementById('zona_derecha')
        ]

        const formato = ['izquierda' , 'centro' , 'derecha']

        for (let i = 0; i < zonas.length; i++) {
            console.log(zonas, i);
            const imagen = zonas [i].querySelector('img');
            console.log('se ejecuta FOR');
                    
            if (!imagen || imagen.id !== formato [i]) {
                console.log('Mal ordenado');
                
                animacionMala();
                break;
            }

            else {
                animacionBuena();
                console.log('se ejecuta orden'); 
            }
                    
            /*if (orden) {
                /*animacionCorrecta();*/
            /*  zonas.classList.add('animacion');*/
            }
        };
        /*verificacion();*/
    });
    /*titulo.remove();*/
});

/*div.addEventListener('animationend' , function() {
    console.log('La animación termimnó');
    verificacion();
    //funcion finalBueno
    /*zonas.forEach(zona => zona.remove());
    titulo.innerHTML = "¡Felicitaciones!<br>Puzzle correctamente resuelto";
    titulo.classList.add('animacion_resuelta');
    //funcion finalMalo
    zonas.forEach(zona => zona.remove());
    titulo.innerHTML = "Lo sentimos, Puzzle no resuelto.<br> Prueba otra vez ";
    titulo.classList.add('animacion_resuelta');*/
/*});
/*const div = document.getElementById('general');
div.classList.add('animacion');*/

/*function verificacion () {
    imagen.setAttribute('id');
    const zonas = [
        document.getElementById('zona_izquierda') ,
        document.getElementById('zona_centro') , 
        document.getElementById('zona_derecha')
    ]

    const formato = ['izquierda' , 'centro' , 'derecha']

    for (let i = 0; i < zonas.length; i++) {
        const imagen = zonas [i].querySelector('img');
        console.log('se ejecuta FOR');
                
        if (!imagen || imagen.id !== formato [i]) {
            console.log('Mal ordenado');
            
            animacionMala();
            break;
        }

        else {
            animacionBuena();
            console.log('se ejecuta orden'); 
        }
                
        /*if (orden) {
            /*animacionCorrecta();*/
          /*  zonas.classList.add('animacion');*/
  /*      }
    };

*/
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

/*zonas.forEach(zona => zona.classList.add('animacion'));*/

/*zonas.forEach(zona => {
    zona.addEventListener('dragover' , event => {
        event.preventDefault();
    });
    
    zona.addEventListener('drop' , event => {
        let IdiImagen = event.dataTransfer.getData('imagen');
        let imagen = document.getElementById(IdiImagen);
        let parrafo = document.querySelector('p');
        /*console.log("Se soltó en:", event.target);*/
  /*      zona.appendChild(imagen);
        imagen.removeAttribute('id');
        parrafo.remove();
        /*verificacion();*/
        /*animacionCorrecta();*/
        //Comprobar si todo esta bien
        //llamar a la funcion comprobar
        //Si esta mal llamar a la funcion animacion-falsa y la funcion reacer
        //llamar a la funcion animacion-correcta
    /*    const verificacion = () => {
            const zonas = [
                document.getElementById('zona_izquierda') ,
                document.getElementById('zona_centro') , 
                document.getElementById('zona_derecha')
            ]

        const formato = ['izquierda' , 'centro' , 'derecha']
        let orden = true;

        for (let i = 0; i < zonas.length; i++) {
            const imagen = zonas [i].querySelector('img');
            console.log('se ejecuta FOR');
            
            if (!imagen || imagen.id !== formato [i]) {
                orden = false;
                /*animacionFalsa();*/
                /*break;
                }
                     
                if (orden) {
                    /*animacionCorrecta();*/
                  /*  zonas.classList.add('animacion');
                }
            }
        }
    });
    /*verificacion();*/
    /*animacionFalsa();*/
/*});*/

/*verificacion();*/
//Crear una Funcion que utilice este codigo:
/*imagen.classList.add('animacion');*/

/*const div = document.getElementById('general');*/

/*function verificacion () {
    console.log('se ejecuto la funcion verificar');
    /*const zonaIzquierda = document.getElementById('zona_izquierda');
    const zonaCentro = document.getElementById('zona_centro');
    const zonaDerecha = document.getElementById('zona_derecha');*/

    /*const imagenIzquierda = document.getElementById('izquierda');
    const imagenCentro = document.getElementById('centro');
    const imagenDerecha = document.getElementById('derecha');*/

    /*const zonas = [
        document.getElementById('zona_izquierda') ,
        document.getElementById('zona_centro') , 
        document.getElementById('zona_derecha')
    ]

    const formato = ['izquierda' , 'centro' , 'derecha']
    let orden = true;

    for (let i = 0; i < zonas.length; i++) {
        const imagen = zonas [i].querySelector('img');
        console.log('se ejecuta FOR');
        
        
        if (!imagen || imagen.id !== formato [i]) {
            orden = false;
            /*animacionFalsa();*/
      /*      break;
        }

        /*if (imagen || imagen.id === formato [i]) {
            animacionCorrecta();
        }*/

        /*if (orden) {
            /*animacionCorrecta();*/
           /* zonas.classList.add('animacion');
        }*/
  /*  }
};*/

/*animacionCorrecta();*/

/*function animacionCorrecta () {
    zonas.classList.add('animacion');
    console.log('se ejecuto la funcion de animacion');
};*/

