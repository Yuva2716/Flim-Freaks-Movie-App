
//Swiper
const swiper = new Swiper(".bannerSwiper", {
    spaceBetween: 0,
    effect:"fade",

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    //Make thumbs slider works as thumbs for the banner slider

    thumbs: {
        swiper: thumbsSwiper
    }
  
});


//Thumbnail
  var thumbSwiper = new Swiper(".thumbs"{
    spaceBetween: 10,
    slidesPreView: 5,
    breakpoints :{
        200:{
            slidesPreView: 1.5
        }
        400:{
            slidePreView: 1.5
        }
        600:{
            slidePreView: 3
        }
        1100:{
            slidePreView: 5
        },

    },
    freeMode: true,
    watchSlidesProgress: true,
})

  

// Show Overlay 
// Get elements
const trailerButton = document.getElementById('trailerButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');
const trailerVideo = document.getElementById('trailerVideo');

// Open the overlay when the trailer button is clicked
trailerButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

// Close the overlay when the close button is clicked
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    // Stop the video by reloading the iframe
    trailerVideo.src = trailerVideo.src;
});

// Prevent scrolling when the overlay is active
document.addEventListener('scroll', (event) => {
    if (overlay.style.display === 'flex') {
        event.preventDefault();
        window.scrollTo(0, 0);
    }
});