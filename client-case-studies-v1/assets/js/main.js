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

// navbar section
{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}

document.querySelector("#check").addEventListener("click", () => {
  document.querySelector(".nav__items").classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    let menu = document.querySelector(".nav__items.active");
    if (menu) {
      menu.classList.remove("active");
    }
  });
});

// features section
const caseStudy = document.querySelector(".case-study");
const moreBtn = document.querySelector("#moreBtn");
const moreBox = document.querySelector("#more");

if (moreBtn) {
  moreBtn.addEventListener("click", () => {
    caseStudy.classList.toggle("active");
    if (caseStudy.classList.contains("active")) {
      moreBtn.innerHTML = "read less";
      moreBox.style.display = "flex";
    } else {
      moreBtn.innerHTML = "more case study";
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
