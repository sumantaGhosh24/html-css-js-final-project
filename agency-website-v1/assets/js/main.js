// image lazy loading
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 300px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imageOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

// about us section
const accordion_buttons = document.querySelectorAll(".accordion__button");

accordion_buttons.forEach(function (accordion_button) {
  accordion_button.addEventListener("click", function () {
    accordion_buttons.forEach(function (accordion_button) {
      accordion_button.classList.remove("accordion--active");
      accordion_button.nextElementSibling.style.maxHeight = null;
    });

    this.classList.toggle("accordion--active");
    let accordion_panel = this.nextElementSibling;
    if (accordion_panel.style.maxHeight) {
      accordion_panel.style.maxHeight = null;
    } else {
      accordion_panel.style.maxHeight = accordion_panel.scrollHeight + "px";
    }
  });
});

//testimonial section
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}

// go top button section
var topBtn = document.getElementById("myBtn");

topBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  if (
    this.document.body.scrollTo > 20 ||
    this.document.documentElement.scrollTop > 20
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
