let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("invisible");
};

document.querySelectorAll(".faq .box-all .box h3").forEach((headings) => {
  headings.onclick = () => {
    headings.parentElement.classList.toggle("active");
  };
});
