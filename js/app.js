// On load
document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.mobile-device');
    element.classList.add('loaded');
});

// Logic for loader
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.querySelector(".loader-container");

    loader.classList.remove("active");

    setTimeout(function () {
        loader.remove();
    }, 1000);
});


// Navbar scroll functionality
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Sidebar show and hide
    const scrollToTop = document.querySelector('.scrollToTop');

    if (window.scrollY > 1100) {
        scrollToTop.classList.remove('hide');
    } else if (window.scrollY < 1000) {
        scrollToTop.classList.add('hide');
    }

    // Comment image animation 
    if(window.scrollY > 150) {
        document.querySelector('.comment').classList.add('comment-active');
    } else {
        document.querySelector('.comment').classList.remove('comment-active');
    }
});

// Logic for sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar-close-btn')

hamburger.addEventListener('click', () => {
    sidebar.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('hide');
});

// Toggle mode
const altMode = document.querySelector('.switch input');
const altBtn = document.querySelector('.switch button');

altMode.addEventListener('change', function () {
    if (altMode.checked) {
        document.querySelector('body').classList.add('alt');
    } else {
        document.querySelector('body').classList.remove('alt');
    }
})

// Premium Features

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.feature-box');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Icons swiper functionality
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5, 
    spaceBetween: 10, 
    loop: true, 
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
    },
    pagination: {
        el: false,
    },
    navigation: true, 
    grabCursor: false, 
});

if (window.innerWidth < 700) {
    swiper.params.slidesPerView = 3;
}

window.addEventListener('resize', function () {
    if (window.innerWidth < 700) {
        swiper.params.slidesPerView = 3;
    } else {
        swiper.params.slidesPerView = 5;
    }
});