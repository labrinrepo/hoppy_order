const add_link = document.querySelector(".btn-add-link");
const allOrderForms = document.getElementById("allOrderForms");
const remove_btn = document.querySelectorAll(".remove-btn");
const added2 = document.querySelector(".added-2");
const added3 = document.querySelector(".added-3");
const added4 = document.querySelector(".added-4");
const added5 = document.querySelector(".added-5");
const added6 = document.querySelector(".added-6");
const added7 = document.querySelector(".added-7");
const added8 = document.querySelector(".added-8");
const added9 = document.querySelector(".added-9");
const added10 = document.querySelector(".added-10");
const orderForms = [
  added2,
  added3,
  added4,
  added5,
  added6,
  added7,
  added8,
  added9,
  added10,
];

let i = 0;

add_link.addEventListener("click", () => {
  if (i >= orderForms.length - 1) {
    add_link.disabled = true;
  } else {
    orderForms[i].style.display = "block";
    i++;
    add_link.disabled = false;
  }
});

[...remove_btn].forEach((btn) => {
  btn.addEventListener("click", () => {
    i--;
    orderForms[i].style.display = "none";
  });
});
