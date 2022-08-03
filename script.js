// carousel 
const carouselImages = document.querySelector('.carousel__images');
const images = document.querySelectorAll('.carousel__images img');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 250;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 250;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});



// cart button 
function cartOpener(){
  document.querySelector('.cart-container').style.display="inline-block";
}
function menu(){
  document.querySelector('.cart-container').style.display="none";
}

//request dish button
function requestDish(){
  document.querySelector('#request-dish').style.display="inline-block";
}
function requestDishCloser(){
  document.querySelector('#request-dish').style.display="none";
}