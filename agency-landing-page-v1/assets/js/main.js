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

// navbar section
const body = document.querySelector("body"),
  nav = document.querySelector(".nav"),
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

// features section
const features = document.querySelector(".features");
const moreBtn = document.querySelector("#moreBtn");
const moreBox = document.querySelector("#more");

if (moreBtn) {
  moreBtn.addEventListener("click", () => {
    features.classList.toggle("active");
    if (features.classList.contains("active")) {
      moreBtn.innerHTML = "read less";
      moreBox.style.display = "flex";
    } else {
      moreBtn.innerHTML = "more features";
      moreBox.style.display = "none";
    }
  });
}

// pricing section
const toggleSwitch = document.querySelector(".toggle-switch");

if (toggleSwitch) {
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      document.querySelector(".pricing-main").classList.add("active");
    } else {
      document.querySelector(".pricing-main").classList.remove("active");
    }
  });
}

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
