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

// scroll animation
const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box, idx) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// navbar
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  sidebarOpen = document.querySelector(".navbar__open"),
  siderbarClose = document.querySelector(".navbar__close");

sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("navbar__open") &&
    !clickedElm.classList.contains("navbar__menu")
  ) {
    nav.classList.remove("active");
  }
});

// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  grid: {
    rows: 1,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// go top button section
const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
