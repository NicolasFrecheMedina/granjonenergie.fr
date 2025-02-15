var slideIndex = 1;
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Attendre le chargement du DOM avant d'exécuter les scripts
document.addEventListener("DOMContentLoaded", function () {

  // Start Carousel (Exécuté seulement si les slides existent)
  var slides = document.getElementsByClassName("mySlides");

  if (slides.length > 0) {
    var slideIndex = 1;
    showSlides(slideIndex);
    setInterval(function () {
      plusSlides(1);
    }, 5000);
  }
  // End Carousel

  // Start modal (S'exécute seulement si un formulaire est présent)
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          alert("Votre message a bien été envoyé, merci!");
          form.reset();
        })
        .catch((error) => alert(error));
    });
  }
  // End modal

  // Start burger menu (Toujours actif si les éléments existent)
  var burgerMenu = document.getElementById('burger-menu');
  var overlay = document.getElementById('menu');
  var menuItems = document.querySelectorAll('#close-menu li');

  if (burgerMenu && overlay) {
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
  }
  // End burger menu

  // Start Read More (Exécuté seulement si les éléments existent)
  var readMoreToggles = document.querySelectorAll('.read-more-toggle');

  if (readMoreToggles.length > 0) {
    readMoreToggles.forEach(function (toggleDiv) {
      toggleDiv.addEventListener('click', function () {
        const content = this.previousElementSibling;
        content.classList.toggle('hide');

        this.innerHTML = content.classList.contains('hide')
          ? 'Lire Plus <i class="fa fa-chevron-down"></i>'
          : 'Lire Moins <i class="fa fa-chevron-up"></i>';
      });
    });
  }
  // End Read More

});

// Start réalisation

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  });
});
// Start réalisation