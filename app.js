const humbBtn = document.querySelector(".btn-humb");
const wrapper = document.querySelector(".wrapper");
const navItems = document.querySelectorAll(".navbar-item");

// document.querySelector("body").addEventListener("click",(e) => {
//   if(wrapper.classList.contains("active")) {
//     wrapper.classList.remove("active");
//   }
// })

navItems[0].addEventListener("click", (e) => {
  if(e.target.classList == "navbar-item products") {
    wrapper.classList.toggle("active");
  }
});



humbBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
