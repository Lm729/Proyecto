window.addEventListener('scroll' , function () {
    let nav= document.querySelector('nav');
    let links= document.querySelectorAll('.link');

    if (window.scrollY >= window.innerHeight*0.1) {
        nav.classList.add('navScroll');
        links.forEach(link => link.classList.add('linkColor'));
    }
    
    else {
        nav.classList.remove('navScroll');
        links.forEach(link  => link.classList.remove('linkColor'));
    }
});