// Start Carousel

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 5000);
}

// End Carousel

// Start modal

const handleSubmit = (event) => {
  event.preventDefault();
  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      alert("Votre message a bien été envoyé, merci!");
      myForm.reset();
    })
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

// End modal

// Can I have some burger

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
var menuItems = document.querySelectorAll('#close-menu li');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    if (burgerMenu.classList.contains("close")) {
      burgerMenu.classList.remove("close");
      overlay.classList.remove("overlay");
    }
  });
});

// End burger