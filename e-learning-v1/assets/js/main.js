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
const body = document.querySelector("body"),
  nav = document.querySelector(".nav"),
  modeToggle = document.querySelector(".navbar__darklight"),
  sidebarOpen = document.querySelector(".navbar__open"),
  siderbarClose = document.querySelector(".navbar__close");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark-theme");

  if (!body.classList.contains("dark-theme")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

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

// counter section
const counters = document.querySelectorAll(".counter__data");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
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
