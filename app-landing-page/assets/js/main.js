// navbar section
const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// faq section
function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  answer.classList.toggle("hidden");
}
