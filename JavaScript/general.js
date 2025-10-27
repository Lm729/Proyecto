window.addEventListener('scroll' , function () {
    const nav = document.querySelector('nav');
    const links = document.querySelectorAll('.link');

    if (window.scrollY >= window.innerHeight *0.1) {
        nav.classList.add('navScroll');
        links.forEach(link => link.classList.add('linkColor'));
    }
    
    else {
        nav.classList.remove('navScroll');
        links.forEach(link  => link.classList.remove('linkColor'));
    }
});