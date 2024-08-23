let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})






const nav = document.querySelector(".nav-items")
const open = document.getElementById("open")
const close = document.getElementById("close")

open.addEventListener("click", () => {
    nav.style.display="flex";
    nav.style.top="0%"
})
close.addEventListener("click", () => {
    nav.style.top="-110%"
})






document.querySelectorAll('.hover-button').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const tooltip = document.getElementById('tooltip');
        tooltip.textContent = e.target.getAttribute('data-text');
        tooltip.style.display = 'block';
    });

    button.addEventListener('mousemove', function(e) {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

    button.addEventListener('mouseleave', function() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    });
});


function filterMovies(genre) {
    var cards = document.querySelectorAll('.card-img');

    cards.forEach(function(card) {
        if (genre === 'all') {
            card.style.display = 'block';
        } else {
            var cardGenres = card.getAttribute('data-genre').split(' ');
            if (cardGenres.includes(genre)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}