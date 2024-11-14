// Header Date and Time Stamp Timer
let timestamp = document.getElementById("timestamp")
setInterval(updateRealDateTime,1000)
function updateRealDateTime(){
    const dateTime = new Date()
    const understanderableDateTime = dateTime.toUTCString()
    timestamp.innerHTML = understanderableDateTime;
}

//Banner automatic image change Slider
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
    bannerSlides.src = bannerImages[sliderIndex]
},7000)
prevSlide.addEventListener('click', () => {
    sliderIndex = (sliderIndex - 1 + bannerImages.length) % bannerImages.length
    bannerSlides.src = bannerImages[sliderIndex]
})
nextSlide.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % bannerImages.length
    bannerSlides.src = bannerImages[sliderIndex]
})
