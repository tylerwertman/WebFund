// setInterval to change from one large image to the next

var mainImg = document.querySelector(".main_img");

var shoeImages = [
    'images/nikes.jpg',
    'images/shoes.jpg',
    'images/blue-shoes.jpg'
]

var index = 0;

function changeImage() {
    mainImg.src = shoeImages[index];
    index++;
    if (index == shoeImages.length) {
        index = 0;
    }
}

setInterval(changeImage, 2000);
