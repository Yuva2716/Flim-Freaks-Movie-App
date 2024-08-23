// Movie Desc / Data 
var titles = [
  
   { "movie": {
        "title": "IF",
        "subTitle": "Fantasy Comedy Drama",
        "desc": "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up.",
        "rating":"6.5",
        "videoURL": "",
    }},
    {"movie": {
        "title": "Abigail",
        "subTitle": "Horror Thriller",
        "desc": "After a group of criminals kidnap the ballerina daughter of a powerful underworld figure, they retreat to an isolated mansion, unaware that they're locked inside with no normal little girl.",
        "rating":"6.6",
        "videoURL": "",
    }},

    {"movie": {
        "title": "Nun II",
        "subTitle": "Mystery Horror Thriller",
        "desc": "In 1956, Father Noiret and his altar boy Jacques perform their daily chores in their church in Tarascon.While investigating a disturbance burned to death before a terrified Jacques.",
        "rating":"5.7",
        "videoURL": "",
    }},

    {"movie": {
        "title": "Bad Boys",
        "subTitle": "Action Comedy",
        "desc": "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
        "rating":"6.7",
        "videoURL": "",
    }},

    {"movie": {
        "title": "Prey",
        "subTitle": "Science Fiction",
        "desc": "Naru, a skilled warrior of the Comanche Nation, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.One of the Comanche hunters is killed by the Predator.",
        "rating":"7.1",
        "videoURL": "",
    }},

    {"movie": {
        "title": "Jurassic World",
        "subTitle": "Action Adventure Sci-Fi",
        "desc": "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
        "rating":"5.6",
        "videoURL": "",
    }}

    
];

/*Display Movie Name*/ 

var currentIndex = 0;

function displayMovie(index){
    document.getElementById('movie-title').innerText = titles[index].movie.title;
    document.getElementById('movie-sub-title').innerText = titles[index].movie.subTitle;
    document.getElementById('desc').innerText = titles[index].movie.desc;
    document.getElementById('movie-rating').innerText = titles[index].movie.rating;
    
}
displayMovie(currentIndex);




/*Background Slider*/ 
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const sliderCont1 = document.querySelector('.banner .bannerSwiper')
const sliderCont2 = document.querySelector('.banner .bannerSwiper .swiper-slide')
// const thumbCont = document.querySelector('.thumbs .thumbnail .moive-poster')

nextBtn.onclick = function (){    
    showSlider('next')
    currentIndex = (currentIndex + 1) % titles.length;
    displayMovie(currentIndex)
}

prevBtn.onclick = function(){
  showSlider('prev')
  currentIndex = (currentIndex - 1 + titles.length) % titles.length;
  displayMovie(currentIndex)
}

function showSlider(type){
   //slider DOM items is the list of all images
   let sliderItem = sliderCont1.querySelectorAll('.banner .bannerSwiper .swiper-wrapper .swiper-slide')
//    let thumbnailItems = thumbCont.querySelectorAll('.thumbs .thumbnail .moive-poster')
   let wrapper = sliderCont1.querySelector('.swiper-wrapper');
   console.log(sliderItem)
//    console.log(thumbnailItems)

   //slide all the images
   if (type ==='next'){    
    wrapper.appendChild(sliderItem[0]);
        console.log(sliderCont1)
    //    thumbCont.appendChild(thumbnailItems[0])
    //    sliderCont2.classList.add('next')

   }else if (type ==='prev'){    
    //    thumbCont.prepend(thumbnailItems[thumbnailItems.length-1])
        wrapper.prepend(sliderItem[sliderItem.length - 1]);
   }
}


/*Sidebar*/ 
const barIcon = document.querySelector('.bar-icon');
const sideBar = document.querySelector('.sidebar');
const sideClose = document.getElementById('side-close')

barIcon.addEventListener('click',function(){
    sideBar.style.top = "0"
})
sideClose.addEventListener('click',function(){
    sideBar.style.top = "-120%"
})



// Show Overlay 
// Get elements
const trailerButton = document.getElementById('trailerButton');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');
const trailerVideo = document.getElementById('trailerVideo');
const videoCont = document.querySelector('.video-container')

// Open the overlay when the trailer button is clicked
const trailerBtn = document.getElementById('trailerButton1');
trailerBtn.addEventListener('click', function(){
    overlay.style.display = 'inline';
    closeButton.style.display = "inline";
    videoCont.style.display = 'inline';
    videoCont.style.transition = "opacity 0.5s ease";

});

