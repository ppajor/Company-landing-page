let nav1 = document.querySelector("#nav1");
let nav2 = document.querySelector("#nav2");
let nav3 = document.querySelector("#nav3");
let slider = document.querySelector("#slider");

let elements = [nav1, nav2, nav3];

const removeClass = (elem) => {
  elem.forEach((el) => {
    el.classList.remove("slider-circle-active");
  });
};

nav1.addEventListener("click", () => {
  removeClass(elements);
  slider.style.left = "0%";
  nav1.classList.add("slider-circle-active");
});

nav2.addEventListener("click", () => {
  removeClass(elements);

  slider.style.left = "-100%";
  nav2.classList.add("slider-circle-active");
});

nav3.addEventListener("click", () => {
  removeClass(elements);

  slider.style.left = "-200%";
  nav3.classList.add("slider-circle-active");
});
