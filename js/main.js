const promoImages = document.querySelectorAll(".promo-image");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let currentIndex = 0;


/* =========================
   ACTUALIZAR SLIDER
========================= */

function updateSlider() {

  promoImages.forEach((image, index) => {

    image.classList.toggle(
      "active",
      index === currentIndex
    );

  });


  /* BOTON PREV */

  if (currentIndex === 0) {

    prevBtn.classList.add("disabled");

  } else {

    prevBtn.classList.remove("disabled");

  }


  /* BOTON NEXT */

  if (currentIndex === promoImages.length - 1) {

    nextBtn.classList.add("disabled");

  } else {

    nextBtn.classList.remove("disabled");

  }

}


/* =========================
   SIGUIENTE
========================= */

nextBtn.addEventListener("click", () => {

  if (currentIndex < promoImages.length - 1) {

    currentIndex++;

    updateSlider();

  }

});


/* =========================
   ANTERIOR
========================= */

prevBtn.addEventListener("click", () => {

  if (currentIndex > 0) {

    currentIndex--;

    updateSlider();

  }

});


/* =========================
   INIT
========================= */

updateSlider();