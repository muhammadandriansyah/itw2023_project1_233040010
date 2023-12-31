/*=================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=================== scrol sections active Link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classlist.remove('active');
                documents.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*=================== stiky navbar ====================*/
    let header =document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=================== remove toggle icon navbar when click navbar Link (scroLL) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*=================== scroLL reveal ====================*/
ScrollReveal({

     // reset: true
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contant h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contant p, .about-content', { origin: 'right' });


/*=================== typed js ====================*/
var typed = new Typed(".text", {
    Strings: ["Frontend Developer", "Youtube", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});