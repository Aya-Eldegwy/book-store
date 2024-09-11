let searchButton = document.getElementById("search-button");
let searchClose = document.getElementById("search-close");
let searchContent = document.getElementById("search-content");

if (searchButton){
    searchButton.addEventListener("click" ,function() {
        searchContent.classList.add("show-search");
    } );
};
if (searchClose){
    searchClose.addEventListener("click" ,() => {
        searchContent.classList.remove("show-search");
    })    
    }
//login
let loginButton = document.getElementById("login-button");
let loginClose = document.getElementById("login-close");
let loginContent = document.getElementById("login-content");

if (loginButton){
    loginButton.addEventListener("click" ,function() {
        loginContent.classList.add("show-login");
    } );
};
if (loginClose){
    loginClose.addEventListener("click" ,function() {
        loginContent.classList.remove("show-login");
    } );
};
// add shadow-box
let shadowHeader = function(){
    let header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("shadow-header")
                        :header.classList.remove("shadow-header");
};
window.addEventListener("scroll",shadowHeader);



const swiperHome = new Swiper('.home-swiper', {
    
    loop: true,
    spaceBetween:-24,
    grabCursor:true,
    slidesPerView:"auto",
    centeredSlides:"auto",
    autoplay:{
                delay:3000,
                disableOnInteraction:false,
            },
    breakpoints:{
        1220:{
            spaceBetween: -32,
            }
                }
});
//swiper featured
const swiperFeatured = new Swiper('.featured-swiper', {
    
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:"auto",
    centeredSlides:"auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints:{
        768:{
            slidesPerView: 2,
            centeredSlides: false,
        },
        1000:{
            slidesPerView: 3,
            centeredSlides: false,
            },
    },
});
//swiper new
const swiperNew = new Swiper('.new-swiper', {
    
    loop: true,
    spaceBetween: 16,
    slidesPerView:"auto",
    breakpoints:{
        1000:{
            slidesPerView: 3,
            },
            768:{
                slidesPerView: 2,
            },
        }
            
            
});
//testimonial
const swiperTestimonial = new Swiper('.testimonial-swiper', {
    
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPerView:"auto",
    centeredSlides:"auto",
    breakpoints:{
        1000:{
            slidesPerView: 3,
            },
            768:{
                slidesPerView: 2,
                centeredSlides:false,
            },
    },
});
// darktheme
let themeButton = document.getElementById("theme-button");
let darkTheme = 'dark-theme';
let darkIcon = 'ri-sun-line';
let selectedTheme= localStorage.getItem("selected-theme");
let selectedIcon= localStorage.getItem("selected-icin");
let getcurrentTheme = ()=> document.body.classList.contains(darkTheme)?'dark':'light';
let getcurrentIcon = ()=> themeButton.classList.contains(darkIcon)?'ri-moon-line':'ri-sun-line';

if (selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon==='ri-moon-line'?'add':'remove'](darkIcon);
}
themeButton.addEventListener("click",function(){
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(darkIcon);
    localStorage.setItem("selected-theme",getcurrentTheme());
    localStorage.setItem("selected-icin",getcurrentIcon());
})
//scrollup
let scrollUpf = ()=>{
    let scrollUp=document.getElementById('scroll-up');
    this.scrollY>50?scrollUp.classList.add("show-scroll")
                    :scrollUp.classList.remove("show-scroll");

}
window.addEventListener("scroll",scrollUpf);
//scrollreveal
let sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})
sr.reveal('.home-data, .featured-container,.new-container,.join-data,.testimonial-container,.footer');
sr.reveal('.home-images',{delay:600});
sr.reveal('.services-card', {interval: 100});
sr.reveal('.discount-data', {origin: 'left'});
sr.reveal('.discount-images', {origin: 'right'});





