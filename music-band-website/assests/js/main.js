// toggle nav-menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// onclick nav-link close nav-menu
const navLink = document.querySelectorAll(".nav-link");
if (navLink) {
  navLink.forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

// button ripple effect
const buttons = document.querySelectorAll(".btn");
if (buttons) {
  for (const button of buttons) {
    button.addEventListener("click", (event) => {
      const button = event.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");
      const ripple = button.getElementsByClassName("ripple")[0];
      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
    });
  }
}

// hide and show scroll to top button
const scroll_btn = document.querySelector(".to-top-button");
if (scroll_btn) {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scroll_btn.style.display = "block";
    } else {
      scroll_btn.style.display = "none";
    }
  };

  // scroll to top button
  scroll_btn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

//
