window.addEventListener('scroll' , function () {
    const historia = document.querySelector("#historia_img");
    const div = document.querySelector("#hijo1");

    if (window.scrollY >= window.innerHeight *0.1) {
        historia.classList.add('img1');
        div.classList.add('hijo_puerta');
    }
});

window.addEventListener('scroll' , function () {
    const historia = document.querySelector("#historia_img2");
    const div = document.querySelector("#hijo2");
    
    if (window.scrollY >= 1040) {
        historia.classList.add('img2');
        div.classList.add('hijo_puerta2');
    }
});

window.addEventListener('scroll' , function () {
    const historia = document.querySelector("#historia_img3");
    const div = document.querySelector("#hijo3");

    if (window.scrollY >= 1920) {
        historia.classList.add('img1');
        div.classList.add('hijo_puerta');
    }
});

const video = document.querySelector('video');
const botonPlay = document.querySelector('#play');
const botonPause = document.querySelector('#pause');
const tiempoActual = document.getElementById('tiempo_actual');

/*console.dir(video);*/

video.addEventListener('loadedmetadata' , () => {
    let duracion = fromatoTiempo(video.duration);
    tiempoActual.textContent = "Duración del Video " + duracion;
});

botonPlay.addEventListener('click' , () => {
    video.play();
    medidaTiempo();
    /*let duracion = fromatoTiempo(video.duration);
    console.log(duracion);*/
});

botonPause.addEventListener('click' , () => {
    video.pause();
    /*medidaTiempo();*/
    /*clearInterval(setInterval);*/

})

const fromatoTiempo = (tiempo) => {
    let minutos = Math.floor(tiempo / 60);
    let segundos = Math.floor (tiempo % 60);

    if (minutos < 10) minutos = `0${minutos}`;
    if (segundos < 10) segundos = `0${segundos}`;

    return `${minutos}:${segundos}`;
};
   /* if (tiempo >= 60) {
        minutos = tiempo / 60;
    }

    else {
        minutos = "00";
    }
    segundos = (tiempo % 60).toFixed(0)
    return `${minutos}:${segundos}`
};*/

const medidaTiempo = () => {
    setInterval( () => {
        tiempoActual.textContent = fromatoTiempo(video.currentTime);
    },1000); 
}