document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/images_carousel/image01.jpeg',
        './assets/images_carousel/image02.jpeg',
        './assets/images_carousel/image03.jpeg',
        './assets/images_carousel/image04.jpeg',
        './assets/images_carousel/image05.jpeg'
    ]

    const carouselImages = document.querySelector('.carousel-images')
    const prevButton = document.querySelector('.prev')
    const nextButton = document.querySelector('.next')

    images.forEach(src => {
        const img = document.createElement('img')
        img.src = src
        carouselImages.appendChild(img)
    });

    let currentIndex = 0
    let intervalId = null

    function showImage(index) {
        const totalImages = images.length
        if (index >= totalImages) {
            currentIndex = 0
        } else if (index < 0) {
            currentIndex = totalImages - 1
        } else {
            currentIndex = index
        }
        const offset = -currentIndex * 100
        carouselImages.style.transform = `translateX(${offset}%)`
    }

    function startCarousel() {
        intervalId = setInterval(() => {
            showImage(currentIndex + 1)
        }, 5000)
    }

    function stopCarousel() {
        clearInterval(intervalId)
    }

    prevButton.addEventListener('click', () => {
        stopCarousel()
        showImage(currentIndex - 1)
        startCarousel()
    })

    nextButton.addEventListener('click', () => {
        stopCarousel()
        showImage(currentIndex + 1)
        startCarousel()
    })

    startCarousel()
});
