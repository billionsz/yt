function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}

window.onload = function() {
    // Trigger changeColor for the first image of variation 1
    var defaultImage = document.querySelector('.color-variation img');
    changeColor('variation_1', defaultImage);
};



var images = [
    "assets/Product_Images/variation_1/Variation_Image_1.webp",
    "assets/Product_Images/variation_1/Variation_Image_2.webp",
    "assets/Product_Images/variation_1/Variation_Image_3.webp",
    "assets/Product_Images/variation_1/Variation_Image_4.webp",
    "assets/Product_Images/variation_1/Variation_Image_5.webp",


];
var currentIndex = 0;

function updateCounter() {
    document.getElementById('counter').textContent = (currentIndex + 1) + '/' + images.length;
}

function updateImage() {
    document.getElementById('mainImage').src = images[currentIndex];
    updateCounter();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

window.onload = function() {
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    if (isMobile) {
        startSlideshow();
    } else {
        // For desktop view, trigger changeColor for the first image of variation 1
        var defaultImage = document.querySelector('.color-variation img');
        changeColor('variation_1', defaultImage);
    }
};

function startSlideshow() {
    var interval = setInterval(function() {
        nextSlide();
    }, 3000); // Change image every 3 seconds
}




// hamburger menu toggle

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        menu.style.left = (menu.style.left === '0px') ? '-300px' : '0px';
        menu.style.top = '0px';
    });

    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.style.left = '-300px';
        }
    });
});





function changeImage(variation, index) {
    var newImageSrc = `assets/Product_Images/${variation}/Variation_Image_${index}.webp`;
    document.getElementById('mainImage').src = newImageSrc;
}

function changeColor(targetVariation, clickedImage) {
    // Remove border from all images
    var variationImages = document.querySelectorAll('.color-variation img');
    variationImages.forEach(function(image) {
        image.style.border = '0';
    });

    // Add border to the clicked image
    clickedImage.style.border = '2px solid black';

    // Update the thumbnail images with the new variation
    var thumbnails = document.querySelectorAll('.thumbnail-container img');
    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.src = `assets/Product_Images/${targetVariation}/Variation_Image_${index + 1}.webp`;
        thumbnail.onclick = function() {
            changeImage(targetVariation, index + 1);
        };
    });

    // Update the main image source with the updated variation
    document.getElementById('mainImage').src = `assets/Product_Images/${targetVariation}/Variation_Image_1.webp`;
}


function addBorder(clickedElement) {
    // Remove border from all elements with the same class
    var elements = document.querySelectorAll(`.${clickedElement.classList[0]}`);
    elements.forEach(function(element) {
        element.style.border = '1px solid grey';
    });


    clickedElement.style.border = '2px solid black';

}


const leftContainer = document.querySelector('.product-container');
const rightContainer = document.querySelector('.content-container');

function handleScroll(event) {
    const deltaY = event.deltaY;

    // Check if right container can scroll further down and prevent default behavior
    if (deltaY > 0 && rightContainer.scrollHeight - rightContainer.scrollTop > rightContainer.clientHeight) {
        event.preventDefault();
        rightContainer.scrollTop += deltaY;
    }
}

leftContainer.addEventListener('wheel', handleScroll);
rightContainer.addEventListener('wheel', handleScroll);



// derlivery


// Get today's date
var today = new Date();

// Calculate delivery dates
var deliveryStartDate = new Date(today.getTime() + (2 * 24 * 60 * 60 * 1000)); // Add 2 days
var deliveryEndDate = new Date(today.getTime() + (4 * 24 * 60 * 60 * 1000)); // Add 4 days

// Format delivery dates
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
var formattedStartDate = deliveryStartDate.toLocaleDateString('fr-FR', options);
var formattedEndDate = deliveryEndDate.toLocaleDateString('fr-FR', options);

// Display delivery dates
// Display delivery dates with styling
document.getElementById('deliveryDate').innerHTML = "<span style='font-weight: lighter;'>Recevez-le entre </span><strong>" + formattedStartDate + "</strong><span style='font-weight: lighter;'> et </span><strong>" + formattedEndDate + "</strong><span style='font-weight: lighter;'>.</span>";