// Header Date and Time Stamp Timer
let timestamp = document.getElementById("timestamp")
setInterval(updateRealDateTime,1000)
function updateRealDateTime(){
    const dateTime = new Date()
    const understanderableDateTime = dateTime.toLocaleString()
    timestamp.innerHTML = understanderableDateTime;
}
// Toggle mobile Menu/Navbar
const menu = document.getElementById("navMenu")
function togglemenu(){
    menu.classList.toggle('hidden')
}

// Hero/Banner automatic Slider image change with transition  
const bannerImages = ['../../assets/images/cover1 1.png','../../assets/images/cover2 1.png','../../assets/images/cover3 1.png','../../assets/images/cover4 1.png']
let sliderIndex = 0;
var bannerSlides = document.getElementById("bannerSlide")
var prevSlide = document.getElementById("bannerPrevSlideBtn")
var nextSlide = document.getElementById("bannerNextSlideBtn")

document.addEventListener('DOMContentLoaded',()=>{
    bannerSlides.src = bannerImages[sliderIndex]
})
setInterval(() => {
    sliderIndex = (sliderIndex + 1) % bannerImages.length
    bannerSlides.style.opacity=0;
    setTimeout(()=>{
        bannerSlides.src = bannerImages[sliderIndex]
        bannerSlides.style.opacity=1;
    },500)
},7000)
prevSlide.addEventListener('click', () => {
    sliderIndex = (sliderIndex - 1 + bannerImages.length) % bannerImages.length
    bannerSlides.src = bannerImages[sliderIndex]
})
nextSlide.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % bannerImages.length
    bannerSlides.src = bannerImages[sliderIndex]
})