// Close the overlay when the close button is clicked
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    closeButton.style.display = "none";
    videoCont.style.display = 'none';


    // Stop the video by reloading the iframe
    trailerVideo.src = trailerVideo.src;
});


// Prevent scrolling when the overlay is active
// document.addEventListener('scroll', (event) => {
//     if (overlay.style.display === 'flex') {
//         event.preventDefault();
//         window.scrollTo(0, 0);
//     }
// });


/** Login page script  **/ 

/*Login button function*/ 

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
let index = ""

setInterval(()=>{

    slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
    slideIndex = (slideIndex + 1) % slides.length;
    if (slideIndex % 2){
        slideIndex=slideIndex+1
    }else{
        return "error"
    }

},3000)

const loginOverlay = document.getElementById("overlay1")
const loginClose = document.getElementById('closeButton1')
const loginBox1 = document.getElementById('box1')
const loginBox2 = document.getElementById('box2')
const loginBtn = document.getElementById('login-btn')
const alMember = document.getElementById('al-member')


loginBtn.addEventListener('click',function(){
    loginOverlay.style.display="block";
    loginBox1.style.display= "block";
    loginBox2.style.display= "block";
    loginClose.style.display="block";
})

loginClose.addEventListener('click',function(){
    loginOverlay.style.display="none";
    loginBox1.style.display= "none";
    loginBox2.style.display= "none";
    loginClose.style.display="none";
})

alMember.addEventListener('click',function(){
    loginOverlay.style.display="block";
    loginBox1.style.display= "block";
    loginBox2.style.display= "block";
    loginClose.style.display="block";

    signupOverlay.style.display="none";
    signupClose.style.display='none';
    signupPage.style.display="none";
})

/*Login info*/

const submitBtn = document.getElementById('submit-btn')
const mailInput = document.getElementById('mail-inp')
const passInput = document.getElementById('pass-inp')
const popupMsg = document.getElementById('popup-success')
const popupMsgErr = document.getElementById('popup-invalid')
const yuvaLogin = document.getElementById('yuva')
const aravindLogin = document.getElementById('aravind')
const listItems = document.querySelector('.nav-list')

submitBtn.addEventListener('click',function(){
    if(mailInput.value=="yuva@gmail.com" && passInput.value=="Yuva@123"){
        loginOverlay.style.display="none";
        loginBox1.style.display= "none";
        loginBox2.style.display= "none";
        loginClose.style.display="none";
        popupMsg.style.display='block';
        loginBtn.style.display= 'none';
        signupBtn.style.display= 'none';
        yuvaLogin.style.display = "block";
        


        setTimeout(function() {
            popupMsg.style.display = 'none';
        }, 4000);
    }else if(mailInput.value=="aravind@gmail.com" && passInput.value=="Aravind@123"){
        loginOverlay.style.display="none";
        loginBox1.style.display= "none";
        loginBox2.style.display= "none";
        loginClose.style.display="none";
        popupMsg.style.display='block';
        loginBtn.style.display= 'none';
        signupBtn.style.display= 'none';
        aravindLogin.style.display='block'
        
        setTimeout(function() {
            popupMsg.style.display = 'none';
        }, 4000);
    }else{

        popupMsgErr.style.display='block';
        setTimeout(function() {
            popupMsgErr.style.display = 'none';
        }, 3000);
    }
})


/* SignUp page script */ 

const signupBtn = document.getElementById('signup-btn')
const signupOverlay = document.getElementById("overlay2")
const signupClose = document.getElementById('closeButton2')
const signupPage = document.querySelector('.form_wrapper')
const createAccount = document.getElementById('c-account')

signupBtn.addEventListener('click',function(){
    signupOverlay.style.display="block";
    signupClose.style.display='block';
    signupPage.style.display="block";
})
signupClose.addEventListener('click',function(){
    signupOverlay.style.display="none";
    signupClose.style.display='none';
    signupPage.style.display="none";
})

createAccount.addEventListener('click',function(){
    signupOverlay.style.display="block";
    signupClose.style.display='block';
    signupPage.style.display="block";

    loginOverlay.style.display="none";
    loginBox1.style.display= "none";
    loginBox2.style.display= "none";
    loginClose.style.display="none";
})




