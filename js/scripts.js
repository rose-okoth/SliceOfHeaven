// Business Logic
var sizeOne = {name: "small", price: 500};
var sizeTwo = {name: "medium", price: 800};
var sizeThree = {name: "large", price: 1000};
var sizeFour = {name: "extra-large", price: 1200};

var crustOne = {name:"thin", price: 100};
var crustTwo = {name:"flatbread", price: 150};
var crustThree = {name:"thick", price: 200};
var crustFour = {name:"custom", price: 400};

var toppingOne = {name:"pepporoni", price: 40};
var toppingTwo = {name:"mushrooms", price: 50};
var toppingThree = {name:"extra-cheese", price: 30};
var toppingFour = {name:"bacon", price: 60};
var toppingFive = {name:"olives", price: 40};
var toppingSix = {name:"pineapple", price: 20};











// User Interface Logic
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides-fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

